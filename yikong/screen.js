var app=angular.module('myApp',['ng']);
app.run(function($rootScope){
    $rootScope.socketArr=[];
    $rootScope.$watch('socketArr',function(newVal,oldVal){
        if(oldVal.length>0){
            for(var i=0;i<oldVal.length;i++){
                oldVal[i].close();
            }
        }
    });
});
app.controller('screenCtrl',function($rootScope,$scope,$http,$timeout,$interval,$location,$anchorScroll){
    $scope.link='http://10.0.0.40:8080/wgcs';

    //列表处
    $scope.showId=0;
    $scope.showList=function(id){
        $scope.showId=id;
    };
    $scope.canShowList=function(id){
        if($scope.showId==id){
            return 'on';
        }
    };
    $http.get($scope.link+'/group/getGroupDataByStatus').success(function(data){
        if(data.data){
            $scope.groupNumber=data.data.length||0;
            $scope.groupList=data.data;
        }
    });

    $timeout(function(){
        var lastDevices=sessionStorage.getItem('devices')||'';
        if(lastDevices){
            lastDevices=lastDevices.split(',');
        }
        $rootScope.socketArr=[];
        var screenWatcher=function(id,url,device,tp,w,h){

            var BLANK_IMG =
                'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';

            var canvas = document.getElementById(id), g = canvas.getContext('2d');
            var xs,ys,xe,ye;
            var checkedArr=[];
            canvas.addEventListener('mousedown',function(e){
                if (e.layerX || e.layerX == 0) {
                    xs = e.layerX;
                    ys = e.layerY;
                } else if (e.offsetX || e.offsetX == 0) { // Opera
                    xs = e.offsetX;
                    ys = e.offsetY;
                }
                checkedArr=[];
                for(var x=0;x<$('.screens-list li input').length;x++){
                    if($('.screens-list li input').eq(x).prop('checked')){
                        checkedArr.push($('.screens-list li input').eq(x).attr('mess_id'));
                    }
                }
                checkedArr.push(device);
            },false);
            canvas.addEventListener('mouseup',function(e){
                if (e.layerX || e.layerX == 0) {
                    xe = e.layerX;
                    ye = e.layerY;
                } else if (e.offsetX || e.offsetX == 0) { // Opera
                    xe = e.offsetX;
                    ye = e.offsetY;
                }
                if(Math.abs(xe-xs)<10&&Math.abs(ye-ys)<10){
                    $http.get($scope.link+'/device/touchDeviceScreen?devices='+JSON.stringify(checkedArr)+'&touchPort='+tp+'&x='+parseInt(xs*(w/228))+'&y='+parseInt(ys*(h/400))).success(function(data){});
                }else{
                    $http.get($scope.link+'/device/slideDeviceScreen?devices='+JSON.stringify(checkedArr)+'&touchPort='+tp+'&xs='+parseInt(xs*(w/228))+'&ys='+parseInt(ys*(h/400))+'&xe='+parseInt(xe*(w/228))+'&ye='+parseInt(ye*(h/400))).success(function(){});
                }
            },false);
            //if(navigator.userAgent.indexOf("Firefox")>0){
            //    canvas.addEventListener('DOMMouseScroll',function(e){
            //        e.preventDefault();
            //    },false)
            //}else{
            //    canvas.addEventListener('mousewheel',function(event){
            //        event = event || window.event;
            //        event.preventDefault();
            //        var direction = event.wheelDelta && (event.wheelDelta > 0 ? "mouseup" : "mousedown");
            //        var oldTop=parseInt(event.wheelDelta);
            //        console.log(oldTop);
            //    },false);
            //}
            var ws = new WebSocket('ws://'+url);
            $rootScope.socketArr.push(ws);
            ws.binaryType = 'blob';

            ws.onclose = function() {
                console.log('onclose', arguments)
            };

            ws.onerror = function() {
                console.log('onerror', arguments)
            };

            ws.onmessage = function(message) {
                var blob = new Blob([message.data], {type: 'image/jpeg'});
                var URL = window.URL || window.webkitURL;
                var img = new Image();
                img.onload = function() {
                    //console.log(img.width, img.height);
                    canvas.width = img.width;
                    canvas.height = img.height;
                    g.drawImage(img, 0, 0);
                    img.onload = null;
                    img.src = BLANK_IMG;
                    img = null;
                    u = null;
                    blob = null;
                    URL.revokeObjectURL(url)
                };
                img.onerror = function() {
                    // Happily ignore. I suppose this shouldn't happen, but
                    // sometimes it does, presumably when we're loading images
                    // too quickly.
                    // Do the same cleanup here as in onload.
                    img.onload = img.onerror = null;
                    img.src = BLANK_IMG;
                    img = null;
                    blob = null;
                    URL.revokeObjectURL(url);
                    url = null
                }
                var u = URL.createObjectURL(blob);
                img.src = u;
            };
            ws.onopen = function() {
                console.log('onopen', arguments);
                ws.send('1920x1080/0');
            }
        };
        if(lastDevices.length>0){
            $('.screen-curtain').hide();
            $http.get($scope.link+'/device/showDeviceScreen?devices='+JSON.stringify(lastDevices)).success(function(data){
                if(data.code==200){
                    $('.screens-list').empty();
                    for(var x=0;x<data.data.length;x++){
                        var li='<li class="canvas-li"><h6>同屏展示失败</h6><h2>'+data.data[x].rank+'</h2><span class="get-new"></span><canvas id="canvas'+x+'"></canvas><div class="screens-operation"><span class="get-back"></span><span class="get-home"></span><span class="get-check"><input type="checkbox" mess_id="'+data.data[x].device+'"></span></div></li>'
                        $('.screens-list').append(li);
                        var assDevice=data.data[x].device;
                        var touchPort=data.data[x].touchStart;
                        var assId='canvas'+x;
                        var assPort=data.data[x].ip+':8080/wgcs/ws/'+data.data[x].inputStart+'/'+data.data[x].device;
                        var equipWidth=data.data[x].wmSize.split('x')[0];
                        var equipHeight=data.data[x].wmSize.split('x')[1];
                        screenWatcher(assId,assPort,assDevice,touchPort,equipWidth,equipHeight);
                    }
                    $('.get-check input').click(function(){
                        if($(this).prop('checked')){
                            $(this).parent().addClass('on');
                        }else{
                            $(this).parent().removeClass('on');
                        }
                    });
                    $('.get-back').click(function(){
                        for(var i= 0,checkArr=[];i<$('.get-check input').length;i++){
                            if($('.get-check input').eq(i).prop('checked')){
                                checkArr.push($('.get-check input').eq(i).attr('mess_id'));
                            }
                        }
                        var device=$(this).next().next().find('input').attr('mess_id');
                        checkArr.push(device);
                        $http.get($scope.link+'/device/returnBack?devices='+JSON.stringify(checkArr)).success(function(){});
                    });
                    $('.get-home').click(function(){
                        for(var i= 0,checkArr=[];i<$('.get-check input').length;i++){
                            if($('.get-check input').eq(i).prop('checked')){
                                checkArr.push($('.get-check input').eq(i).attr('mess_id'));
                            }
                        }
                        var device=$(this).next().find('input').attr('mess_id');
                        checkArr.push(device);
                        $http.get($scope.link+'/device/returnHome?devices='+JSON.stringify(checkArr)).success(function(){});
                    });
                    $('.get-new').click(function(){
                        var device=$(this).next().next().find('input').attr('mess_id');
                        $http.get($scope.link+'/device/clear?device='+device).success(function(){});
                    });
                    var screensWidth=$('.screens').width();
                    var screensMargin;
                    if(screensWidth>=1440){
                        screensMargin=(screensWidth-1440)/12;
                    }else if(screensWidth<1440 && screensWidth>=1200){
                        screensMargin=(screensWidth-1200)/10;
                    }else if(screensWidth<1200){
                        screensMargin=(screensWidth-960)/8;
                    }
                    screensMargin=screensMargin-0.5;
                    $('.canvas-li').css('margin','0 '+screensMargin+'px 5px');
                }
            })
        }else{
            $('.screens-list').empty();
            $('.screen-curtain').show();
        }
    },0);
    $timeout(function(){
        var lastDevices=sessionStorage.getItem('devices')||'';
        if(lastDevices){
            lastDevices=lastDevices.split(',');
        }
        for(var o=0;o<$('.group-list-li li input').length;o++){
            for(var p=0;p<lastDevices.length;p++){
                if($('.group-list-li li input').eq(o).attr('device')==lastDevices[p]){
                    $('.group-list-li li input').eq(o).prop('checked',function(){return true});
                    $('.group-list-li li input').eq(o).parent().addClass('on');
                }
            }
        }
        for(var i=0;i<$('.group-list-li div input').length;i++){
            var underList=$('.group-list-li div').eq(i).next().find('input');
            for(var x= 0,flag=true;x<underList.length;x++){
                if(underList.eq(x).prop('checked')==false){
                    flag=false;
                }
            }
            if(flag){
                $('.group-list-li div input').eq(i).prop('checked',function(){return true;});
                $('.group-list-li div input').eq(i).parent().addClass('on');
            }
        }
    },500);
    $scope.reload=function(){
        location.reload();
    };
    $scope.checkFlag=true;
    $scope.checkAllDevice=function(){
        if($scope.checkFlag){
            $('.get-check').addClass('on').find('input').prop('checked',function(){return true});
            $scope.checkFlag=!$scope.checkFlag
        }else{
            $('.get-check').removeClass('on').find('input').prop('checked',function(){return false});
            $scope.checkFlag=!$scope.checkFlag
        }
    };
    $scope.resetPhone=function(){
        $http.get($scope.link+'/device/openScreen').success(function(data){});
    };

    $scope.operationList=false;
    $scope.showOperationList=function(){
        $scope.operationList=!$scope.operationList;
        if($scope.operationList){
            $scope.writeInBox=false;
        }
    };
    $scope.openAll=function(n){
        for(var i= 0,arr=[];i<$('.screens-list input').length;i++){
            if($('.screens-list input').eq(i).prop('checked')){
                arr.push($('.screens-list input').eq(i).attr('mess_id'));
            }
        }
        if(arr.length==0){
            alert('请勾选需要操作的设备!');
        }else{
            var sendObj=new FormData();
            sendObj.append('devices',JSON.stringify(arr));
            sendObj.append('taskId',n);
            $http({
                method:'POST',
                url:$scope.link+"/device/open",
                data: sendObj,
                headers: {'Content-Type':undefined},
                transformRequest: angular.identity
            }).success( function ( data ) {
                if(data.code==200){
                    alert('添加任务成功！');
                    $scope.operationList=false;
                }
            });
        }
    };
    $scope.closeAll= function (n) {
        for(var i= 0,arr=[];i<$('.screens-list input').length;i++){
            if($('.screens-list input').eq(i).prop('checked')){
                arr.push($('.screens-list input').eq(i).attr('mess_id'));
            }
        }
        if(arr.length==0){
            alert('请勾选需要操作的设备!');
        }else{
            var sendObj=new FormData();
            sendObj.append('devices',JSON.stringify(arr));
            sendObj.append('taskId',n);
            $http({
                method:'POST',
                url:$scope.link+"/device/close",
                data: sendObj,
                headers: {'Content-Type':undefined},
                transformRequest: angular.identity
            }).success( function ( data ) {
                if(data.code==200){
                    alert('添加任务栏成功！');
                    $scope.operationList=false;
                }
            });
        }
    };
    $scope.backHome=function(){
        for(var i= 0,arr=[];i<$('.screens-list input').length;i++){
            if($('.screens-list input').eq(i).prop('checked')){
                arr.push($('.screens-list input').eq(i).attr('mess_id'));
            }
        }
        if(arr.length==0){
            alert('请勾选需要操作的设备！');
        }else{
            $http.get($scope.link+'/device/backHome?devices='+JSON.stringify(arr)).success(function(data){
                if(data.code==200){
                    alert('添加任务成功！');
                    $scope.operationList=false;
                }
            });
        }
    };

    $scope.writeInBox=false;
    $scope.showWriteBox=function(){
        $scope.writeInBox=!$scope.writeInBox;
        if($scope.writeInBox){
            $scope.operationList=false;
        }
    };
    $scope.writeSomething='';
    $scope.writeSure=function(){
        for(var i= 0,arr=[];i<$('.screens-list input').length;i++){
            if($('.screens-list input').eq(i).prop('checked')){
                arr.push($('.screens-list input').eq(i).attr('mess_id'));
            }
        }
        if(arr.length==0){
            alert('请勾选设备！');
        }else if($scope.writeSomething==''){
            alert('请输入文字!');
        }else{
            $http.get($scope.link+'/device/printMsg?devices='+JSON.stringify(arr)+'&msg='+$scope.writeSomething).success(function(data){
               if(data.code==200){
                   $scope.writeInBox=false;
               }
            })
        }
    };
    $scope.writeCancel=function(){
        $scope.writeInBox=false;
    };

    $scope.toTop=function(){
        $location.hash('top-side');
        $anchorScroll();
    };
});
app.directive('groupCheckOne',function($rootScope,$http){
    return {
        link : function(scope,elem){
            elem.click(function(){
                var flag=true;
                var child=elem.parent().parent().parent().parent().find('input');
                if(elem.prop('checked')){
                    elem.parent().addClass('on');
                }else{
                    elem.parent().removeClass('on');
                }
                for(var i=0;i<child.length;i++){
                    if(child.eq(i).prop('checked')==false){
                        flag=false;
                    }
                }
                if(!flag){
                    elem.parent().parent().parent().parent().prev().find('span').removeClass('on').find('input').prop('checked',function(){return false});
                }else{
                    elem.parent().parent().parent().parent().prev().find('span').addClass('on').find('input').prop('checked',function(){return true});
                }
                for(var a= 0,devices=[];a<$('.group-list-li ul input').length;a++){
                    if($('.group-list-li ul input').eq(a).prop('checked')){
                        devices.push($('.group-list-li ul input').eq(a).attr('device'));
                    }
                }
                sessionStorage.setItem('devices',devices);
                $rootScope.socketArr=[];
                var screenWatcher=function(id,url,device,tp,w,h){

                    var BLANK_IMG =
                        'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';

                    var canvas = document.getElementById(id), g = canvas.getContext('2d');
                    var xs,ys,xe,ye;
                    var checkedArr=[];
                    canvas.addEventListener('mousedown',function(e){
                        if (e.layerX || e.layerX == 0) {
                            xs = e.layerX;
                            ys = e.layerY;
                        } else if (e.offsetX || e.offsetX == 0) { // Opera
                            xs = e.offsetX;
                            ys = e.offsetY;
                        }
                        checkedArr=[];
                        for(var x=0;x<$('.screens-list li input').length;x++){
                            if($('.screens-list li input').eq(x).prop('checked')){
                                checkedArr.push($('.screens-list li input').eq(x).attr('mess_id'));
                            }
                        }
                        checkedArr.push(device);
                    },false);
                    canvas.addEventListener('mouseup',function(e){
                        if (e.layerX || e.layerX == 0) {
                            xe = e.layerX;
                            ye = e.layerY;
                        } else if (e.offsetX || e.offsetX == 0) { // Opera
                            xe = e.offsetX;
                            ye = e.offsetY;
                        }
                        if(Math.abs(xe-xs)<10&&Math.abs(ye-ys)<10){
                            $http.get(scope.link+'/device/touchDeviceScreen?devices='+JSON.stringify(checkedArr)+'&touchPort='+tp+'&x='+parseInt(xs*(w/228))+'&y='+parseInt(ys*(h/400))).success(function(data){});
                        }else{
                            $http.get(scope.link+'/device/slideDeviceScreen?devices='+JSON.stringify(checkedArr)+'&touchPort='+tp+'&xs='+parseInt(xs*(w/228))+'&ys='+parseInt(ys*(h/400))+'&xe='+parseInt(xe*(w/228))+'&ye='+parseInt(ye*(h/400))).success(function(){});
                        }
                    },false);
                    var ws = new WebSocket('ws://'+url);
                    $rootScope.socketArr.push(ws);
                    ws.binaryType = 'blob';

                    ws.onclose = function() {
                        console.log('onclose', arguments)
                    };

                    ws.onerror = function() {
                        console.log('onerror', arguments)
                    };

                    ws.onmessage = function(message) {
                        var blob = new Blob([message.data], {type: 'image/jpeg'});
                        var URL = window.URL || window.webkitURL;
                        var img = new Image();
                        img.onload = function() {
                            //console.log(img.width, img.height);
                            canvas.width = img.width;
                            canvas.height = img.height;
                            g.drawImage(img, 0, 0);
                            img.onload = null;
                            img.src = BLANK_IMG;
                            img = null;
                            u = null;
                            blob = null;
                            URL.revokeObjectURL(url)
                        };
                        img.onerror = function() {
                            // Happily ignore. I suppose this shouldn't happen, but
                            // sometimes it does, presumably when we're loading images
                            // too quickly.
                            // Do the same cleanup here as in onload.
                            img.onload = img.onerror = null;
                            img.src = BLANK_IMG;
                            img = null;
                            blob = null;
                            URL.revokeObjectURL(url);
                            url = null
                        }
                        var u = URL.createObjectURL(blob);
                        img.src = u;
                    };
                    ws.onopen = function() {
                        console.log('onopen', arguments);
                        ws.send('1920x1080/0');
                    }
                };
                if(devices.length>0){
                    $('.screen-curtain').hide();
                    $http.get(scope.link+'/device/showDeviceScreen?devices='+JSON.stringify(devices)).success(function(data){
                        $('.screens-list').empty();
                        for(var x=0;x<data.data.length;x++){
                            var li='<li class="canvas-li"><h6>同屏展示失败</h6><h2>'+data.data[x].rank+'</h2><span class="get-new"></span><canvas id="canvas'+x+'"></canvas><div class="screens-operation"><span class="get-back"></span><span class="get-home"></span><span class="get-check"><input type="checkbox" mess_id="'+data.data[x].device+'"></span></div></li>'
                            $('.screens-list').append(li);
                            var assDevice=data.data[x].device;
                            var touchPort=data.data[x].touchStart;
                            var assId='canvas'+x;
                            var assPort=data.data[x].ip+':8080/wgcs/ws/'+data.data[x].inputStart+'/'+data.data[x].device;
                            var equipWidth=data.data[x].wmSize.split('x')[0];
                            var equipHeight=data.data[x].wmSize.split('x')[1];
                            screenWatcher(assId,assPort,assDevice,touchPort,equipWidth,equipHeight);
                        }
                        $('.get-check input').click(function(){
                            if($(this).prop('checked')){
                                $(this).parent().addClass('on');
                            }else{
                                $(this).parent().removeClass('on');
                            }
                        });
                        $('.get-back').click(function(){
                            for(var i= 0,checkArr=[];i<$('.get-check input').length;i++){
                                if($('.get-check input').eq(i).prop('checked')){
                                    checkArr.push($('.get-check input').eq(i).attr('mess_id'));
                                }
                            }
                            var device=$(this).next().next().find('input').attr('mess_id');
                            checkArr.push(device);
                            $http.get(scope.link+'/device/returnBack?devices='+JSON.stringify(checkArr)).success(function(){});
                        });
                        $('.get-home').click(function(){
                            for(var i= 0,checkArr=[];i<$('.get-check input').length;i++){
                                if($('.get-check input').eq(i).prop('checked')){
                                    checkArr.push($('.get-check input').eq(i).attr('mess_id'));
                                }
                            }
                            var device=$(this).next().find('input').attr('mess_id');
                            checkArr.push(device);
                            $http.get(scope.link+'/device/returnHome?devices='+JSON.stringify(checkArr)).success(function(){});
                        });
                        $('.get-new').click(function(){
                            var device=$(this).next().next().find('input').attr('mess_id');
                            $http.get(scope.link+'/device/clear?device='+device).success(function(){});
                        });
                        var screensWidth=$('.screens').width();
                        var screensMargin;
                        if(screensWidth>=1440){
                            screensMargin=(screensWidth-1440)/12;
                        }else if(screensWidth<1440 && screensWidth>=1200){
                            screensMargin=(screensWidth-1200)/10;
                        }else if(screensWidth<1200){
                            screensMargin=(screensWidth-960)/8;
                        }
                        screensMargin=screensMargin-0.5;
                        $('.canvas-li').css('margin','0 '+screensMargin+'px 5px');
                    })
                }else{
                    $('.screens-list').empty();
                    $('.screen-curtain').show();
                }
            });
        }
    }
});
app.directive('groupCheckAll',function($rootScope,$http){
    return {
        link:function(scope,elem){
            elem.click(function(){
                if(elem.prop('checked')){
                    elem.parent().addClass('on');
                    elem.parent().parent().parent().next().find('span').addClass('on').find('input').prop('checked',function(){return true});
                }else{
                    elem.parent().removeClass('on');
                    elem.parent().parent().parent().next().find('span').removeClass('on').find('input').prop('checked',function(){return false});
                }
                for(var i= 0,devices=[];i<$('.group-list-li ul input').length;i++){
                    if($('.group-list-li ul input').eq(i).prop('checked')){
                        devices.push($('.group-list-li ul input').eq(i).attr('device'));
                    }
                }
                sessionStorage.setItem('devices',devices);
                $rootScope.socketArr=[];
                var screenWatcher=function(id,url,device,tp,w,h){

                    var BLANK_IMG =
                        'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';

                    var canvas = document.getElementById(id), g = canvas.getContext('2d');
                    var xs,ys,xe,ye;
                    var checkedArr=[];
                    canvas.addEventListener('mousedown',function(e){
                        if (e.layerX || e.layerX == 0) {
                            xs = e.layerX;
                            ys = e.layerY;
                        } else if (e.offsetX || e.offsetX == 0) { // Opera
                            xs = e.offsetX;
                            ys = e.offsetY;
                        }
                        checkedArr=[];
                        for(var x=0;x<$('.screens-list li input').length;x++){
                            if($('.screens-list li input').eq(x).prop('checked')){
                                checkedArr.push($('.screens-list li input').eq(x).attr('mess_id'));
                            }
                        }
                        checkedArr.push(device);
                    },false);
                    canvas.addEventListener('mouseup',function(e){
                        if (e.layerX || e.layerX == 0) {
                            xe = e.layerX;
                            ye = e.layerY;
                        } else if (e.offsetX || e.offsetX == 0) { // Opera
                            xe = e.offsetX;
                            ye = e.offsetY;
                        }
                        if(Math.abs(xe-xs)<10&&Math.abs(ye-ys)<10){
                            $http.get(scope.link+'/device/touchDeviceScreen?devices='+JSON.stringify(checkedArr)+'&touchPort='+tp+'&x='+parseInt(xs*(w/228))+'&y='+parseInt(ys*(h/400))).success(function(data){});
                        }else{
                            $http.get(scope.link+'/device/slideDeviceScreen?devices='+JSON.stringify(checkedArr)+'&touchPort='+tp+'&xs='+parseInt(xs*(w/228))+'&ys='+parseInt(ys*(h/400))+'&xe='+parseInt(xe*(w/228))+'&ye='+parseInt(ye*(h/400))).success(function(){});
                        }
                    },false);
                    var ws = new WebSocket('ws://'+url);
                    $rootScope.socketArr.push(ws);
                    ws.binaryType = 'blob';

                    ws.onclose = function() {
                        console.log('onclose', arguments)
                    };

                    ws.onerror = function() {
                        console.log('onerror', arguments)
                    };

                    ws.onmessage = function(message) {
                        var blob = new Blob([message.data], {type: 'image/jpeg'});
                        var URL = window.URL || window.webkitURL;
                        var img = new Image();
                        img.onload = function() {
                            //console.log(img.width, img.height);
                            canvas.width = img.width;
                            canvas.height = img.height;
                            g.drawImage(img, 0, 0);
                            img.onload = null;
                            img.src = BLANK_IMG;
                            img = null;
                            u = null;
                            blob = null;
                            URL.revokeObjectURL(url)
                        };
                        img.onerror = function() {
                            // Happily ignore. I suppose this shouldn't happen, but
                            // sometimes it does, presumably when we're loading images
                            // too quickly.
                            // Do the same cleanup here as in onload.
                            img.onload = img.onerror = null;
                            img.src = BLANK_IMG;
                            img = null;
                            blob = null;
                            URL.revokeObjectURL(url);
                            url = null
                        }
                        var u = URL.createObjectURL(blob);
                        img.src = u;
                    };
                    ws.onopen = function() {
                        console.log('onopen', arguments);
                        ws.send('1920x1080/0');
                    }
                };
                if(devices.length>0){
                    $('.screen-curtain').hide();
                    $http.get(scope.link+'/device/showDeviceScreen?devices='+JSON.stringify(devices)).success(function(data){
                        $('.screens-list').empty();
                        for(var x=0;x<data.data.length;x++){
                            var li='<li class="canvas-li"><h6>同屏展示失败</h6><h2>'+data.data[x].rank+'</h2><span class="get-new"></span><canvas id="canvas'+x+'"></canvas><div class="screens-operation"><span class="get-back"></span><span class="get-home"></span><span class="get-check"><input type="checkbox" mess_id="'+data.data[x].device+'"></span></div></li>'
                            $('.screens-list').append(li);
                            var assDevice=data.data[x].device;
                            var touchPort=data.data[x].touchStart;
                            var assId='canvas'+x;
                            var assPort=data.data[x].ip+':8080/wgcs/ws/'+data.data[x].inputStart+'/'+data.data[x].device;
                            var equipWidth=data.data[x].wmSize.split('x')[0];
                            var equipHeight=data.data[x].wmSize.split('x')[1];
                            screenWatcher(assId,assPort,assDevice,touchPort,equipWidth,equipHeight);
                        }
                        $('.get-check input').click(function(){
                            if($(this).prop('checked')){
                                $(this).parent().addClass('on');
                            }else{
                                $(this).parent().removeClass('on');
                            }
                        });
                        $('.get-back').click(function(){
                            for(var i= 0,checkArr=[];i<$('.get-check input').length;i++){
                                if($('.get-check input').eq(i).prop('checked')){
                                    checkArr.push($('.get-check input').eq(i).attr('mess_id'));
                                }
                            }
                            var device=$(this).next().next().find('input').attr('mess_id');
                            checkArr.push(device);
                            $http.get(scope.link+'/device/returnBack?devices='+JSON.stringify(checkArr)).success(function(){});
                        });
                        $('.get-home').click(function(){
                            for(var i= 0,checkArr=[];i<$('.get-check input').length;i++){
                                if($('.get-check input').eq(i).prop('checked')){
                                    checkArr.push($('.get-check input').eq(i).attr('mess_id'));
                                }
                            }
                            var device=$(this).next().find('input').attr('mess_id');
                            checkArr.push(device);
                            $http.get(scope.link+'/device/returnHome?devices='+JSON.stringify(checkArr)).success(function(){});
                        });
                        $('.get-new').click(function(){
                            var device=$(this).next().next().find('input').attr('mess_id');
                            $http.get(scope.link+'/device/clear?device='+device).success(function(){});
                        });
                        var screensWidth=$('.screens').width();
                        var screensMargin;
                        if(screensWidth>=1440){
                            screensMargin=(screensWidth-1440)/12;
                        }else if(screensWidth<1440 && screensWidth>=1200){
                            screensMargin=(screensWidth-1200)/10;
                        }else if(screensWidth<1200){
                            screensMargin=(screensWidth-960)/8;
                        }
                        screensMargin=screensMargin-0.5;
                        $('.canvas-li').css('margin','0 '+screensMargin+'px 5px');
                    })
                }else{
                    $('.screens-list').empty();
                    $('.screen-curtain').show();
                }
            });
        }
    }
});
app.directive('screenWatcher',function(){
    return {
         link :function(scope,elem){
             window.onresize=function(){
                 var screensWidth=elem.width();
                 var screensMargin;
                 if(screensWidth>=1440){
                     screensMargin=(screensWidth-1440)/12;
                 }else if(screensWidth<1440 && screensWidth>=1200){
                     screensMargin=(screensWidth-1200)/10;
                 }else if(screensWidth<1200){
                     screensMargin=(screensWidth-960)/8;
                 }
                 screensMargin=screensMargin-0.5;
                 elem.find('li').css('margin','0 '+screensMargin-1+'px 5px');
             };
         }
    }
});

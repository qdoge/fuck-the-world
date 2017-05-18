var app=angular.module('myApp',['ng','ngRoute']);
app.config(function($routeProvider){
    $routeProvider
        //.when('/page1',{templateUrl:'tpl/page1.html',controller:'page1C'})
        .when('/page2',{templateUrl:'tpl/page2.html',controller:'page2C'})
        .when('/page3',{templateUrl:'tpl/page3.html',controller:'page3C'})
        .when('/page4',{templateUrl:'tpl/page4.html',controller:'page4C'})
        //.when('/page5',{templateUrl:'tpl/page5.html',controller:'page5C'})
        .when('/page6',{templateUrl:'tpl/page6.html',controller:'page6C'})
        .when('/page7',{templateUrl:'tpl/page7.html',controller:'page7C'})
        .when('/page8',{templateUrl:'tpl/page8.html',controller:'page8C'})
        .when('/page9',{templateUrl:'tpl/page9.html',controller:'page9C'})
        .when('/page10',{templateUrl:'tpl/page10.html',controller:'page10C'})
        .when('/page11',{templateUrl:'tpl/page11.html',controller:'page11C'})
        .when('/page12',{templateUrl:'tpl/page12.html',controller:'page12C'})
        .when('/page13',{templateUrl:'tpl/page13.html',controller:'page13C'})
        .when('/page14',{templateUrl:'tpl/page14.html',controller:'page14C'})
        .when('/page15',{templateUrl:'tpl/page15.html',controller:'page15C'})
        .when('/page16',{templateUrl:'tpl/page16.html',controller:'page16C'})
        .when('/page17',{templateUrl:'tpl/page17.html',controller:'page17C'})
        .when('/page18',{templateUrl:'tpl/page18.html',controller:'page18C'})
        .when('/page19',{templateUrl:'tpl/page19.html',controller:'page19C'})
        .when('/page20',{templateUrl:'tpl/page20.html',controller:'page20C'})
        .when('/page21',{templateUrl:'tpl/page21.html',controller:'page21C'})
        .when('/page22',{templateUrl:'tpl/page22.html',controller:'page22C'})
        .when('/page23',{templateUrl:'tpl/page23.html',controller:'page23C'})
        .when('/page24',{templateUrl:'tpl/page24.html',controller:'page24C'})
        .when('/page25',{templateUrl:'tpl/page25.html',controller:'page25C'})
        .when('/page26',{templateUrl:'tpl/page26.html',controller:'page26C'})
        .otherwise({redirectTo:'/page2'});
});
app.run(function($rootScope,$location,$http,$timeout){
    $rootScope.isActive=function(a){
        if(a){
            return 'on';
        }
    };
    $rootScope.getAllFalse=function(){
        //$rootScope.activeOne=false;
        $rootScope.activeTwo=false;
        $rootScope.activeThree=false;
        $rootScope.activeFour=false;
        $rootScope.activeFive=false;
        $rootScope.activeSix=false;
        $rootScope.activeSeven=false;
        $rootScope.activeEight=false;
        $rootScope.activeNine=false;
        $rootScope.activeTen=false;
        $rootScope.activeEleven=false;
        $rootScope.activeTwelve=false;
        $rootScope.activeThirdteen=false;
        $rootScope.activeFourteen=false;
        $rootScope.activeFifteen=false;
        $rootScope.activeSixteen=false;
        $rootScope.activeSeventeen=false;
        $rootScope.activeEightteen=false;
        $rootScope.activeNineteen=false;
        $rootScope.activeTwenty=false;
        $rootScope.activeTwentyone=false;
        $rootScope.activeTwentytwo=false;
        $rootScope.activeTwentythree=false;
        $rootScope.activeTwentyfour=false;
        $rootScope.activeTwentyfive=false;
        $rootScope.activeTwentySix=false;

        //大板块
        $rootScope.navPartOne=false;
        //$rootScope.navPartTwo=false;
        $rootScope.navPartThree=false;
        $rootScope.navPartFour=false;
        //$rootScope.navPartFive=false;
        $rootScope.navPartSix=false;
    };
    $rootScope.link='http://10.0.0.40:8080/wgcs';
    //任务栏的伸缩
    $rootScope.getStatus=function(n){
        var a;
        if(n==0){
            a='等待执行';
        }else if(n==1){
            a='正在执行';
        }else if(n==2){
            a='执行完成';
        }else if(n==-1){
            a='执行失败';
        }else if(n==3){
            a='任务异常';
        }
        return a;
    };
    $rootScope.changeColor=function(n){
        var a;
        if(n==-1){
            a='page-red';
        }else if(n==2){
            a='page-green';
        }else if(n==0){
            a='';
        }else if(n==1){
            a='page-yellow';
        }else if(n==3){
            a='page-gray';
        }
        return a;
    };
    $rootScope.getLineHigh=function($event){
        $($event.target).css('overflow-y','auto');
    };
    $rootScope.getLineDown=function($event){
        $($event.target).css('overflow','hidden');
    };
    $rootScope.changeSize=function(){
        if(!$rootScope.isScreenPage){
            $http.get($rootScope.link+'/task/getGroupTaskInit?status=-1').success(function(data){
                if(data.code==200){
                    $rootScope.taskList=data.data;
                    $rootScope.viewSize='view-small';
                    $rootScope.taskSize='task-big';
                    $rootScope.taskButtonHide=true;
                    $rootScope.taskHideButton=true;
                    $rootScope.taskAll=true;
                    $rootScope.taskDoing=false;
                    $rootScope.taskWait=false;
                    $rootScope.taskDown=false;
                }
            });
        }
    };
    $rootScope.getHide=function(){
        $rootScope.viewSize='view-big';
        $rootScope.taskSize='task-small';
        $timeout(function(){
            $rootScope.taskButtonHide=false;
            $rootScope.taskHideButton=false;
            $rootScope.newBell=false;
        },800);
    };
    //新消息提示
    $rootScope.newBell=false;
    //列表的单双变色
    $rootScope.isEven=function(n){
        var a;
        if(n%2==0){
            a='deep-color-li';
        }
        return a;
    };
    //任务栏的选择
    $rootScope.getTaskAll=function(){
        $http.get($rootScope.link+'/task/getGroupTaskInit?status=-1').success(function(data){
            if(data.code==200){
                $rootScope.taskList=data.data;
                $rootScope.taskAll=true;
                $rootScope.taskDoing=false;
                $rootScope.taskWait=false;
                $rootScope.taskDown=false;
            }
        });
    };
    $rootScope.getTaskDoing=function(){
        $http.get($rootScope.link+'/task/getGroupTaskInit?status=1').success(function(data){
            if(data.code==200){
                $rootScope.taskList=data.data;
                $rootScope.taskAll=false;
                $rootScope.taskDoing=true;
                $rootScope.taskWait=false;
                $rootScope.taskDown=false;
            }
        });
    };
    $rootScope.getTaskWait=function(){
        $http.get($rootScope.link+'/task/getGroupTaskInit?status=0').success(function(data){
            if(data.code==200){
                $rootScope.taskList=data.data;
                $rootScope.taskAll=false;
                $rootScope.taskDoing=false;
                $rootScope.taskWait=true;
                $rootScope.taskDown=false;
            }
        });
    };
    $rootScope.getTaskDown=function(){
        $http.get($rootScope.link+'/task/getGroupTaskInit?status=2').success(function(data){
            if(data.code==200){
                $rootScope.taskList=data.data;
                $rootScope.taskAll=false;
                $rootScope.taskDoing=false;
                $rootScope.taskWait=false;
                $rootScope.taskDown=true;
            }
        });
    };
    //获取组数据
    $http.get($rootScope.link+'/group/getGroupData').success(function(data){
        $rootScope.groupNames=data.data;
        $rootScope.groupNumbers=data.data.length;
        $rootScope.pageZhe=true;
        //将所有分组名保存 以及设备的总数 以及分组的id
        $rootScope.AssGroupNames=[];
        $rootScope.allEquipIds=[];
        $rootScope.equipCounts=0;
        for(var j=0;j<data.data.length;j++){
            $rootScope.AssGroupNames.push(data.data[j].group.name);
            $rootScope.allEquipIds.push(data.data[j].group.id);
            $rootScope.equipCounts+=data.data[j].count;
        }
        //将所有分组下的人数保存
        for(var i=0;i<data.data.length;i++){
            if(data.data[i].count!=0){
                $rootScope.pageZhe=false;
                break;
            }
        }
        //保留所有的设备总数
    });
    //$interval(function(){
    //    $http.get($rootScope.link+'/group/getGroupData').success(function(data){
    //        $rootScope.groupNames=data.data;
    //        $rootScope.groupNumbers=data.data.length;
    //        $rootScope.pageZhe=true;
    //        //将所有分组名保存 以及设备的总数 以及分组的id
    //        $rootScope.AssGroupNames=[];
    //        $rootScope.allEquipIds=[];
    //        $rootScope.equipCounts=0;
    //        for(var j=0;j<data.data.length;j++){
    //            $rootScope.AssGroupNames.push(data.data[j].group.name);
    //            $rootScope.allEquipIds.push(data.data[j].group.id);
    //            $rootScope.equipCounts+=data.data[j].count;
    //        }
    //        //将所有分组下的人数保存
    //        for(var i=0;i<data.data.length;i++){
    //            if(data.data[i].count!=0){
    //                $rootScope.pageZhe=false;
    //                break;
    //            }
    //        }
    //        //保留所有的设备总数
    //    });
    //    $http.get($rootScope.link+'/group/getGroupDataByStatus').success(function(data){
    //        if(data.code==200){
    //            $rootScope.onlineGroupNames=data.data;
    //            //保存默认加载的设备号
    //            $rootScope.moArray=[];
    //            for(var a=0;a<data.data[0].deviceVos.length;a++){
    //                $rootScope.moArray.push(data.data[0].deviceVos[a].device);
    //            }
    //
    //        }
    //    });
    //},60000);
    $rootScope.idNow=0;
    $rootScope.getMoreEquip=function(id){
        var assId=[id];
        if($rootScope.idNow!=id){
            $rootScope.idNow=id;
            $http.get($rootScope.link+'/device/getDeviceByGroup?groupIds='+JSON.stringify(assId)).success(function(data){
                $rootScope.deviceEquip=data.data;
            })
        }
    };
    //page4移动分组的id
    $rootScope.moveToId='';
    //获取在线组设备的数据
    $http.get($rootScope.link+'/group/getGroupDataByStatus').success(function(data){
        if(data.code==200){
            $rootScope.onlineGroupNames=data.data;
            //保存默认加载的设备号
            $rootScope.moArray=[];
            for(var a=0;a<data.data[0].deviceVos.length;a++){
                $rootScope.moArray.push(data.data[0].deviceVos[a].device);
            }
        }
    });

    $rootScope.Status=function(s){
        return s==1?'在线':'离线';
    };
    //同屏显示的关闭socket数组
    $rootScope.socketArr=[];
    $rootScope.$watch('socketArr',function(newVal,oldVal){
        if(oldVal.length>0){
            for(var i=0;i<oldVal.length;i++){
                oldVal[i].close();
            }
        }
    });
});
app.controller('mainC',function($rootScope,$scope,$timeout,$location,$anchorScroll){

    //导航栏的视图切换
    //锚点的跳转 回到顶部标题处
    $scope.getTop=function(num,arg){
        $location.hash('page-top'+num);
        $anchorScroll();
        switch (arg){
            case 'page1': $location.path('/page1'); break;
            case 'page2': $location.path('/page2'); break;
            case 'page3': $location.path('/page3'); break;
            case 'page4': $location.path('/page4'); break;
            //case 'page5': $location.path('/page5'); break;
            case 'page6': $location.path('/page6'); break;
            case 'page7': $location.path('/page7'); break;
            case 'page8': $location.path('/page8'); break;
            case 'page9': $location.path('/page9'); break;
            case 'page10': $location.path('/page10'); break;
            case 'page11': $location.path('/page11'); break;
            case 'page12': $location.path('/page12'); break;
            case 'page13': $location.path('/page13'); break;
            case 'page14': $location.path('/page14'); break;
            case 'page15': $location.path('/page15'); break;
            case 'page16': $location.path('/page16'); break;
            case 'page17': $location.path('/page17'); break;
            case 'page18':
                $location.path('/page18');
                $rootScope.viewSize='view-big';
                $rootScope.taskSize='task-small';
                $timeout(function(){
                    $rootScope.taskButtonHide=false;
                    $rootScope.taskHideButton=false;
                    $rootScope.newBell=false;
                },800);
                break;
            case 'page19': $location.path('/page19'); break;
            case 'page20': $location.path('/page20'); break;
            case 'page21': $location.path('/page21'); break;
            case 'page22': $location.path('/page22'); break;
            case 'page23': $location.path('/page23'); break;
            case 'page24': $location.path('/page24'); break;
            case 'page25': $location.path('/page25'); break;
            case 'page26': $location.path('/page26'); break;
        }
    };


});
app.directive('navClick',function(){
    return {
        link:function(scope,elem){
            elem.click(function(){
                elem.parent().parent().find('.nav-floor-ul').hide();
                elem.parent().parent().find('.line').hide();
                elem.parent().find('.nav-floor-ul').show();
                elem.parent().find('.line').show();
            });
        }
    }
});
app.controller('page2C',function($rootScope,$scope,$http,$timeout){
    $rootScope.getAllFalse();
    $rootScope.activeTwo=true;
    $rootScope.navPartOne=true;
    $rootScope.isScreenPage=false;
    //
    $scope.outSideBox=true;
    $scope.inSideBox=false;
    $scope.assPage=0;
    $http.get($rootScope.link+'/device/getAllDevice?pageNo=1&pageSize=15').success(function(data){
        if(data.code==200){
            if(data.data.content.length==0){
                $scope.sweepBox=true;
            }else{
                $rootScope.DataList=data.data.content;
                $timeout(function(){
                    for(var i=0;i<data.data.content.length;i++){
                        if(data.data.content[i].rank==0){
                            alert('请修改设备编号！');
                            break;
                        }
                    }
                },500);

            }
            $('#pages2').Page({
                totalPages: data.data.totalPages,//分页总数
                liNums: 5,//分页的数字按钮数(建议取奇数)
                activeClass: 'activP', //active 类样式定义
                callBack : function(page){
                    $http.get($rootScope.link+'/device/getAllDevice?pageNo='+page+'&pageSize=15').success(function(data){
                        $rootScope.DataList=data.data.content;
                        $timeout(function(){
                            for(var i=0;i<data.data.content.length;i++){
                                if(data.data.content[i].rank==0){
                                    alert('请修改设备编号！');
                                    break;
                                }
                            }
                        },500);
                        $scope.assPage=page-1;
                    })
                }
            });
        }
    });
    $scope.sweepBoxOne=true;
    $scope.sweepBoxTwo=false;
    $scope.sweepBoxThree=false;
    $scope.sweepAssBlock='sweep-box-one-block-small';
    $scope.getLoad=function(n){
        var a;
        n==1?a='已安装':a='未安装';
        return a;
    };
    $scope.Status=function(n){
       return  n==0?'离线':'在线';
    };
    $scope.statusHigh=function(s){
        return s==1?'page2-red':'';
    };
    $scope.getSweepTwo=function(){
        $scope.sweepBoxOne=false;
        $scope.sweepBoxTwo=true;
        $http.get($rootScope.link+'/device/initDevice').success(function(data){
            console.log(data);
            if(data.code==200){
                $scope.sweepAssBlock='sweep-box-one-block-big';
                $scope.sweepTime=data.data.time;
                $scope.sweepEquipNumber=0;
                $scope.sweepOffLineNumber=0;
                $scope.sweepShowTime='';
                for(var x=0;x<data.data.devices.length;x++){
                    if(data.data.devices[x].status==1){
                        $scope.sweepEquipNumber++;
                    }else{
                        $scope.sweepOffLineNumber++;
                    }
                }
                $http.get($rootScope.link+'/device/getAllDevice?pageNo=1&pageSize=15').success(function(data){
                    //for(var i=0;i<data.data.content.length;i++){
                    //    if(data.data.content[i].status==1){
                    //        $scope.sweepEquipNumber++;
                    //    }else{
                    //        $scope.sweepOffLineNumber++;
                    //    }
                    //}
                    $scope.response=data;

                });
                $http.get($rootScope.link+'/group/getGroupDataByStatus').success(function(data){
                    if(data.code==200){
                        $rootScope.onlineGroupNames=data.data;
                        //保存默认加载的设备号
                        $rootScope.moArray=[];
                        for(var a=0;a<data.data[0].deviceVos.length;a++){
                            $rootScope.moArray.push(data.data[0].deviceVos[a].device);
                        }

                    }
                });
                if($scope.sweepTime<5){
                    $scope.sweepShowTime=5;
                    $timeout(function(){
                        $scope.sweepBoxTwo=false;
                        $scope.sweepBoxThree=true;
                    },5200);
                }else{
                    $scope.sweepShowTime=data.data.time;
                    $timeout(function(){
                        $scope.sweepBoxTwo=false;
                        $scope.sweepBoxThree=true;
                    },$scope.sweepTime);
                }

            }else{
                alert('初始化有误！请刷新页面或者重试！');
            }
        });

    };
    $scope.couldChange=function(rank){
        if(rank!=0){
            return 'on';
        }
    };
    $scope.couldRead=function(rank){
        if(rank!=0){
            return true;
        }
    };
    $scope.couldSave=function(rank){
        if(rank!=0){
            return 'cs';
        }
    };
    $scope.couldEdit=function(rank){
        if(rank==0){
            return 'ce';
        }
    };
    $scope.getDataList=function(data){
        $rootScope.DataList=data.data.content;
        $timeout(function(){
            for(var i=0;i<data.data.content.length;i++){
                if(data.data.content[i].rank==0){
                    alert('请修改设备编号！');
                    break;
                }
            }
        },500);
        $scope.sweepBox=false;
        $('#pages2').Page({
            totalPages: data.data.totalPages,//分页总数
            liNums: 5,//分页的数字按钮数(建议取奇数)
            activeClass: 'activP', //active 类样式定义
            callBack : function(page){
                $http.get($rootScope.link+'/device/getAllDevice?pageNo='+page+'&pageSize=15').success(function(data){
                    $rootScope.DataList=data.data.content;
                    $timeout(function(){
                        for(var i=0;i<data.data.content.length;i++){
                            if(data.data.content[i].rank==0){
                                alert('请修改设备编号！');
                                break;
                            }
                        }
                    },500);
                })
            }
        });
    };
    //点击扫描新设备
    $scope.getSweepBox=function(){
        $scope.sweepBox=true;
        $scope.sweepBoxOne=true;
        $scope.sweepBoxTwo=false;
        $scope.sweepBoxThree=false;
        $scope.sweepAssBlock='sweep-box-one-block-small';
        //$http.get($rootScope.link+'/device/initDevice').success(function(data){
        //    if(data.code==200){
        //
        //    }
        //});
    };

    //$scope.sureSweepBoxTwo=function(){
    //    $scope.sweepBox=true;
    //    $http.get($rootScope.link+'/device/getAllDevice').success(function(data){
    //        $scope.DataList=data;
    //    });
    //};

    //点击一键初始化
    //$scope.initAllApp=function(){
    //    if($scope.checked.length==0){
    //        alert('请勾选需要操作的设备！');
    //    }else{
    //        var sendObj=new FormData();
    //        sendObj.append('devices',JSON.stringify($scope.checked));
    //        $http({
    //            method:'POST',
    //            url:$rootScope.link+"/device/installDeviceApps",
    //            data: sendObj,
    //            headers: {'Content-Type':undefined},
    //            transformRequest: angular.identity
    //        }).success( function ( data ) {
    //            if(data.code==200){
    //                alert('初始化成功!');
    //                $http.get($rootScope.link+'/task/getGroupTaskInit?status=-1').success(function(data){
    //                    if(data.code==200){
    //                        $rootScope.taskList=data.data;
    //                        $rootScope.taskAll=true;
    //                        $rootScope.taskDoing=false;
    //                        $rootScope.taskWait=false;
    //                        $rootScope.taskDown=false;
    //                        $rootScope.newBell=true;
    //                    }
    //                });
    //            }else{
    //                alert('初始化任务失败！ 请重试！');
    //            }
    //        });
    //    }
    //};

    //导出
    $scope.wayOut=function(){
        $(".way-out-table").table2excel({
            exclude: ".noExl",
            name: "Excel Document Name",
            filename: "设备帐号列表",
            exclude_img: true,
            exclude_links: true,
            exclude_inputs: true
        });
    };
    ////刷新
    //$scope.getNewList=function(){
    //    $http.get($rootScope.link+'/wechat/getWeChatInfo').success(function(data){
    //        if(data.code==200){
    //            alert('添加任务成功!');
    //            $http.get($rootScope.link+'/task/getGroupTaskInit?status=-1').success(function(data){
    //                if(data.code==200){
    //                    $rootScope.taskList=data.data;
    //                    $rootScope.taskAll=true;
    //                    $rootScope.taskDoing=false;
    //                    $rootScope.taskWait=false;
    //                    $rootScope.taskDown=false;
    //                    $rootScope.newBell=true;
    //                }
    //            });
    //        }else{
    //            alert('刷新失败！请重试！');
    //        }
    //    });
    //};

    //删除
    $scope.deleteEquip=function(device){
        $http.get($rootScope.link+'/device/delDevice?device='+device).success(function(data){
            if(data.code==200){
                alert('删除成功！');
                location.reload();
                $http.get($rootScope.link+'/device/getAllDevice?pageNo=1&pageSize=15').success(function(data){
                    if(data.code==200){
                        if(data.data.content.length==0){
                            $scope.sweepBox=true;
                        }else{
                            $rootScope.DataList=data.data.content;
                            $timeout(function(){
                                for(var i=0;i<data.data.content.length;i++){
                                    if(data.data.content[i].rank==0){
                                        alert('请修改设备编号！');
                                        break;
                                    }
                                }
                            },500)
                        }
                        $('#pages2').Page({
                            totalPages: data.data.totalPages,//分页总数
                            liNums: 5,//分页的数字按钮数(建议取奇数)
                            activeClass: 'activP', //active 类样式定义
                            callBack : function(page){
                                $http.get($rootScope.link+'/device/getAllDevice?pageNo='+page+'&pageSize=15').success(function(data){
                                    $rootScope.DataList=data.data.content;
                                    $timeout(function(){
                                        for(var i=0;i<data.data.content.length;i++){
                                            if(data.data.content[i].rank==0){
                                                alert('请修改设备编号！');
                                                break;
                                            }
                                        }
                                    },500)
                                })
                            }
                        });
                    }
                });
            }else{
                alert('删除失败！请重试！');
            }
        });
    };
    //查找我的设备
    $scope.showMyEquip=function(device){
        $http.get($rootScope.link+'/device/showDifferent?device='+device).success(function(data){
            if(data.code==200){
                alert('添加任务成功！');
                $http.get($rootScope.link+'/task/getGroupTaskInit?status=-1').success(function(data){
                    if(data.code==200){
                        $rootScope.taskList=data.data;
                        $rootScope.taskAll=true;
                        $rootScope.taskDoing=false;
                        $rootScope.taskWait=false;
                        $rootScope.taskDown=false;
                        $rootScope.newBell=true;
                    }
                });
            }else{
                alert('添加任务失败！ 请重新再试！');
            }
        });
    };
    $scope.isShow=function(s){
        if(s==1){
            return true;
        }
    };
    $scope.rankAss=function(rank){
        return rank==1000?'-':rank;
    };
    $scope.getPage=function(index){
        return $scope.assPage*15+index;
    }
});
app.directive('tableSave',function($rootScope,$http,$timeout){
    return {
        link:function(scope,elem){
            elem.click(function(){
                var anumber=elem.parent().parent().find('input');
                if(anumber.val()==''){
                    alert('请填写需要保存的设备编号！');
                }else{
                    $http.get($rootScope.link+'/device/editRank?device='+elem.attr('mess_device')+'&rank='+elem.parent().parent().find('input').val()).success(function(data){
                        if(data.code==200){
                            alert('保存成功！');
                            $http.get($rootScope.link+'/group/getGroupData').success(function(data){
                                $rootScope.groupNames=data.data;
                                $rootScope.groupNumbers=data.data.length;
                                $rootScope.pageZhe=true;
                                //将所有分组名保存 以及设备的总数 以及分组的id
                                $rootScope.AssGroupNames=[];
                                $rootScope.allEquipIds=[];
                                $rootScope.equipCounts=0;
                                for(var j=0;j<data.data.length;j++){
                                    $rootScope.AssGroupNames.push(data.data[j].group.name);
                                    $rootScope.allEquipIds.push(data.data[j].group.id);
                                    $rootScope.equipCounts+=data.data[j].count;
                                }
                                //将所有分组下的人数保存
                                for(var i=0;i<data.data.length;i++){
                                    if(data.data[i].count!=0){
                                        $rootScope.pageZhe=false;
                                        break;
                                    }
                                }
                                //保留所有的设备总数
                            });
                            $http.get($rootScope.link+'/group/getGroupDataByStatus').success(function(data){
                                if(data.code==200){
                                    $rootScope.onlineGroupNames=data.data;
                                    //保存默认加载的设备号
                                    $rootScope.moArray=[];
                                    for(var a=0;a<data.data[0].deviceVos.length;a++){
                                        $rootScope.moArray.push(data.data[0].deviceVos[a].device);
                                    }

                                }
                            });
                            $http.get($rootScope.link+'/device/getAllDevice?pageNo=1&pageSize=15').success(function(data){
                                if(data.code==200){
                                    if(data.data.content.length==0){
                                        scope.sweepBox=true;
                                    }else{
                                        $rootScope.DataList=data.data.content;
                                        $timeout(function(){
                                            for(var i=0;i<data.data.content.length;i++){
                                                if(data.data.content[i].rank==0){
                                                    alert('请修改设备编号！');
                                                    break;
                                                }
                                            }
                                        },500);

                                    }
                                    $('#pages2').Page({
                                        totalPages: data.data.totalPages,//分页总数
                                        liNums: 5,//分页的数字按钮数(建议取奇数)
                                        activeClass: 'activP', //active 类样式定义
                                        callBack : function(page){
                                            $http.get($rootScope.link+'/device/getAllDevice?pageNo='+page+'&pageSize=15').success(function(data){
                                                $rootScope.DataList=data.data.content;
                                                $timeout(function(){
                                                    for(var i=0;i<data.data.content.length;i++){
                                                        if(data.data.content[i].rank==0){
                                                            alert('请修改设备编号！');
                                                            break;
                                                        }
                                                    }
                                                },500);
                                            })
                                        }
                                    });
                                }
                            });
                            elem.parent().parent().find('input').addClass('on').attr('readonly','readonly');
                            elem.hide();
                            elem.next().show();
                        }else{
                            alert(data.msg);
                        }
                    });
                }
            });
        }
    }
});
app.directive('tableEdit',function(){
    return {
        link:function(scope,elem){
            elem.click(function(){
                elem.parent().parent().find('input').removeClass('on').removeAttr('readonly');
                elem.hide();
                elem.prev().show();
            });
        }
    }
});
app.controller('page3C',function($rootScope,$scope,$http){
    $rootScope.getAllFalse();
    $rootScope.activeThree=true;
    $rootScope.navPartOne=true;
    $rootScope.isScreenPage=false;
    //默认加载
    $scope.getLoad=function(n){
        var a;
        n==1?a='已安装':a='未安装';
        return a;
    };
    $scope.Status=function(n){
        return  n==0?'离线':'在线';
    };
    $scope.getDisabled=function(n){
        return n==0?true:false;
    };
    // ng-change 事件
    $scope.checked=[];
    $scope.selectAll=function(){
        if($scope.checkAll){
            $scope.checked=[];
            angular.forEach($scope.DataList,function(i){
                if(i.status==1){
                    i.checked=true;
                    $scope.checked.push(i.device);
                }
            })
        }else{
            angular.forEach($scope.DataList,function(i){
                if(i.status==1){
                    i.checked=false;
                    $scope.checked=[];
                }
            })
        }
    };
    $scope.selectOne=function(){
        $scope.isAll=[];
        angular.forEach($scope.DataList,function(i){
            var index=$scope.checked.indexOf(i.device);
            if(i.checked && index===-1){
                $scope.checked.push(i.device);
            }else if(!i.checked && index!=-1){
                $scope.checked.splice(index,1);
            }
            if(i.status==1){
                $scope.isAll.push(i.device);
            }
        });
        if($scope.isAll.length===$scope.checked.length){
            $scope.checkAll=true;
        }else{
            $scope.checkAll=false;
        }
    };

    $http.get($rootScope.link+'/device/getAllDeviceByStatus?pageNo=1&pageSize=15').success(function(data){
        if(data.code==200){
            $scope.DataList=data.data.content;
            $('#pages3').Page({
                totalPages: data.data.totalPages,//分页总数
                liNums: 5,//分页的数字按钮数(建议取奇数)
                activeClass: 'activP', //active 类样式定义
                callBack : function(page){
                    $http.get($rootScope.link+'/device/getAllDeviceByStatus?pageNo='+page+'&pageSize=15').success(function(data){
                        $scope.DataList=data.data.content;
                    })
                }
            });
        }

    });

    $scope.openAll=function(n){
        if($scope.checked.length==0){
            alert('请勾选需要操作的设备!');
        }else{
            var sendObj=new FormData();
            sendObj.append('devices',JSON.stringify($scope.checked));
            sendObj.append('taskId',n);
            $http({
                method:'POST',
                url:$rootScope.link+"/device/open",
                data: sendObj,
                headers: {'Content-Type':undefined},
                transformRequest: angular.identity
            }).success( function ( data ) {
                if(data.code==200){
                    alert('添加任务栏成功！');
                    $http.get($rootScope.link+'/task/getGroupTaskInit?status=-1').success(function(data){
                        if(data.code==200){
                            $rootScope.taskList=data.data;
                            $rootScope.taskAll=true;
                            $rootScope.taskDoing=false;
                            $rootScope.taskWait=false;
                            $rootScope.taskDown=false;
                            $rootScope.newBell=true;
                        }
                    });
                }
            });
        }
    };
    $scope.closeAll=function(n){
        if($scope.checked.length==0){
            alert('请勾选需要操作的设备!');
        }else{
            var sendObj=new FormData();
            sendObj.append('devices',JSON.stringify($scope.checked));
            sendObj.append('taskId',n);
            $http({
                method:'POST',
                url:$rootScope.link+"/device/close",
                data: sendObj,
                headers: {'Content-Type':undefined},
                transformRequest: angular.identity
            }).success( function ( data ) {
                if(data.code==200){
                    alert('添加任务栏成功！');
                    $http.get($rootScope.link+'/task/getGroupTaskInit?status=-1').success(function(data){
                        if(data.code==200){
                            $rootScope.taskList=data.data;
                            $rootScope.taskAll=true;
                            $rootScope.taskDoing=false;
                            $rootScope.taskWait=false;
                            $rootScope.taskDown=false;
                            $rootScope.newBell=true;
                        }
                    });
                }
            });
        }
    };

    $scope.backHome=function(){
        if($scope.checked.length==0){
            alert('请勾选需要操作的设备！');
        }else{
            $http.get($rootScope.link+'/device/backHome?devices='+JSON.stringify($scope.checked)).success(function(data){
                if(data.code==200){
                    alert('添加任务成功！');
                    $http.get($rootScope.link+'/task/getGroupTaskInit?status=-1').success(function(data){
                        if(data.code==200){
                            $rootScope.taskList=data.data;
                            $rootScope.taskAll=true;
                            $rootScope.taskDoing=false;
                            $rootScope.taskWait=false;
                            $rootScope.taskDown=false;
                            $rootScope.newBell=true;
                        }
                    });
                }
            });
        }
    };
});
app.directive('assAllThree',function(){
    return {
        link:function(scope,elem){
            elem.click(function(){
                if(scope.checkAll){
                    var a=elem.parents('.page3-fucking-list').find('input');
                    for(var i=0;i< a.length;i++){
                        if(!a.eq(i).attr('disabled')){
                            a.eq(i).parent().addClass('on');
                        }
                    }
                }else{
                    var b=elem.parents('.page3-fucking-list').find('input');
                    for(var j=0;j< b.length;j++){
                        if(!b.eq(j).attr('disabled')){
                            b.eq(j).parent().removeClass('on');
                        }
                    }
                }
            });
        }
    }
});
app.directive('assOneThree',function(){
    return {
        link:function(scope,elem){
            elem.click(function(){
                if(elem.prop('checked')){
                    elem.parent().addClass('on');
                }else{
                    elem.parent().removeClass('on');
                }
                if(scope.checked.length===scope.isAll.length){
                    elem.parents('.page3-fucking-list').find('.page3-div-checkbox').eq(0).addClass('on');
                }else{
                    elem.parents('.page3-fucking-list').find('.page3-div-checkbox').eq(0).removeClass('on');
                }
            });
        }
    }
});
app.controller('page4C',function($rootScope,$scope,$http,$timeout){
    $rootScope.getAllFalse();
    $rootScope.activeFour=true;
    $rootScope.navPartThree=true;
    $rootScope.isScreenPage=false;
    //页面显示
    $scope.outSideBox=true;
    $scope.insideBox=false;
    $scope.assBack=false;
    $scope.resetSelect=true;
    $scope.getInside=function(d){
        $scope.outSideBox=false;
        $scope.insideBox=true;
        $scope.assMoveTo=false;
        $scope.assBack=true;
        $scope.resetSelect=false;
        $scope.assDevice=d;
        $http.get($rootScope.link+'/wechat/getWechatByDevice?device='+d).success(function(data){
            $scope.assList=data.data;
        });
    };
    $scope.getAssBack=function(){
        $scope.outSideBox=true;
        $scope.insideBox=false;
        $scope.resetSelect=true;
        $scope.assBack=false;
        $scope.assMoveTo=true;
        var newArr=[];
        for(var i= 0;i<$('.new-wx-equip-input4').length;i++){
            if($('.new-wx-equip-input4').eq(i).prop('checked')){
                newArr.push($('.new-wx-equip-input4').eq(i).parent().next().attr('title'));
            }
        }
        $http.get($rootScope.link+'/device/getDeviceByDevice?devices='+JSON.stringify(newArr)+'&pageNo=1&pageSize=17').success(function(data){
            if(data.code==200){
                $scope.checkAllFour=false;
                $('.page4-floor-one-list').find('span').eq(0).removeClass('on');
                $rootScope.equipList4=data.data.content;
                $('#pages4').Page({
                    totalPages: data.data.totalPages,//分页总数
                    liNums: 5,//分页的数字按钮数(建议取奇数)
                    activeClass: 'activP', //active 类样式定义
                    callBack : function(page){
                        $http.get($rootScope.link+'/device/getDeviceByGroup?groupIds='+JSON.stringify(newArr)+'&pageNo='+page+'&pageSize=17').success(function(data){
                            $rootScope.equipList4=data.data.content;
                        })
                    }
                });
            }
        });
    };
    $timeout(function(){
        $http.get($rootScope.link+'/device/getDeviceByDevice?devices='+JSON.stringify($rootScope.moArray)+'&pageNo=1&pageSize=17').success(function(data){
            if(data.code==200){
                $rootScope.equipList4=data.data.content;
                $('#pages4').Page({
                    totalPages: data.data.totalPages,//分页总数
                    liNums: 5,//分页的数字按钮数(建议取奇数)
                    activeClass: 'activP', //active 类样式定义
                    callBack : function(page){
                        $http.get($rootScope.link+'/device/getDeviceByGroup?groupIds='+JSON.stringify($rootScope.moArray)+'&pageNo='+page+'&pageSize=17').success(function(data){
                            $rootScope.equipList4=data.data.content;
                        })
                    }
                });
            }
        });
        alert('请用户手动配置增加微信账号！');
    },0);
    //上移
    $scope.isRankOne=function(n){
        return n==1?'on':'';
    };
    $scope.rankDisabled=function(n){
        return n==1?true:false;
    };
    $scope.moveUp=function(n){
        $http.get($rootScope.link+'/wechat/up?rank='+n+'&device='+$scope.assDevice).success(function(data){
            if(data.code==200){
                alert('移动成功!');
                $http.get($rootScope.link+'/wechat/getWechatByDevice?device='+$scope.assDevice).success(function(data){
                    $scope.assList=data.data;
                });
            }else{
                alert('移动失败！请重试！');
            }
        });
    };
    //下移
    $scope.isRankLast=function(n){
        return n==20?'on':'';
    };
    $scope.rankDisabledLast=function(n){
        return n==20?true:false;
    };
    $scope.moveDown=function(n){
        $http.get($rootScope.link+'/wechat/down?rank='+n+'&device='+$scope.assDevice).success(function(data){
            if(data.code==200){
                alert('移动成功!');
                $http.get($rootScope.link+'/wechat/getWechatByDevice?device='+$scope.assDevice).success(function(data){
                    $scope.assList=data.data;
                });
            }else{
                alert('移动失败！请重试！');
            }
        });
    };
    //切换
    $scope.assMoveTo=true;
    $scope.checked=[];
    $scope.selectAll=function(){
        if($scope.checkAllFour){
            $scope.checked=[];
            angular.forEach($rootScope.equipList4,function(i){
                i.checked=true;
                $scope.checked.push(i.device);
            })
        }else{
            angular.forEach($rootScope.equipList4,function(i){
                i.checked=false;
                $scope.checked=[];
            })
        }
    };
    $scope.selectOne=function(){
        angular.forEach($rootScope.equipList4,function(i){
            var index=$scope.checked.indexOf(i.device);
            if(i.checked && index===-1){
                $scope.checked.push(i.device);
            }else if(!i.checked && index!=-1){
                $scope.checked.splice(index,1);
            }
        });
        if($rootScope.equipList4.length===$scope.checked.length){
            $scope.checkAll=true;
        }else{
            $scope.checkAll=false;
        }
    };
    $scope.resetNumber='1';
    $scope.resetButton=function(){
        for(var i= 0,arr=[];i<$('.new-wx-equip-input4').length;i++){
            if($('.new-wx-equip-input4').eq(i).prop('checked')){
                arr.push($('.new-wx-equip-input4').eq(i).parent().next().attr('title'));
            }
        }
        if(arr.length==0){
            alert('请勾选需要切换的设备！');
        }else{
            $http.get($rootScope.link+'/group/switchWechat?devices='+JSON.stringify(arr)+'&rank='+parseInt($scope.resetNumber)).success(function(data){
                if(data.code==200){
                    alert('添加任务成功！');
                    var newArr=[];
                    for(var i= 0;i<$('.new-wx-equip-input4').length;i++){
                        if($('.new-wx-equip-input4').eq(i).prop('checked')){
                            newArr.push($('.new-wx-equip-input4').eq(i).parent().next().attr('title'));
                        }
                    }
                    $http.get($rootScope.link+'/device/getDeviceByDevice?devices='+JSON.stringify(newArr)+'&pageNo=1&pageSize=17').success(function(data){
                        if(data.code==200){
                            $rootScope.equipList4=data.data.content;
                            $('#pages4').Page({
                                totalPages: data.data.totalPages,//分页总数
                                liNums: 5,//分页的数字按钮数(建议取奇数)
                                activeClass: 'activP', //active 类样式定义
                                callBack : function(page){
                                    $http.get($rootScope.link+'/device/getDeviceByGroup?groupIds='+JSON.stringify(newArr)+'&pageNo='+page+'&pageSize=17').success(function(data){
                                        $rootScope.equipList4=data.data.content;
                                    })
                                }
                            });
                        }
                    });
                    $http.get($rootScope.link+'/task/getGroupTaskInit?status=-1').success(function(data){
                        if(data.code==200){
                            $rootScope.taskList=data.data;
                            $rootScope.taskAll=true;
                            $rootScope.taskDoing=false;
                            $rootScope.taskWait=false;
                            $rootScope.taskDown=false;
                            $rootScope.newBell=true;
                        }
                    });
                }else{
                    alert('添加任务失败！ 请重试！');
                }
            });
        }

    };
});
app.directive('groupCheckAllFour',function($rootScope,$http){
    return {
        link : function(scope,elem){
            elem.click(function(){
                if(elem.prop('checked')){
                    elem.parent().addClass('on');
                    elem.parent().parent().next().find('p').addClass('on').find('input').prop('checked',function(){return true});
                }else{
                    elem.parent().removeClass('on');
                    elem.parent().parent().next().find('p').removeClass('on').find('input').prop('checked',function(){return false});
                }
                scope.fuckArr=[];
                for(var i= 0;i<$('.new-wx-equip-input4').length;i++){
                    if($('.new-wx-equip-input4').eq(i).prop('checked')){
                        scope.fuckArr.push($('.new-wx-equip-input4').eq(i).parent().next().attr('title'));
                    }
                }
                $http.get($rootScope.link+'/device/getDeviceByDevice?devices='+JSON.stringify(scope.fuckArr)+'&pageNo=1&pageSize=17').success(function(data){
                    if(data.code==200){
                        $rootScope.equipList4=data.data.content;
                        $('#pages4').Page({
                            totalPages: data.data.totalPages,//分页总数
                            liNums: 5,//分页的数字按钮数(建议取奇数)
                            activeClass: 'activP', //active 类样式定义
                            callBack : function(page){
                                $http.get($rootScope.link+'/device/getDeviceByGroup?groupIds='+JSON.stringify(scope.fuckArr)+'&pageNo='+page+'&pageSize=17').success(function(data){
                                    $rootScope.equipList4=data.data.content;
                                })
                            }
                        });
                    }
                });
            });
        }
    }
});
app.directive('groupCheckOneFour',function($rootScope,$http){
    return {
        link:function(scope,elem){
            elem.click(function(){
                if(elem.prop('checked')){
                    elem.parent().addClass('on');
                }else{
                    elem.parent().removeClass('on');
                }
                var eNumber=elem.parent().parent().parent().parent().find('input');
                var flag=true;
                for(var i= 0;i<eNumber.length;i++){
                    if(eNumber.eq(i).prop('checked')==false){
                        flag=false;
                    }
                }
                if(flag){
                    elem.parent().parent().parent().parent().prev().find('p').addClass('on').find('input').prop('checked',function(){return true});
                }else{
                    elem.parent().parent().parent().parent().prev().find('p').removeClass('on').find('input').prop('checked',function(){return false});
                }
                scope.fuckArr=[];
                for(var i= 0;i<$('.new-wx-equip-input4').length;i++){
                    if($('.new-wx-equip-input4').eq(i).prop('checked')){
                        scope.fuckArr.push($('.new-wx-equip-input4').eq(i).parent().next().attr('title'));
                    }
                }
                $http.get($rootScope.link+'/device/getDeviceByDevice?devices='+JSON.stringify(scope.fuckArr)+'&pageNo=1&pageSize=17').success(function(data){
                    if(data.code==200){
                        $rootScope.equipList4=data.data.content;
                        $('#pages4').Page({
                            totalPages: data.data.totalPages,//分页总数
                            liNums: 5,//分页的数字按钮数(建议取奇数)
                            activeClass: 'activP', //active 类样式定义
                            callBack : function(page){
                                $http.get($rootScope.link+'/device/getDeviceByGroup?groupIds='+JSON.stringify(scope.fuckArr)+'&pageNo='+page+'&pageSize=17').success(function(data){
                                    $rootScope.equipList4=data.data.content;
                                })
                            }
                        });
                    }
                });
            });
        }
    }
});
app.directive('getSave',function($rootScope,$http){
    return {
        link:function(scope,elem){
            elem.click(function(){
                var assId=elem.attr('mess_id');
                var assNumber=elem.parent().parent().find('.page4-wx-number').val();
                var assPassword=elem.parent().parent().find('.page4-wx-password').val()||'';
                var assNickname=elem.parent().parent().find('.page4-wx-nickname').val()||'';
                var assTag=elem.parent().parent().find('.page4-wx-tag').val()||'';
                var assWnumber=elem.attr('wn')||'';
                if(assNumber==''){
                    alert('请填写需要保存的帐号!');
                }
                else{
                    $http.get($rootScope.link+'/wechat/updateWechat?id='+assId+'&number='+assNumber+'&password='+assPassword+'&nickname='+assNickname+'&tag='+assTag).success(function(data){
                        if(data.code==200){
                            alert('保存成功！');
                            elem.hide();
                            elem.next().show();
                            elem.parent().parent().find('input').addClass('on').attr('readonly','readonly');
                        }else{
                            alert('保存失败！请重试！');
                        }
                    });
                }

            });
        }
    }
});
app.directive('getEdit',function(){
    return {
        link:function(scope,elem){
            elem.click(function(){
                elem.hide();
                elem.prev().show();
                elem.parent().parent().find('input').removeClass('on').removeAttr('readonly');
            });
        }
    }
});
app.directive('gFour',function($timeout){
    return {
        link:function(scope,elem){
            $timeout(function(){
                if(elem.prop('checked')){
                    elem.parent().addClass('on');
                }else{
                    elem.parent().removeClass('on');
                }
            },0);
            elem.click(function(){
                if(elem.prop('checked')){
                    elem.parent().addClass('on');
                }else{
                    elem.parent().removeClass('on');
                }
            });
        }
    }
});
app.directive('getAss',function($http,$rootScope){
    return{
        link:function(scope,elem){
            elem.on('change',function(){
                a=false;
                var fd = new FormData();
                var file = document.querySelector('#ass-input1').files[0];
                fd.append('file', file);
                $http({
                    method:'POST',
                    url:$rootScope.link+"/account/addWeChatNumber",
                    data: fd,
                    headers: {'Content-Type':undefined},
                    transformRequest: angular.identity
                }).success( function ( response ) {
                    //上传成功的操作
                    if(response.code==200){
                        //$rootScope.pageZhe=false;
                        scope.MemberList=response.data;
                        $http.get($rootScope.link+'/group/getGroupData').success(function(data){
                            $rootScope.groupNames=data.data;
                            $rootScope.groupNumbers=data.data.length;
                        });
                    }
                });
            });
        }
    }
});
app.directive('groupAllCheckedFour',function(){
    return {
        link:function(scope,elem){
            elem.click(function(){
                if(elem.prop('checked')){
                    elem.parents('.page4-floor-one-list').find('span').addClass('on');
                }else{
                    elem.parents('.page4-floor-one-list').find('span').removeClass('on');
                }
            });
        }
    }
});
app.directive('checkedAssFour',function($rootScope){
    return {
        link:function(scope,elem){
            elem.click(function(){
                if(elem.prop('checked')){
                    elem.parent().addClass('on');
                }else{
                    elem.parent().removeClass('on');
                }
                if(scope.checked.length===$rootScope.equipList4.length){
                    elem.parents('.page4-floor-one-list').find('span').eq(0).addClass('on');
                }else{
                    elem.parents('.page4-floor-one-list').find('span').eq(0).removeClass('on');
                }
            });
        }
    }
});
app.controller('page5C',function($rootScope,$scope,$http,$timeout){
    $rootScope.getAllFalse();
    $rootScope.activeFive=true;
    $rootScope.isScreenPage=false;
    //page5选择设备数
    $scope.chooseedEquip=100;
    $scope.unChooseedEquip=0;
    //筛选数组
    var updateSelected = function(action,id){
        if(action == 'add' && $rootScope.allEquipIds.indexOf(id) == -1){
            $rootScope.allEquipIds.push(id);
        }
        if(action == 'remove' && $rootScope.allEquipIds.indexOf(id)!=-1){
            var idx = $rootScope.allEquipIds.indexOf(id);
            $rootScope.allEquipIds.splice(idx,1);
        }
    };
    $scope.checkOne=function($event,id){
        var action=($event.target.checked?'add':'remove');
        updateSelected(action,id);
        $http.get($rootScope.link+'/operate/getWechatsByGroup?groupIds='+JSON.stringify($rootScope.allEquipIds)+'&pageNo=1&pageSize=17').success(function(data){
            $scope.MemberList=data.data.content;
            $('#pages5').Page({
                totalPages: 9,//分页总数
                liNums: 5,//分页的数字按钮数(建议取奇数)
                activeClass: 'activP', //active 类样式定义
                callBack : function(page){
                    $http.get($rootScope.link+'/operate/getWechatsByGroup?groupIds='+JSON.stringify($rootScope.allEquipIds)+'&pageNo='+page+'&pageSize=17').success(function(data){
                        if(data.code==200){
                            $scope.MemberList=data.data.content;
                        }
                    })
                }
            });
        });
    };
    $scope.isChecked=function(id){
        return $rootScope.allEquipIds.indexOf(id)>=0;
    };
    //默认加载所有的分组的微信号
    $scope.isOnline=function(n){
        return n==0?'离线':'在线';
    };
    $timeout(function(){
        $http.get($rootScope.link+'/operate/getWechatsByGroup?groupIds='+JSON.stringify($rootScope.allEquipIds)+'&pageNo=1&pageSize=17').success(function(data){
            $scope.MemberList=data.data.content;
            $('#pages5').Page({
                totalPages: data.data.totalPages,//分页总数
                liNums: 5,//分页的数字按钮数(建议取奇数)
                activeClass: 'activP', //active 类样式定义
                callBack : function(page){
                    $http.get($rootScope.link+'/operate/getWechatsByGroup?groupIds='+JSON.stringify($rootScope.allEquipIds)+'&pageNo='+page+'&pageSize=17').success(function(data){
                        if(data.code==200){
                            $scope.MemberList=data.data.content;
                        }
                    })
                }
            });
        });
    },100);
    //登录
    $scope.numberLogin=function(){
        var page5WxIds=[];
        for(var i=0;i<$('.page5-div-checkbox').length;i++){
            if($('.page5-div-checkbox').eq(i).find('input').prop('checked')){
                page5WxIds.push($('.page5-div-checkbox').eq(i).attr('member_id'));
            }
        }
        if(page5WxIds.length==0){
            alert('请勾选需要操作微信！');
        }else{
            $http.get($rootScope.link+'/wechat/login?devices='+JSON.stringify(page5WxIds)).success(function(data){
                if(data.code==200){
                    alert('添加任务成功!');
                    $http.get($rootScope.link+'/task/getGroupTaskInit?status=-1').success(function(data){
                        if(data.code==200){
                            $rootScope.taskList=data.data;
                            $rootScope.taskAll=true;
                            $rootScope.taskDoing=false;
                            $rootScope.taskWait=false;
                            $rootScope.taskDown=false;
                            $rootScope.newBell=true;
                        }
                    });
                }else{
                    alert('登录失败！请重新点击！');
                }
            });
        }
    };
    //注销
    $scope.numberLogout=function(){
        var page5WxIds=[];
        for(var i=0;i<$('.page5-div-checkbox').length;i++){
            if($('.page5-div-checkbox').eq(i).find('input').prop('checked')){
                page5WxIds.push($('.page5-div-checkbox').eq(i).attr('member_id'));
            }
        }
        if(page5WxIds.length==0){
            alert('请勾选需要操作微信！');
        }else{
            $http.get($rootScope.link+'/wechat/logout?devices='+JSON.stringify(page5WxIds)).success(function(data){
                if(data.code==200){
                    alert('添加任务成功!');
                    $http.get($rootScope.link+'/task/getGroupTaskInit?status=-1').success(function(data){
                        if(data.code==200){
                            $rootScope.taskList=data.data;
                            $rootScope.taskAll=true;
                            $rootScope.taskDoing=false;
                            $rootScope.taskWait=false;
                            $rootScope.taskDown=false;
                            $rootScope.newBell=true;
                        }
                    });
                }else{
                    alert('注销失败！请重新点击！');
                }
            });
        }

    };
    //切换
    $scope.switchBox=false;
    $scope.numberSwitch=function(){
        $scope.switchBox=true;
    };
    $scope.switchCancel=function(){
        $scope.switchBox=false;
    };
    $scope.switchSure=function(){
        var assRank=$('.switch-list').find('input');
        for(var i= 0,assChecked=0;i<assRank.length;i++){
            if(assRank.eq(i).prop('checked')){
                assChecked=assRank.eq(i).attr('ass_rank');
            }
        }
        if(assChecked==0){
            alert('请选择微信序号！');
        }else{
            $http.get($rootScope.link+'/group/switchWechat?groupIds='+JSON.stringify($rootScope.allEquipIds)+'&rank='+assChecked).success(function(data){
                if(data.code==200){
                    alert('切换成功！');
                    $http.get($rootScope.link+'/operate/getWechatsByGroup?groupIds='+JSON.stringify($rootScope.allEquipIds)+'&pageNo=1&pageSize=17').success(function(data){
                        $scope.switchBox=false;
                        $scope.MemberList=data.data.content;
                        $('#pages5').Page({
                            totalPages: data.data.totalPages,//分页总数
                            liNums: 5,//分页的数字按钮数(建议取奇数)
                            activeClass: 'activP', //active 类样式定义
                            callBack : function(page){
                                $http.get($rootScope.link+'/operate/getWechatsByGroup?groupIds='+JSON.stringify($rootScope.allEquipIds)+'&pageNo='+page+'&pageSize=17').success(function(data){
                                    if(data.code==200){
                                        $scope.MemberList=data.data.content;
                                    }
                                })
                            }
                        });
                    });
                }else{
                    alert('切换失败！ 请再试！');
                }
            });
        }
    };
});
app.directive('groupAllCheckedFive',function(){
    return {
        link:function(scope,elem){
            elem.click(function(){
                if(elem.prop('checked')){
                    elem.parent().removeClass('on');
                    elem.parents('.page5-floor-one-list').find('.page5-div-checkbox').removeClass('on').find('input').prop('checked','checked');
                }else{
                    elem.parent().addClass('on');
                    elem.parents('.page5-floor-one-list').find('.page5-div-checkbox').addClass('on').find('input').prop('checked',function(){return false});
                }
            });
        }
    }
});
app.directive('groupCheckedFive',function(){
    return {
        link:function(scope,elem){
            elem.click(function(){
                if(elem.prop('checked')){
                    elem.parent().removeClass('on');
                    var checkArr=elem.parents('.page5-floor-one-list').find('.page5-div-checkbox');
                    for(var k= 0,flag=true;k<checkArr.length;k++){
                        if(!checkArr.eq(k).find('input').prop('checked')){
                            flag=false;
                        }
                    }
                    if(flag){
                        elem.parents('.page5-floor-one-list').find('.page5-checkAll-div').removeClass('on').find('input').prop('checked','checked');
                    }
                }else{
                    elem.parent().addClass('on');
                    elem.parents('.page5-floor-one-list').find('.page5-checkAll-div').addClass('on').find('input').prop('checked',function(){return false});
                }
            });
        }
    }
});
app.directive('radioCheckedFive',function(){
    return {
        link:function(scope,elem){
            elem.click(function(){
                if(elem.prop('checked')) {
                    elem.parents('.switch-list').find('span').removeClass('on');
                    elem.parent().addClass('on');
                }
            });
        }
    }
});
app.controller('page6C',function($rootScope,$scope,$http,$location,$anchorScroll){
    $rootScope.getAllFalse();
    $rootScope.activeSix=true;
    $rootScope.navPartThree=true;
    $rootScope.isScreenPage=false;
    //配置策略
    $scope.sendAllButton=false;
    $scope.timeInterval=5;
    $scope.sayHello='您好!很高兴认识您!';
    $scope.isClear=0;
    $scope.clear=function($event){
        if($event.target.checked){
            $scope.isClear=1;
        }else{
            $scope.isClear=0;
        }
    };
    $scope.sendAll=function(){
        for(var i= 0,arr=[];i<$('.new-wx-equip-input').length;i++){
            if($('.new-wx-equip-input').eq(i).prop('checked')){
                arr.push($('.new-wx-equip-input').eq(i).parent().next().attr('title'));
            }
        }
        if($scope.timeInterval==''){
            alert('请填写时间间隔！');
        }else if($scope.sayHello==''){
            alert('请填写打招呼用语！');
        }else if(arr.length==0){
            alert('请勾选需要操作的设备！');
        }else{
            var sendObj=new FormData();
            sendObj.append('devices',JSON.stringify(arr));
            sendObj.append('interval',$scope.timeInterval);
            sendObj.append('msg',$scope.sayHello);
            sendObj.append('clear',$scope.isClear);
            sendObj.append('strategy',$scope.addPeople);
            sendObj.append('count',$scope.addPeopleCount);
            sendObj.append('contactList',JSON.stringify($scope.assList));
            $http({
                method:'POST',
                url:$rootScope.link+"/wechatPlus/addFriendContact",
                data: sendObj,
                headers: {'Content-Type':undefined},
                transformRequest: angular.identity
            }).success( function ( response ) {
                //上传成功的操作
                if(response.code==200){
                    alert('任务添加成功!');
                    $location.hash('page-top6');
                    $anchorScroll();
                    $http.get($rootScope.link+'/task/getGroupTaskInit?status=-1').success(function(data){
                        if(data.code==200){
                            $rootScope.taskList=data.data;
                            $rootScope.taskAll=true;
                            $rootScope.taskDoing=false;
                            $rootScope.taskWait=false;
                            $rootScope.taskDown=false;
                            $rootScope.newBell=true;
                        }
                    });
                }
            });
        }
    };
    //加人策略
    $scope.assRadioChoose=false;
    $scope.addPeople=1;
    $scope.addPeopleCount=1;
    $scope.getAssHide=function(){
        $scope.assRadioChoose=false;
        $scope.addPeople=1;
    };
    $scope.getAssShow=function(){
        $scope.assRadioChoose=true;
        $scope.addPeople=0;
    }
});
app.directive('radioCheckedSix',function(){
    return {
        link:function(scope,elem){
            if(elem.prop('checked')){
                elem.parent().addClass('on');
            }
            elem.click(function(){
                if(elem.prop('checked')) {
                    elem.parents('.page6-third-li').find('div').removeClass('on');
                    elem.parent().addClass('on');
                }
            });
        }
    }
});
app.directive('getAssSix',function($http,$rootScope){
    return{
        link:function(scope,elem){
            elem.on('change',function(){
                var fd = new FormData();
                var file = document.querySelector('#ass-input6').files[0];
                fd.append('files', file);
                $http({
                    method:'POST',
                    url:$rootScope.link+"/wechatPlus/resolveFiles",
                    data: fd,
                    headers: {'Content-Type':undefined},
                    transformRequest: angular.identity
                }).success( function ( response ) {
                    //上传成功的操作
                    scope.WxMemberList=response.data;
                    for(var i= 0,arr=[];i<response.data.length;i++){
                        var obj={};
                        obj['name']=response.data[i].name;
                        obj['number']=response.data[i].number;
                        arr.push(obj);
                    }
                    scope.assList=arr;
                    scope.sendAllButton=true;
                }).error(function(){
                    alert('用户解析失败！请重试！');
                });
            });
        }
    }
});
app.controller('page7C',function($rootScope,$scope,$location,$anchorScroll,$http){
    $rootScope.getAllFalse();
    $rootScope.activeSeven=true;
    $rootScope.navPartThree=true;
    $rootScope.isScreenPage=false;
    //配置策略
    $scope.timeInterval=5;
    $scope.sayHello='您好！很高兴认识您！';
    $scope.sendAllButton=false;
    $scope.addPeople=1;
    $scope.addPeopleCount=1;
    $scope.addPeopleOne=function(){
        $scope.addPeople=1;
        $scope.assRadioChoose=false;
    };
    $scope.addPeopleTwo=function(){
        $scope.addPeople=0;
        $scope.assRadioChoose=true;
    };
    $scope.sendAll=function(){
        for(var i= 0,arr=[];i<$('.new-wx-equip-input7').length;i++){
            if($('.new-wx-equip-input7').eq(i).prop('checked')){
                arr.push($('.new-wx-equip-input7').eq(i).parent().next().attr('title'));
            }
        }
        if($scope.timeInterval==''){
            alert('请填写时间间隔！');
        }else if($scope.sayHello==''){
            alert('请填写打招呼用语！');
        }else if(arr.length==0){
            alert('请勾选需要操作的设备！');
        }else{
            var sendObj=new FormData();
            sendObj.append('devices',JSON.stringify(arr));
            sendObj.append('interval',$scope.timeInterval);
            sendObj.append('msg',$scope.sayHello);
            sendObj.append('strategy',$scope.addPeople);
            sendObj.append('count',$scope.addPeopleCount);
            sendObj.append('contactList',JSON.stringify($scope.assList));
            $http({
                method:'POST',
                url:$rootScope.link+"/wechatPlus/addFriendDirect",
                data: sendObj,
                headers: {'Content-Type':undefined},
                transformRequest: angular.identity
            }).success( function ( response ) {
                //上传成功的操作
                if(response.code==200){
                    alert('任务添加成功!');
                    $location.hash('page-top7');
                    $anchorScroll();
                    $http.get($rootScope.link+'/task/getGroupTaskInit?status=-1').success(function(data){
                        if(data.code==200){
                            $rootScope.taskList=data.data;
                            $rootScope.taskAll=true;
                            $rootScope.taskDoing=false;
                            $rootScope.taskWait=false;
                            $rootScope.taskDown=false;
                            $rootScope.newBell=true;
                        }
                    });
                }
            });
        }
    };
});
app.directive('getAssSeven',function($http,$rootScope){
    return{
        link:function(scope,elem){
            elem.on('change',function(){
                var fd = new FormData();
                var file = document.querySelector('#ass-input7').files[0];
                fd.append('files', file);
                $http({
                    method:'POST',
                    url:$rootScope.link+"/wechatPlus/resolveDirectFiles",
                    data: fd,
                    headers: {'Content-Type':undefined},
                    transformRequest: angular.identity
                }).success( function ( response ) {
                    //上传成功的操作
                    if(response.code==200){
                        scope.WxMemberList=response.data;
                        for(var i= 0,arr=[];i<response.data.length;i++){
                            arr.push(response.data[i].number);
                        }
                        scope.assList=arr;
                        scope.sendAllButton=true;
                    }
                }).error(function(){
                    alert('用户解析失败！请重试！');
                });
            });
        }
    }
});
app.controller('page8C',function($rootScope,$scope,$location,$anchorScroll,$http){
    $rootScope.getAllFalse();
    $rootScope.activeEight=true;
    $rootScope.navPartThree=true;
    $rootScope.isScreenPage=false;
    //算法配置
    $scope.mapRang='2000米';
    $scope.timeInterval=5;
    $scope.sayHello='您好！很高兴认识您！';
    $scope.mapLocation='';
    $scope.addPeopleNumber=10;
    $scope.addSex='全部';

    function G(id) {
        return document.getElementById(id);
    }
    var map = new BMap.Map("page8-map");
    map.centerAndZoom("北京",12);                   // 初始化地图,设置城市和地图级别。
    map.enableScrollWheelZoom(true); //为了王哥
    map.addEventListener('click',function(e){
        //var myIcon=new BMap.Icon("images/map-logo.png", new BMap.Size(23,33));
        //var marker = new BMap.Marker(new BMap.Point(e.point.lng,e.point.lat ),{icon:myIcon})
        //map.addOverlay(marker);
        $.ajax({
            type:'GET',
            url:'http://api.map.baidu.com/geocoder/v2/?ak=HbUVYMUg6PwbOnXkztdgSQlQ&callback=renderReverse&location='+e.point.lat+','+e.point.lng+'&output=json&pois=1',
            dataType:'JSONP',
            success:function(data1){
                $scope.mapLocation=data1.result.formatted_address;
                $scope.$apply();
            }
        });
    });
    var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
        {"input" : "suggestId"
            ,"location" : map
        });

    ac.addEventListener("onhighlight", function(e) {  //鼠标放在下拉列表上的事件
        var str = "";
        var _value = e.fromitem.value;
        var value = "";
        if (e.fromitem.index > -1) {
            value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
        }
        str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;

        value = "";
        if (e.toitem.index > -1) {
            _value = e.toitem.value;
            value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
        }
        str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
        G("searchResultPanel").innerHTML = str;
    });

    var myValue;
    ac.addEventListener("onconfirm", function(e) {    //鼠标点击下拉列表后的事件
        var _value = e.item.value;
        myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
        G("searchResultPanel").innerHTML ="onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;

        setPlace();
    });

    function setPlace(){
        map.clearOverlays();    //清除地图上所有覆盖物
        function myFun(){
            var pp = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
            map.centerAndZoom(pp, 18);
            map.addOverlay(new BMap.Marker(pp));    //添加标注
            $scope.mapPointLng=pp.lng;
            $scope.mapPointLat=pp.lat;
        }
        var local = new BMap.LocalSearch(map, { //智能搜索
            onSearchComplete: myFun
        });
        local.search(myValue);
    }

    $scope.sendAll=function(){
        for(var i= 0,arr=[];i<$('.new-wx-equip-input8').length;i++){
            if($('.new-wx-equip-input8').eq(i).prop('checked')){
                arr.push($('.new-wx-equip-input8').eq(i).parent().next().attr('title'));
            }
        }
        var sex=0;
        if($scope.addSex=='全部'){
            sex=0;
        }else if($scope.addSex=='男'){
            sex=1;
        }else if($scope.addSex=='女'){
            sex=2;
        }
        if(arr.length==0){
            alert('请勾选需要操作的设备！');
        }else if($scope.mapRang==''){
            alert('请选择粒子算法的范围！');
        }else if($scope.timeInterval==''){
            alert('请填写时间间隔！');
        }else if($scope.sayHello==''){
            alert('请输入打招呼用语！');
        }else if($scope.mapLocation==''){
            alert('请输入定位的地址！');
        }else if($scope.addPeopleNumber==''){
            alert('请输入加人的数量!')
        }else{
            var sendObj=new FormData();
            sendObj.append('devices',JSON.stringify(arr));
            sendObj.append('interval',$scope.timeInterval);
            sendObj.append('msg',$scope.sayHello);
            sendObj.append('range',parseInt($scope.mapRang));
            sendObj.append('longitude', $scope.mapPointLng);
            sendObj.append('latitude',$scope.mapPointLat);
            sendObj.append('num',$scope.addPeopleNumber);
            sendObj.append('sex',sex);
            $http({
                method:'POST',
                url:$rootScope.link+"/wechatPlus/sayHello",
                data: sendObj,
                headers: {'Content-Type':undefined},
                transformRequest: angular.identity
            }).success( function ( response ) {
                //上传成功的操作
                if(response.code==200){
                    alert('任务添加成功!');
                    $location.hash('page-top8');
                    $anchorScroll();
                    $http.get($rootScope.link+'/task/getGroupTaskInit?status=-1').success(function(data){
                        if(data.code==200){
                            $rootScope.taskList=data.data;
                            $rootScope.taskAll=true;
                            $rootScope.taskDoing=false;
                            $rootScope.taskWait=false;
                            $rootScope.taskDown=false;
                            $rootScope.newBell=true;
                        }
                    });
                }
            });
        }
    };
});
app.controller('page9C',function($rootScope,$scope,$location,$anchorScroll,$http,$timeout){
    $rootScope.getAllFalse();
    $rootScope.activeNine=true;
    $rootScope.navPartThree=true;
    $rootScope.isScreenPage=false;
    $timeout(function(){
        $http.get($rootScope.link+'/wechat/getWechatsByDevice?devices='+JSON.stringify($rootScope.moArray)+'&pageNo=1&pageSize=6').success(function(data){
            if(data.code==200){
                $rootScope.MemberList9=data.data.content;
                $('#pages9').Page({
                    totalPages: data.data.totalPages,//分页总数
                    liNums: 5,//分页的数字按钮数(建议取奇数)
                    activeClass: 'activP', //active 类样式定义
                    callBack : function(page){
                        $http.get($rootScope.link+'/wechat/getWechatsByDevice?devices='+JSON.stringify($rootScope.moArray)+'&pageNo='+page+'&pageSize=6').success(function(data){
                            $rootScope.MemberList9=data.data.content;
                        })
                    }
                });
            }
        });
    },500);
    //配置
    $scope.countNumber=5;
    $scope.sayHello='您好！很高兴认识您！';
    $scope.timeInterval=5;

    $scope.sendAll=function(){
        for(var i= 0,arr=[];i<$('.new-wx-equip-input9').length;i++){
            if($('.new-wx-equip-input9').eq(i).prop('checked')){
                arr.push($('.new-wx-equip-input9').eq(i).parent().next().attr('title'));
            }
        }
        if(arr.length==0){
            alert('请勾选需要操作的微信群组!');
        }else if($scope.countNumber==''){
            alert('请填写添加的数量!');
        }else if($scope.sayHello==''){
            alert('请填写打招呼用语!');
        }else if($scope.timeInterval==''){
            alert('请填写时间间隔!');
        }else{
            var sendObj=new FormData();
            sendObj.append('msg',$scope.sayHello);
            sendObj.append('count',$scope.countNumber);
            sendObj.append('interval', $scope.timeInterval);
            sendObj.append('dataList', JSON.stringify(arr));
            $http({
                method:'POST',
                url:$rootScope.link+"/wechatPlus/addFriendInClub",
                data: sendObj,
                headers: {'Content-Type':undefined},
                transformRequest: angular.identity
            }).success( function ( response ) {
                //上传成功的操作
                if(response.code==200){
                    alert('任务添加成功!');
                    $location.hash('page-top9');
                    $anchorScroll();
                    $http.get($rootScope.link+'/task/getGroupTaskInit?status=-1').success(function(data){
                        if(data.code==200){
                            $rootScope.taskList=data.data;
                            $rootScope.taskAll=true;
                            $rootScope.taskDoing=false;
                            $rootScope.taskWait=false;
                            $rootScope.taskDown=false;
                            $rootScope.newBell=true;
                        }
                    });
                }else if(response.code==300){
                    alert('无可添加的群好友!');
                }
            });
        }
    };
});
app.directive('groupCheckAllNine',function($rootScope,$http){
    return {
        link : function(scope,elem){
            elem.click(function(){
                if(elem.prop('checked')){
                    elem.parent().addClass('on');
                    elem.parent().parent().next().find('p').addClass('on').find('input').prop('checked',function(){return true});
                }else{
                    elem.parent().removeClass('on');
                    elem.parent().parent().next().find('p').removeClass('on').find('input').prop('checked',function(){return false});
                }
                scope.fuckArr=[];
                for(var i= 0;i<$('.new-wx-equip-input9').length;i++){
                    if($('.new-wx-equip-input9').eq(i).prop('checked')){
                        scope.fuckArr.push($('.new-wx-equip-input9').eq(i).parent().next().attr('title'));
                    }
                }
                $http.get($rootScope.link+'/wechat/getWechatsByDevice?devices='+JSON.stringify(scope.fuckArr)+'&pageNo=1&pageSize=6').success(function(data){
                    if(data.code==200){
                        $rootScope.MemberList9=data.data.content;
                        $('#pages9').Page({
                            totalPages: data.data.totalPages,//分页总数
                            liNums: 5,//分页的数字按钮数(建议取奇数)
                            activeClass: 'activP', //active 类样式定义
                            callBack : function(page){
                                $http.get($rootScope.link+'/wechat/getWechatsByDevice?devices='+JSON.stringify(scope.fuckArr)+'&pageNo='+page+'&pageSize=6').success(function(data){
                                    $rootScope.MemberList9=data.data.content;
                                })
                            }
                        });
                    }
                });
            });
        }
    }
});
app.directive('groupCheckOneNine',function($rootScope,$http){
    return {
        link:function(scope,elem){
            elem.click(function(){
                if(elem.prop('checked')){
                    elem.parent().addClass('on');
                }else{
                    elem.parent().removeClass('on');
                }
                var eNumber=elem.parent().parent().parent().parent().find('input');
                var flag=true;
                for(var i= 0;i<eNumber.length;i++){
                    if(eNumber.eq(i).prop('checked')==false){
                        flag=false;
                    }
                }
                if(flag){
                    elem.parent().parent().parent().parent().prev().find('p').addClass('on').find('input').prop('checked',function(){return true});
                }else{
                    elem.parent().parent().parent().parent().prev().find('p').removeClass('on').find('input').prop('checked',function(){return false});
                }
                scope.fuckArr=[];
                for(var i= 0;i<$('.new-wx-equip-input9').length;i++){
                    if($('.new-wx-equip-input9').eq(i).prop('checked')){
                        scope.fuckArr.push($('.new-wx-equip-input9').eq(i).parent().next().attr('title'));
                    }
                }
                $http.get($rootScope.link+'/wechat/getWechatsByDevice?devices='+JSON.stringify(scope.fuckArr)+'&pageNo=1&pageSize=6').success(function(data){
                    if(data.code==200){
                        $rootScope.MemberList9=data.data.content;
                        $('#pages9').Page({
                            totalPages: data.data.totalPages,//分页总数
                            liNums: 5,//分页的数字按钮数(建议取奇数)
                            activeClass: 'activP', //active 类样式定义
                            callBack : function(page){
                                $http.get($rootScope.link+'/wechat/getWechatsByDevice?devices='+JSON.stringify(scope.fuckArr)+'&pageNo='+page+'&pageSize=6').success(function(data){
                                    $rootScope.MemberList9=data.data.content;
                                })
                            }
                        });
                    }
                });
            });
        }
    }
});
app.directive('groupAllCheckedNine',function(){
    return {
        link:function(scope,elem){
            elem.click(function(){
                if(elem.prop('checked')){
                    elem.parent().addClass('on');
                    elem.parents('.page9-one-list').find('.page9-checked').addClass('on').find('input').prop('checked','checked');
                }else{
                    elem.parent().removeClass('on');
                    elem.parents('.page9-one-list').find('.page9-checked').removeClass('on').find('input').prop('checked',function(){return false});
                }
            });
        }
    }
});
app.directive('groupCheckedNine',function(){
    return {
        link:function(scope,elem){
            elem.click(function(){
                if(elem.prop('checked')){
                    elem.parent().addClass('on');
                    var checkArr=elem.parents('.page9-one-list').find('.page9-checked');
                    for(var k= 0,flag=true;k<checkArr.length;k++){
                        if(!checkArr.eq(k).find('input').prop('checked')){
                            flag=false;
                        }
                    }
                    if(flag){
                        elem.parents('.page9-one-list').find('.page9-checked-all').addClass('on').find('input').prop('checked','checked');
                    }
                }else{
                    elem.parent().removeClass('on');
                    elem.parents('.page9-one-list').find('.page9-checked-all').removeClass('on').find('input').prop('checked',function(){return false});
                }
            });
        }
    }
});
app.controller('page10C',function($rootScope,$scope,$location,$anchorScroll,$http){
    $rootScope.getAllFalse();
    $rootScope.activeTen=true;
    $rootScope.navPartThree=true;
    $rootScope.isScreenPage=false;
    //自动接受新朋友添加请求
    $scope.timeInterval=5;
    $scope.sendAll=function(){
        for(var i= 0,arr=[];i<$('.new-wx-equip-input10').length;i++){
            if($('.new-wx-equip-input10').eq(i).prop('checked')){
                arr.push($('.new-wx-equip-input10').eq(i).parent().next().attr('title'));
            }
        }
        if(arr.length==0){
            alert('请勾选需要操作的设备!');
        }else if($scope.timeInterval==''){
            alert('请填写时间间隔！');
        }else{
            var sendObj=new FormData();
            sendObj.append('devices',JSON.stringify(arr));
            sendObj.append('interval',$scope.timeInterval);
            $http({
                method:'POST',
                url:$rootScope.link+"/wechatPlus/receiveRequest",
                data: sendObj,
                headers: {'Content-Type':undefined},
                transformRequest: angular.identity
            }).success( function ( response ) {
                //上传成功的操作
                if(response.code==200){
                    alert('任务添加成功!');
                    $location.hash('page-top10');
                    $anchorScroll();
                    $http.get($rootScope.link+'/task/getGroupTaskInit?status=-1').success(function(data){
                        if(data.code==200){
                            $rootScope.taskList=data.data;
                            $rootScope.taskAll=true;
                            $rootScope.taskDoing=false;
                            $rootScope.taskWait=false;
                            $rootScope.taskDown=false;
                            $rootScope.newBell=true;
                        }
                    });
                }
            });
        }
    };
});
app.directive('radioCheckedTen',function(){
    return {
        link:function(scope,elem){
            elem.click(function(){
                if(elem.prop('checked')) {
                    elem.parents('.page10-one-list').find('.page10-one-radio').removeClass('on');
                    elem.parent().addClass('on');
                }
            });
        }
    }
});
app.controller('page11C',function($rootScope,$scope,$location,$anchorScroll,$timeout,$http){
    $rootScope.getAllFalse();
    $rootScope.activeEleven=true;
    $rootScope.navPartThree=true;
    $rootScope.isScreenPage=false;
    //回到导航栏
    $scope.getNav=function(){
        $location.hash('nav-bottom11');
        $anchorScroll();
    };
    //页面上的按钮点击 页面的先后顺序
    $scope.outSideBox=true;
    $scope.inSideBox=false;
    $scope.getInsideBox=function(num){
        $scope.MemberId=num;
        $http.get($rootScope.link+'/operate/getContact?wechatNumber='+num+'&pageNo=1&pageSize=16').success(function(data){
            if(data.code==200){
                $scope.outSideBox=false;
                $scope.inSideBox=true;
                $scope.WxList=data.data.content;
                $scope.assPage=1;
                $('#pages111').Page({
                    totalPages: data.data.totalPages,//分页总数
                    liNums: 5,//分页的数字按钮数(建议取奇数)
                    activeClass: 'activP', //active 类样式定义
                    callBack : function(page){
                        $http.get($rootScope.link+'/operate/getContact?wechatNumber='+num+'&pageNo='+page+'&pageSize=16').success(function(data){
                            $scope.WxList=data.data.content;
                            $scope.assPage=page;
                        })
                    }
                });
            }

        });
    };
    $scope.getBack=function(){
        $scope.outSideBox=true;
        $scope.inSideBox=false;
    };
    //刷新
    $scope.getNew=function(num){
        $http.get($rootScope.link+'/wechat/getFriendList?number='+num).success(function(data){
            if(data.code==200){
                alert('添加任务成功！');
                $http.get($rootScope.link+'/task/getGroupTaskInit?status=-1').success(function(data){
                    if(data.code==200){
                        $rootScope.taskList=data.data;
                        $rootScope.taskAll=true;
                        $rootScope.taskDoing=false;
                        $rootScope.taskWait=false;
                        $rootScope.taskDown=false;
                        $rootScope.newBell=true;
                    }
                });
            }else{
                alert('添加任务失败！请重试！')
            }
        });
    };

    //更改名字和标签名
    $scope.editBoxOne=false;
    $scope.editBoxTwo=false;
    $scope.newName='';
    $scope.newTag='';
    $scope.getEditBoxOne=function(id){
        $scope.editBoxOne=true;
        $scope.editId=id;
    };
    $scope.getEditBoxTwo=function(id){
        $scope.editBoxTwo=true;
        $scope.editId=id;
    };
    $scope.cancelButton=function(){
        $scope.editBoxOne=false;
        $scope.editBoxTwo=false;
    };
    $scope.SureButtonOne=function(id){
        if($scope.newName==''){
            alert('请填写需要更改的昵称！');
        }else{
            $http.get($rootScope.link+'/operate/updateContact?name='+$scope.newName+'&id='+id).success(function(data){
                if(data.code==200){
                    alert('修改成功！');
                    $scope.editBoxOne=false;
                    $scope.newName='';
                    $http.get($rootScope.link+'/operate/getContact?wechatNumber='+$scope.MemberId+'&pageNo='+$scope.assPage+'&pageSize=16').success(function(data){
                        if(data.code==200){
                            $scope.WxList=data.data.content;
                        }
                    });
                }
            });
        }

    };
    $scope.SureButtonTwo=function(id){
        if($scope.newTag==''){
            alert('请填写需要更改的昵称！');
        }else{
            $http.get($rootScope.link+'/operate/updateContact?tag='+$scope.newTag+'&id='+id).success(function(data){
                if(data.code==200){
                    alert('修改成功！');
                    $scope.editBoxTwo=false;
                    $scope.newTag='';
                    $http.get($rootScope.link+'/operate/getContact?wechatNumber='+$scope.MemberId+'&pageNo='+$scope.assPage+'&pageSize=16').success(function(data){
                        if(data.code==200){
                            $scope.WxList=data.data.content;
                        }
                    });
                }
            });
        }

    };

    //默认加载群组和成员列表
    $timeout(function(){
        $http.get($rootScope.link+'/wechat/getWechatsByDevice?devices='+JSON.stringify($rootScope.moArray)+'&pageNo=1&pageSize=16').success(function(data){
            if(data.code==200){
                $rootScope.MemberList11=data.data.content;
                $('#pages12').Page({
                    totalPages: data.data.totalPages,//分页总数
                    liNums: 5,//分页的数字按钮数(建议取奇数)
                    activeClass: 'activP', //active 类样式定义
                    callBack : function(page){
                        $http.get($rootScope.link+'/wechat/getWechatsByDevice?devices='+JSON.stringify($rootScope.moArray)+'&pageNo='+page+'&pageSize=16').success(function(data){
                            $rootScope.MemberList11=data.data.content;
                        })
                    }
                });
            }
        });
    },200);

});
app.directive('groupCheckAllEl',function($rootScope,$http){
    return {
        link : function(scope,elem){
            elem.click(function(){
                if(elem.prop('checked')){
                    elem.parent().addClass('on');
                    elem.parent().parent().next().find('p').addClass('on').find('input').prop('checked',function(){return true});
                }else{
                    elem.parent().removeClass('on');
                    elem.parent().parent().next().find('p').removeClass('on').find('input').prop('checked',function(){return false});
                }
                scope.fuckArr=[];
                for(var i= 0;i<$('.new-wx-equip-input11').length;i++){
                    if($('.new-wx-equip-input11').eq(i).prop('checked')){
                        scope.fuckArr.push($('.new-wx-equip-input11').eq(i).parent().next().attr('title'));
                    }
                }
                $http.get($rootScope.link+'/wechat/getWechatsByDevice?devices='+JSON.stringify(scope.fuckArr)+'&pageNo=1&pageSize=16').success(function(data){
                    if(data.code==200){
                        $rootScope.MemberList11=data.data.content;
                        $('#pages11').Page({
                            totalPages: data.data.totalPages,//分页总数
                            liNums: 5,//分页的数字按钮数(建议取奇数)
                            activeClass: 'activP', //active 类样式定义
                            callBack : function(page){
                                $http.get($rootScope.link+'/wechat/getWechatsByDevice?devices='+JSON.stringify(scope.fuckArr)+'&pageNo='+page+'&pageSize=16').success(function(data){
                                    $rootScope.MemberList11=data.data.content;
                                })
                            }
                        });
                    }
                });
            });
        }
    }
});
app.directive('groupCheckOneEl',function($rootScope,$http){
    return {
        link:function(scope,elem){
            elem.click(function(){
                if(elem.prop('checked')){
                    elem.parent().addClass('on');
                }else{
                    elem.parent().removeClass('on');
                }
                var eNumber=elem.parent().parent().parent().parent().find('input');
                var flag=true;
                for(var i= 0;i<eNumber.length;i++){
                    if(eNumber.eq(i).prop('checked')==false){
                        flag=false;
                    }
                }
                if(flag){
                    elem.parent().parent().parent().parent().prev().find('p').addClass('on').find('input').prop('checked',function(){return true});
                }else{
                    elem.parent().parent().parent().parent().prev().find('p').removeClass('on').find('input').prop('checked',function(){return false});
                }
                scope.fuckArr=[];
                for(var i= 0;i<$('.new-wx-equip-input11').length;i++){
                    if($('.new-wx-equip-input11').eq(i).prop('checked')){
                        scope.fuckArr.push($('.new-wx-equip-input11').eq(i).parent().next().attr('title'));
                    }
                }
                $http.get($rootScope.link+'/wechat/getWechatsByDevice?devices='+JSON.stringify(scope.fuckArr)+'&pageNo=1&pageSize=16').success(function(data){
                    if(data.code==200){
                        $rootScope.MemberList11=data.data.content;
                        $('#pages11').Page({
                            totalPages: data.data.totalPages,//分页总数
                            liNums: 5,//分页的数字按钮数(建议取奇数)
                            activeClass: 'activP', //active 类样式定义
                            callBack : function(page){
                                $http.get($rootScope.link+'/wechat/getWechatsByDevice?devices='+JSON.stringify(scope.fuckArr)+'&pageNo='+page+'&pageSize=16').success(function(data){
                                    $rootScope.MemberList11=data.data.content;
                                })
                            }
                        });
                    }
                });
            });
        }
    }
});
app.directive('groupCheckedEl',function(){
    return {
        link:function(scope,elem){
            elem.click(function(){
                if(elem.prop('checked')){
                    elem.parent().addClass('on');
                }else{
                    elem.parent().removeClass('on');
                }
            });
        }
    }
});
app.controller('page12C',function($rootScope,$scope,$location,$anchorScroll,$timeout,$http){
    $rootScope.getAllFalse();
    $rootScope.activeTwelve=true;
    $rootScope.navPartThree=true;
    $rootScope.isScreenPage=false;
    //锚点的跳转 回到导航标题处
    $scope.getNav=function(){
        $location.hash('nav-bottom12');
        $anchorScroll();
    };
    //页面点击先后顺序与逻辑
    $scope.outSideBox=true;
    $scope.inSideBox=false;
    $scope.isAllCheckBack=false;
    $scope.getInsideBox=function(num,id){
        $scope.MemberNumber=num;
        $scope.WxMemberId=id;
        $scope.isAllCheckBack=true;
        $('.page12-checkAll-div').removeClass('on').find('input').prop('checked',function(){return false});
        $http.get($rootScope.link+'/operate/getClubByWechatNumber?wechatNumber='+id+'&pageNo=1&pageSize=16').success(function(data){
            if(data.code==200){
                $scope.outSideBox=false;
                $scope.inSideBox=true;
                $scope.WxList=data.data.content;
                $scope.assPage=1;
                $('#pages122').Page({
                    totalPages: data.data.totalPages,//分页总数
                    liNums: 5,//分页的数字按钮数(建议取奇数)
                    activeClass: 'activP', //active 类样式定义
                    callBack : function(page){
                        $http.get($rootScope.link+'/operate/getClubByWechatNumber?wechatNumber='+id+'&pageNo='+page+'&pageSize=16').success(function(data){
                            $scope.WxList=data.data.content;
                            $scope.assPage=page;
                        })
                    }
                });
            }

        });
    };
    $scope.getGroupNew=function(num){
        $http.get($rootScope.link+'/wechat/getGroupList?number='+num).success(function(data){
            if(data.code==200){
                alert('添加任务成功！');
                $http.get($rootScope.link+'/task/getGroupTaskInit?status=-1').success(function(data){
                    if(data.code==200){
                        $rootScope.taskList=data.data;
                        $rootScope.taskAll=true;
                        $rootScope.taskDoing=false;
                        $rootScope.taskWait=false;
                        $rootScope.taskDown=false;
                        $rootScope.newBell=true;
                    }
                });
            }else{
                alert('添加任务失败！请重试！');
            }
        });
    };
    $scope.getBack=function(){
        $scope.outSideBox=true;
        $scope.inSideBox=false;
    };
    //修改标签框
    $scope.labelBox=false;
    $scope.getLabelBox=function(id){
        $scope.TagName='';
        $scope.TagId=id;
        $scope.labelBox=true;
    };
    $scope.cancelLabelBox=function(){
        $scope.labelBox=false;
    };
    $scope.SureLabelBox=function(id){
        if($scope.TagName==''){
            alert('请输入需要更改的标签名');
        }else{
            $http.get($rootScope.link+'/operate/addTagToClub?id='+id+'&tag='+$scope.TagName).success(function(data){
                if(data.code==200){
                    alert('标签成功！');
                    $scope.labelBox=false;
                    $http.get($rootScope.link+'/operate/getClubByWechatNumber?wechatNumber='+$scope.MemberNumber+'&pageNo='+$scope.assPage+'&pageSize=17').success(function(data){
                        if(data.code==200){
                            $scope.WxList=data.data.content;
                        }

                    });

                }
            });
        }

    };
    //群发消息框
    $scope.messageSendBox=false;
    $scope.getMessageSendBox=function(){
        $scope.groupArr=[];
        $scope.clubNames=[];
        $scope.saySomething='';
        for(var i=0;i<$('.page12-div-checkbox').length;i++){
            if($('.page12-div-checkbox').eq(i).find('input').prop('checked')){
                $scope.groupArr.push($('.page12-div-checkbox').eq(i).attr('group_id'));
                $scope.clubNames.push($('.page12-div-checkbox').eq(i).attr('club_name'));
            }
        }
        if($scope.groupArr.length==0){
            alert('请勾选需要发送的群名称！');
        }else{
            $scope.messageSendBox=true;
        }
    };
    //$scope.sendPhoto=false;
    //$scope.sendWords=false;
    //$scope.photoSendList=false;
    //$scope.messageSend=false;
    //$scope.getPhotoSendList=function(){
    //    $scope.sendPhoto=false;
    //    $scope.sendWords=true;
    //    $scope.photoSendList=true;
    //    $scope.messageSend=true;
    //};
    //$scope.getMessageSend=function(){
    //    $scope.sendPhoto=true;
    //    $scope.sendWords=false;
    //    $scope.photoSendList=false;
    //    $scope.messageSend=false;
    //};
    $scope.cancelMessageSendBox=function(){
        $scope.messageSendBox=false;
    };
    $scope.sureMessageSendBox=function(){
        if($scope.saySomething==''){
            alert('请填写需要群发的内容!');
        }else{
            var sendObj=new FormData();
            sendObj.append('wechatId',$scope.WxMemberId);
            sendObj.append('clubNames',JSON.stringify($scope.clubNames));
            sendObj.append('content',$scope.saySomething);
            $http({
                method:'POST',
                url:$rootScope.link+"/operate/sendClubMsg",
                data: sendObj,
                headers: {'Content-Type':undefined},
                transformRequest: angular.identity
            }).success( function ( response ) {
                //上传成功的操作
                if(response.code==200){
                    $scope.messageSendBox=false;
                    alert('任务添加成功！');
                    $http.get($rootScope.link+'/task/getGroupTaskInit?status=-1').success(function(data){
                        if(data.code==200){
                            $rootScope.taskList=data.data;
                            $rootScope.taskAll=true;
                            $rootScope.taskDoing=false;
                            $rootScope.taskWait=false;
                            $rootScope.taskDown=false;
                            $rootScope.newBell=true;
                        }
                    });
                }
            });
        }

    };


    $scope.sendMessage = new FormData();

    //筛选数组
    $scope.selected=[1];
    var updateSelected = function(action,id){
        if(action == 'add' && $scope.selected.indexOf(id) == -1){
            $scope.selected.push(id);
        }
        if(action == 'remove' && $scope.selected.indexOf(id)!=-1){
            var idx = $scope.selected.indexOf(id);
            $scope.selected.splice(idx,1);
        }
    };
    $scope.checkOne=function($event,id,count){
        var action=($event.target.checked?'add':'remove');
        updateSelected(action,id,count);
        $http.get($rootScope.link+'/operate/getWechatsByGroup?groupIds='+JSON.stringify($scope.selected)+'&pageNo=1&pageSize=17').success(function(data){
            if(data.code==200){
                $scope.MemberList=data.data.content;
                $scope.outSideBox=true;
                $scope.inSideBox=false;
                $('#pages12').Page({
                    totalPages: data.data.totalPages,//分页总数
                    liNums: 5,//分页的数字按钮数(建议取奇数)
                    activeClass: 'activP', //active 类样式定义
                    callBack : function(page){
                        $http.get($rootScope.link+'/operate/getWechatsByGroup?groupIds='+JSON.stringify($scope.selected)+'&pageNo='+page+'&pageSize=17').success(function(data){
                            $scope.MemberList=data.data.content;
                        })
                    }
                });
            }

        });
    };
    $scope.isChecked=function(id){
        return $scope.selected.indexOf(id)>=0;
    };

    //默认加载微信列表
    $timeout(function(){
        $http.get($rootScope.link+'/wechat/getWechatsByDevice?devices='+JSON.stringify($rootScope.moArray)+'&pageNo=1&pageSize=16').success(function(data){
            if(data.code==200){
                $rootScope.MemberList12=data.data.content;
                $('#pages11').Page({
                    totalPages: data.data.totalPages,//分页总数
                    liNums: 5,//分页的数字按钮数(建议取奇数)
                    activeClass: 'activP', //active 类样式定义
                    callBack : function(page){
                        $http.get($rootScope.link+'/wechat/getWechatsByDevice?devices='+JSON.stringify($rootScope.moArray)+'&pageNo='+page+'&pageSize=16').success(function(data){
                            $rootScope.MemberList12=data.data.content;
                        })
                    }
                });
            }
        });
    },200);
});
app.directive('groupAllCheckedTw',function(){
    return {
        link:function(scope,elem){
            elem.click(function(){
                if(elem.prop('checked')){
                    elem.parent().addClass('on');
                    elem.parents('.page12-floor-two-list').find('.page12-div-checkbox').addClass('on').find('input').prop('checked','checked');
                }else{
                    elem.parent().removeClass('on');
                    elem.parents('.page12-floor-two-list').find('.page12-div-checkbox').removeClass('on').find('input').prop('checked',function(){return false});
                }
            });
        }
    }
});
app.directive('groupCheckedTw',function(){
    return {
        link:function(scope,elem){
            elem.click(function(){
                if(elem.prop('checked')){
                    elem.parent().addClass('on');
                    var checkArr=elem.parents('.page12-floor-two-list').find('.page12-div-checkbox');
                    for(var k= 0,flag=true;k<checkArr.length;k++){
                        if(!checkArr.eq(k).find('input').prop('checked')){
                            flag=false;
                        }
                    }
                    if(flag){
                        elem.parents('.page12-floor-two-list').find('.page12-checkAll-div').addClass('on').find('input').prop('checked','checked');
                    }
                }else{
                    elem.parent().removeClass('on');
                    elem.parents('.page12-floor-two-list').find('.page12-checkAll-div').removeClass('on').find('input').prop('checked',function(){return false});
                }
            });
        }
    }
});
app.directive('groupCheckAllTw',function($rootScope,$http){
    return {
        link : function(scope,elem){
            elem.click(function(){
                if(elem.prop('checked')){
                    elem.parent().addClass('on');
                    elem.parent().parent().next().find('p').addClass('on').find('input').prop('checked',function(){return true});
                }else{
                    elem.parent().removeClass('on');
                    elem.parent().parent().next().find('p').removeClass('on').find('input').prop('checked',function(){return false});
                }
                scope.fuckArr=[];
                for(var i= 0;i<$('.new-wx-equip-input12').length;i++){
                    if($('.new-wx-equip-input12').eq(i).prop('checked')){
                        scope.fuckArr.push($('.new-wx-equip-input12').eq(i).parent().next().attr('title'));
                    }
                }
                $http.get($rootScope.link+'/wechat/getWechatsByDevice?devices='+JSON.stringify(scope.fuckArr)+'&pageNo=1&pageSize=16').success(function(data){
                    if(data.code==200){
                        $rootScope.MemberList12=data.data.content;
                        $('#pages12').Page({
                            totalPages: data.data.totalPages,//分页总数
                            liNums: 5,//分页的数字按钮数(建议取奇数)
                            activeClass: 'activP', //active 类样式定义
                            callBack : function(page){
                                $http.get($rootScope.link+'/wechat/getWechatsByDevice?devices='+JSON.stringify(scope.fuckArr)+'&pageNo='+page+'&pageSize=16').success(function(data){
                                    $rootScope.MemberList12=data.data.content;
                                })
                            }
                        });
                    }
                });
            });
        }
    }
});
app.directive('groupCheckOneTw',function($rootScope,$http){
    return {
        link:function(scope,elem){
            elem.click(function(){
                if(elem.prop('checked')){
                    elem.parent().addClass('on');
                }else{
                    elem.parent().removeClass('on');
                }
                var eNumber=elem.parent().parent().parent().parent().find('input');
                var flag=true;
                for(var i= 0;i<eNumber.length;i++){
                    if(eNumber.eq(i).prop('checked')==false){
                        flag=false;
                    }
                }
                if(flag){
                    elem.parent().parent().parent().parent().prev().find('p').addClass('on').find('input').prop('checked',function(){return true});
                }else{
                    elem.parent().parent().parent().parent().prev().find('p').removeClass('on').find('input').prop('checked',function(){return false});
                }
                scope.fuckArr=[];
                for(var i= 0;i<$('.new-wx-equip-input12').length;i++){
                    if($('.new-wx-equip-input12').eq(i).prop('checked')){
                        scope.fuckArr.push($('.new-wx-equip-input12').eq(i).parent().next().attr('title'));
                    }
                }
                $http.get($rootScope.link+'/wechat/getWechatsByDevice?devices='+JSON.stringify(scope.fuckArr)+'&pageNo=1&pageSize=16').success(function(data){
                    if(data.code==200){
                        $rootScope.MemberList12=data.data.content;
                        $('#pages12').Page({
                            totalPages: data.data.totalPages,//分页总数
                            liNums: 5,//分页的数字按钮数(建议取奇数)
                            activeClass: 'activP', //active 类样式定义
                            callBack : function(page){
                                $http.get($rootScope.link+'/wechat/getWechatsByDevice?devices='+JSON.stringify(scope.fuckArr)+'&pageNo='+page+'&pageSize=16').success(function(data){
                                    $rootScope.MemberList12=data.data.content;
                                })
                            }
                        });
                    }
                });
            });
        }
    }
});
app.controller('page13C',function($rootScope,$scope,$location,$anchorScroll,$http){
    $rootScope.getAllFalse();
    $rootScope.activeThirdteen=true;
    $rootScope.navPartThree=true;
    $rootScope.isScreenPage=true;
    //锚点的跳转 回到导航标题处
    $scope.getNav=function(){
        $location.hash('nav-bottom13');
        $anchorScroll();
    };
    //筛选数组
    $scope.selected1=[];
    $scope.chooseedEquip=0;
    $scope.chooseNumber=0;
    $scope.unChooseNumber=100;
    var updateSelected1 = function(action,id,count){
        if(action == 'add' && $scope.selected1.indexOf(id) == -1){
            $scope.selected1.push(id);
            $scope.chooseedEquip+=count;
        }
        if(action == 'remove' && $scope.selected1.indexOf(id)!=-1){
            var idx = $scope.selected1.indexOf(id);
            $scope.selected1.splice(idx,1);
            $scope.chooseedEquip-=count;
        }
    };
    $scope.checkOne1=function($event,id,count){
        var action=($event.target.checked?'add':'remove');
        updateSelected1(action,id,count);
        $scope.chooseNumber=$scope.chooseedEquip/$rootScope.equipCounts*100;
        $scope.unChooseNumber=100-$scope.chooseNumber;
        $('.all-equip-line-block').css({'width':$scope.chooseNumber+'%','transition':'1s'});
        $('.none-equip-line-block').css({'width':$scope.unChooseNumber+'%','transition':'1s'});
    };
    $scope.isChecked1=function(id){
        return $scope.selected1.indexOf(id)>=0;
    };
    $scope.saySomething='';
    $scope.timeInterval=5;
    //上传朋友圈图片
    $scope.sendObj = new FormData();
    $scope.sendObj.append('file1','');
    $scope.sendObj.append('file2','');
    $scope.sendObj.append('file3','');
    $scope.sendObj.append('file4','');
    $scope.sendObj.append('file5','');
    $scope.sendObj.append('file6','');
    $scope.sendObj.append('file7','');
    $scope.sendObj.append('file8','');
    $scope.sendObj.append('file9','');
    $scope.picArr=[];
    //筛选数组
    $scope.selected=[];
    var updateSelected = function(action,id){
        if(action == 'add' && $scope.selected.indexOf(id) == -1){
            $scope.selected.push(id);
        }
        if(action == 'remove' && $scope.selected.indexOf(id)!=-1){
            var idx = $scope.selected.indexOf(id);
            $scope.selected.splice(idx,1);
        }
    };
    $scope.checkOne=function($event,id){
        var action=($event.target.checked?'add':'remove');
        updateSelected(action,id);
    };
    $scope.isChecked=function(id){
        return $scope.selected.indexOf(id)>=0;
    };
    //防封号策略C
    $scope.picNumberBox=false;
    $scope.getPicBox=function(){
        $scope.picNumberBox=true;
    };
    $scope.cancelPicBox=function(){
        $scope.picNumberBox=false;
        $scope.mustChoose=[];
        $scope.unMChoose=[];
    };
    $scope.mustChoose=[];
    $scope.unMChoose=[];
    $scope.getSureButton=function(){
        $scope.mustChoose=$scope.selected.sort();
        $scope.unChoose=[];
        $scope.tmp=$scope.picArr.concat($scope.selected);
        $scope.o={};
        for (var i = 0; i < $scope.tmp.length; i ++) {
            ($scope.tmp[i] in $scope.o) ? $scope.o[$scope.tmp[i]]++ : $scope.o[$scope.tmp[i]] = 1;
        }
        for (var x in $scope.o) {
            if ($scope.o[x] == 1) {
                $scope.unChoose.push(parseInt(x));
            }
        }
        $scope.unMChoose=$scope.unChoose.sort();
        $scope.picNumberBox=false;
    };

    //筛选数组
    $scope.selected2=[];
    var updateSelected2 = function(action,id){
        if(action == 'add' && $scope.selected2.indexOf(id) == -1){
            $scope.selected2.push(id);
        }
        if(action == 'remove' && $scope.selected2.indexOf(id)!=-1){
            var idx = $scope.selected2.indexOf(id);
            $scope.selected2.splice(idx,1);
        }
    };
    $scope.checkOne2=function($event,id){
        var action=($event.target.checked?'add':'remove');
        updateSelected2(action,id);
    };
    $scope.isChecked2=function(id){
        return $scope.selected2.indexOf(id)>=0;
    };
    //防封号策略C
    $scope.picNumberBox1=false;
    $scope.getPicBox2=function(){
        $scope.picNumberBox1=true;
    };
    $scope.cancelPicBox2=function(){
        $scope.picNumberBox1=false;
        $scope.operate=[];
    };
    $scope.operate=[];
    $scope.getSureButton2=function(){
        $scope.operate=$scope.selected2.sort();
        $scope.picNumberBox1=false;
    };

    $scope.aTag='';
    $scope.aMsg='';

    $scope.sendAll=function(){
        for(var i= 0,arr=[];i<$('.new-wx-equip-input13').length;i++){
            if($('.new-wx-equip-input13').eq(i).prop('checked')){
                arr.push($('.new-wx-equip-input13').eq(i).parent().next().attr('title'));
            }
        }
        if($scope.saySomething==''){
            alert('请编辑朋友圈内容');
        }else if(arr==0){
            alert('请勾选需要操作的设备！');
        }else{
            $scope.sendObj.append('content',$scope.saySomething);
            $scope.sendObj.append('devices',JSON.stringify(arr));
            $scope.sendObj.append('interval',$scope.timeInterval);
            $scope.sendObj.append('msg',$scope.aMsg);
            $scope.sendObj.append('number',JSON.stringify($scope.operate));
            $scope.sendObj.append('tag',$scope.aTag);
            $scope.sendObj.append('mustNumber',JSON.stringify($scope.mustChoose));
            $scope.sendObj.append('randomNumber',JSON.stringify($scope.unMChoose));
            $http({
                method:'POST',
                url:$rootScope.link+"/operate/sendMoments",
                data: $scope.sendObj,
                headers: {'Content-Type':undefined},
                transformRequest: angular.identity
            }).success( function ( response ) {
                //上传成功的操作
                if(response.code==200){
                    alert('任务添加成功!');
                    $location.hash('page-top13');
                    $anchorScroll();
                    location.reload();
                    $http.get($rootScope.link+'/task/getGroupTaskInit?status=-1').success(function(data){
                        if(data.code==200){
                            $rootScope.taskList=data.data;
                            $rootScope.taskAll=true;
                            $rootScope.taskDoing=false;
                            $rootScope.taskWait=false;
                            $rootScope.taskDown=false;
                            $rootScope.newBell=true;
                        }
                    });
                }else{
                    alert('任务添加失败！请重新尝试！');
                    location.reload();
                }
            });
        }

    };
});
app.directive('groupChecked',function($timeout){
    return {
        link:function(scope,elem){
            $timeout(function(){
                if(elem.prop('checked')){
                    elem.parent().addClass('on');
                }else{
                    elem.parent().removeClass('on');
                }
            },0);
            elem.click(function(){
                if(elem.prop('checked')){
                    elem.parent().addClass('on');
                }else{
                    elem.parent().removeClass('on');
                }
            });
        }
    }
});
app.directive('radioChecked',function(){
    return {
        link:function(scope,elem){
            elem.click(function(){
                if(elem.prop('checked')) {
                    elem.parents('.page13-floor-classify').find('.page13-classify-radio').removeClass('on');
                    elem.parent().addClass('on');
                }
            });
        }
    }
});
app.directive('uploadImage1', function () {
    return{
        link  : function (scope,elem) {
            elem.on("change", function(){
                var file = this.files[0];
                if(!/image\/\w+/.test(file.type)){
                    alert("文件必须为图片！");
                    return false;
                }
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function(e){
                    //result.innerHTML = '<img src="'+this.result+'" alt=""/>'
                    elem.parent().css({
                        'backgroundImage' : 'url('+ this.result +')',
                        'backgroundSize' : '100%'
                    });
                    scope.picArr.push(parseInt(elem.prev().text()));
                    scope.mustChoose.push(parseInt(elem.prev().text()));
                    elem.parent().next().show();
                    scope.$apply();
                };
                scope.sendObj.append('file1',file);
            });
        }
    }
});
app.directive('uploadImage2', function () {
    return{
        link  : function (scope,elem) {
            elem.on("change", function(){
                var file = this.files[0];
                if(!/image\/\w+/.test(file.type)){
                    alert("文件必须为图片！");
                    return false;
                }
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function(e){
                    //result.innerHTML = '<img src="'+this.result+'" alt=""/>'
                    elem.parent().css({
                        'backgroundImage' : 'url('+ this.result +')',
                        'backgroundSize' : '100%'
                    });
                    scope.picArr.push(parseInt(elem.prev().text()));
                    scope.mustChoose.push(parseInt(elem.prev().text()));
                    elem.parent().next().show();
                    scope.$apply();
                };
                scope.sendObj.append('file2',file);
            });
        }
    }
});
app.directive('uploadImage3', function () {
    return{
        link  : function (scope,elem) {
            elem.on("change", function(){
                var file = this.files[0];
                if(!/image\/\w+/.test(file.type)){
                    alert("文件必须为图片！");
                    return false;
                }
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function(e){
                    //result.innerHTML = '<img src="'+this.result+'" alt=""/>'
                    elem.parent().css({
                        'backgroundImage' : 'url('+ this.result +')',
                        'backgroundSize' : '100%'
                    });
                    scope.picArr.push(parseInt(elem.prev().text()));
                    scope.mustChoose.push(parseInt(elem.prev().text()));
                    elem.parent().next().show();
                    scope.$apply();
                };
                scope.sendObj.append('file3',file);
            });
        }
    }
});
app.directive('uploadImage4', function () {
    return{
        link  : function (scope,elem) {
            elem.on("change", function(){
                var file = this.files[0];
                if(!/image\/\w+/.test(file.type)){
                    alert("文件必须为图片！");
                    return false;
                }
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function(e){
                    //result.innerHTML = '<img src="'+this.result+'" alt=""/>'
                    elem.parent().css({
                        'backgroundImage' : 'url('+ this.result +')',
                        'backgroundSize' : '100%'
                    });
                    scope.picArr.push(parseInt(elem.prev().text()));
                    elem.parent().next().show();
                    scope.mustChoose.push(parseInt(elem.prev().text()));
                    scope.$apply();
                };
                scope.sendObj.append('file4',file);
            });
        }
    }
});
app.directive('uploadImage5', function () {
    return{
        link  : function (scope,elem) {
            elem.on("change", function(){
                var file = this.files[0];
                if(!/image\/\w+/.test(file.type)){
                    alert("文件必须为图片！");
                    return false;
                }
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function(e){
                    //result.innerHTML = '<img src="'+this.result+'" alt=""/>'
                    elem.parent().css({
                        'backgroundImage' : 'url('+ this.result +')',
                        'backgroundSize' : '100%'
                    });
                    scope.picArr.push(parseInt(elem.prev().text()));
                    elem.parent().next().show();
                    scope.mustChoose.push(parseInt(elem.prev().text()));
                    scope.$apply();
                };
                scope.sendObj.append('file5',file);
            });
        }
    }
});
app.directive('uploadImage6', function () {
    return{
        link  : function (scope,elem) {
            elem.on("change", function(){
                var file = this.files[0];
                if(!/image\/\w+/.test(file.type)){
                    alert("文件必须为图片！");
                    return false;
                }
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function(e){
                    //result.innerHTML = '<img src="'+this.result+'" alt=""/>'
                    elem.parent().css({
                        'backgroundImage' : 'url('+ this.result +')',
                        'backgroundSize' : '100%'
                    });
                    scope.picArr.push(parseInt(elem.prev().text()));
                    elem.parent().next().show();
                    scope.mustChoose.push(parseInt(elem.prev().text()));
                    scope.$apply();
                };
                scope.sendObj.append('file6',file);
            });
        }
    }
});
app.directive('uploadImage7', function () {
    return{
        link  : function (scope,elem) {
            elem.on("change", function(){
                var file = this.files[0];
                if(!/image\/\w+/.test(file.type)){
                    alert("文件必须为图片！");
                    return false;
                }
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function(e){
                    //result.innerHTML = '<img src="'+this.result+'" alt=""/>'
                    elem.parent().css({
                        'backgroundImage' : 'url('+ this.result +')',
                        'backgroundSize' : '100%'
                    });
                    scope.picArr.push(parseInt(elem.prev().text()));
                    elem.parent().next().show();
                    scope.mustChoose.push(parseInt(elem.prev().text()));
                    scope.$apply();
                };
                scope.sendObj.append('file7',file);
            });
        }
    }
});
app.directive('uploadImage8', function () {
    return{
        link  : function (scope,elem) {
            elem.on("change", function(){
                var file = this.files[0];
                if(!/image\/\w+/.test(file.type)){
                    alert("文件必须为图片！");
                    return false;
                }
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function(e){
                    //result.innerHTML = '<img src="'+this.result+'" alt=""/>'
                    elem.parent().css({
                        'backgroundImage' : 'url('+ this.result +')',
                        'backgroundSize' : '100%'
                    });
                    scope.picArr.push(parseInt(elem.prev().text()));
                    elem.parent().next().show();
                    scope.mustChoose.push(parseInt(elem.prev().text()));
                    scope.$apply();
                };
                scope.sendObj.append('file8',file);
            });
        }
    }
});
app.directive('uploadImage9', function () {
    return{
        link  : function (scope,elem) {
            elem.on("change", function(){
                var file = this.files[0];
                if(!/image\/\w+/.test(file.type)){
                    alert("文件必须为图片！");
                    return false;
                }
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function(e){
                    //result.innerHTML = '<img src="'+this.result+'" alt=""/>'
                    elem.parent().css({
                        'backgroundImage' : 'url('+ this.result +')',
                        'backgroundSize' : '100%'
                    });
                    scope.picArr.push(parseInt(elem.prev().text()));
                    elem.parent().next().show();
                    scope.mustChoose.push(parseInt(elem.prev().text()));
                    scope.$apply();
                };
                scope.sendObj.append('file9',file);
            });
        }
    }
});
app.directive('canUser',function($timeout){
    return {
        link:function(scope,elem){
            $timeout(function(){
                if(elem.prop('checked')){
                    elem.parent().parent().parent().parent().find('button').removeAttr('disabled').css('background','#2abf9e');
                    elem.parent().parent().parent().parent().find('input:not(:checkbox)').removeAttr('disabled');
                }else{
                    elem.parent().parent().parent().parent().find('button').attr('disabled','disabled').css('background','#a6a6a6');
                    elem.parent().parent().parent().parent().find('input:not(:checkbox)').attr('disabled','disabled');
                }
            },0)
            elem.click(function(){
                if(elem.prop('checked')){
                    elem.parent().parent().parent().parent().find('button').removeAttr('disabled').css('background','#2abf9e');
                    elem.parent().parent().parent().parent().find('input:not(:checkbox)').removeAttr('disabled');
                }else{
                    elem.parent().parent().parent().parent().find('button').attr('disabled','disabled').css('background','#a6a6a6');
                    elem.parent().parent().parent().parent().find('input:not(:checkbox)').attr('disabled','disabled');
                }
            })
        }
    }
});
app.controller('page14C',function($rootScope,$scope,$location,$anchorScroll,$http){
    $rootScope.getAllFalse();
    $rootScope.activeFourteen=true;
    $rootScope.navPartThree=true;
    $rootScope.isScreenPage=false;
    //锚点的跳转 回到导航标题处
    $scope.getNav=function(){
        $location.hash('nav-bottom14');
        $anchorScroll();
    };
    //筛选数组
    $scope.selected=[1];
    $scope.chooseedEquip=0;
    $scope.chooseNumber=0;
    $scope.unChooseNumber=100;
    var updateSelected = function(action,id,count){
        if(action == 'add' && $scope.selected.indexOf(id) == -1){
            $scope.selected.push(id);
            $scope.chooseedEquip+=count;
        }
        if(action == 'remove' && $scope.selected.indexOf(id)!=-1){
            var idx = $scope.selected.indexOf(id);
            $scope.selected.splice(idx,1);
            $scope.chooseedEquip-=count;
        }
    };
    $scope.checkOne=function($event,id,count){
        var action=($event.target.checked?'add':'remove');
        updateSelected(action,id,count);
        $scope.chooseNumber=$scope.chooseedEquip/$rootScope.equipCounts*100;
        $scope.unChooseNumber=100-$scope.chooseNumber;
        $('.all-equip-line-block').css({'width':$scope.chooseNumber+'%','transition':'1s'});
        $('.none-equip-line-block').css({'width':$scope.unChooseNumber+'%','transition':'1s'});
        $http.get($rootScope.link+'/operate/getWechatsByGroup?groupIds='+JSON.stringify($scope.selected)+'&pageNo=1&pageSize=5').success(function(data){
            $scope.WxList=data.data.content;
            $('#pages14').Page({
                totalPages: data.data.totalPages,//分页总数
                liNums: 5,//分页的数字按钮数(建议取奇数)
                activeClass: 'activP', //active 类样式定义
                callBack : function(page){
                    $http.get($rootScope.link+'/operate/getWechatsByGroup?groupIds='+JSON.stringify($scope.selected)+'&pageNo='+page+'&pageSize=5').success(function(data){
                        $scope.WxList=data.data.content;
                    })
                }
            });
        });
    };
    $scope.isChecked=function(id){
        return $scope.selected.indexOf(id)>=0;
    };
    $http.get($rootScope.link+'/operate/getWechatsByGroup?groupIds='+JSON.stringify($scope.selected)+'&pageNo=1&pageSize=5').success(function(data){
        $scope.WxList=data.data.content;
        $('#pages14').Page({
            totalPages: data.data.totalPages,//分页总数
            liNums: 5,//分页的数字按钮数(建议取奇数)
            activeClass: 'activP', //active 类样式定义
            callBack : function(page){
                $http.get($rootScope.link+'/operate/getWechatsByGroup?groupIds='+JSON.stringify($scope.selected)+'&pageNo='+page+'&pageSize=5').success(function(data){
                    $scope.WxList=data.data.content;
                })
            }
        });
    });
    //算法配置
    $scope.mapRange='2000米';
    $scope.mapLocation='';
    $scope.sendAll=function(){
        for(var i= 0,arr=[];i<$('.new-wx-equip-input14').length;i++){
            if($('.new-wx-equip-input14').eq(i).prop('checked')){
                arr.push($('.new-wx-equip-input14').eq(i).parent().next().attr('title'));
            }
        }
        if(arr.length==0){
            alert('请勾选设备！');
        }else if($scope.mapLocation==''){
            alert('请填写需要定位的地址！');
        }else{
            var sendObj=new FormData();
            sendObj.append('devices',JSON.stringify(arr));
            sendObj.append('range',parseInt($scope.mapRange));
            sendObj.append('longitude', $scope.mapPointLng);
            sendObj.append('latitude',$scope.mapPointLat);
            $http({
                method:'POST',
                url:$rootScope.link+"/operate/crossPosition",
                data: sendObj,
                headers: {'Content-Type':undefined},
                transformRequest: angular.identity
            }).success( function ( response ) {
                //上传成功的操作
                if(response.code==200){
                    alert('任务添加成功!');
                    $location.hash('page-top14');
                    $anchorScroll();
                    $http.get($rootScope.link+'/task/getGroupTaskInit?status=-1').success(function(data){
                        if(data.code==200){
                            $rootScope.taskList=data.data;
                            $rootScope.taskAll=true;
                            $rootScope.taskDoing=false;
                            $rootScope.taskWait=false;
                            $rootScope.taskDown=false;
                            $rootScope.newBell=true;
                        }
                    });
                }else{
                    alert('添加任务失败！请重试！');
                }
            });
        }
    };

    function G(id) {
        return document.getElementById(id);
    }
    var map = new BMap.Map("page14-map");
    map.centerAndZoom("北京",12);                   // 初始化地图,设置城市和地图级别。
    map.enableScrollWheelZoom(true); //为了王哥
    map.addEventListener('click',function(e){
        //var myIcon=new BMap.Icon("images/map-logo.png", new BMap.Size(23,33));
        //var marker = new BMap.Marker(new BMap.Point(e.point.lng,e.point.lat ),{icon:myIcon})
        //map.addOverlay(marker);
        $.ajax({
            type:'GET',
            url:'http://api.map.baidu.com/geocoder/v2/?ak=HbUVYMUg6PwbOnXkztdgSQlQ&callback=renderReverse&location='+e.point.lat+','+e.point.lng+'&output=json&pois=1',
            dataType:'JSONP',
            success:function(data1){
                $scope.mapLocation=data1.result.formatted_address;
                $scope.$apply();
            }
        });
    });
    var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
        {"input" : "suggestId"
            ,"location" : map
        });

    ac.addEventListener("onhighlight", function(e) {  //鼠标放在下拉列表上的事件
        var str = "";
        var _value = e.fromitem.value;
        var value = "";
        if (e.fromitem.index > -1) {
            value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
        }
        str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;

        value = "";
        if (e.toitem.index > -1) {
            _value = e.toitem.value;
            value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
        }
        str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
        G("searchResultPanel").innerHTML = str;
    });

    var myValue;
    ac.addEventListener("onconfirm", function(e) {    //鼠标点击下拉列表后的事件
        var _value = e.item.value;
        myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
        G("searchResultPanel").innerHTML ="onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;

        setPlace();
    });

    function setPlace(){
        map.clearOverlays();    //清除地图上所有覆盖物
        function myFun(){
            var pp = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
            map.centerAndZoom(pp, 18);
            map.addOverlay(new BMap.Marker(pp));    //添加标注
            $scope.mapPointLng=pp.lng;
            $scope.mapPointLat=pp.lat;
        }
        var local = new BMap.LocalSearch(map, { //智能搜索
            onSearchComplete: myFun
        });
        local.search(myValue);
    }
});
app.directive('radioCheckedFt',function(){
    return {
        link:function(scope,elem){
            elem.click(function(){
                if(elem.prop('checked')) {
                    elem.parents('.page14-floor-one-list').find('span').removeClass('on');
                    elem.parent().addClass('on');
                }
            });
        }
    }
});
app.controller('page15C',function($rootScope,$scope,$location,$anchorScroll,$http,$timeout){
    $rootScope.getAllFalse();
    $rootScope.activeFifteen=true;
    $rootScope.navPartThree=true;
    $rootScope.isScreenPage=false;
    //锚点的跳转 回到导航标题处
    $scope.getNav=function(){
        $location.hash('nav-bottom15');
        $anchorScroll();
    };
    //筛选数组
    $scope.selected=[1];
    var updateSelected = function(action,id){
        if(action == 'add' && $scope.selected.indexOf(id) == -1){
            $scope.selected.push(id);
        }
        if(action == 'remove' && $scope.selected.indexOf(id)!=-1){
            var idx = $scope.selected.indexOf(id);
            $scope.selected.splice(idx,1);
        }
    };
    $scope.checkOne=function($event,id,count){
        var action=($event.target.checked?'add':'remove');
        updateSelected(action,id,count);
        $http.get($rootScope.link+'/operate/getZombieFan?groupIds='+JSON.stringify($scope.selected)).success(function(data){
            if(data.code==200){
                $scope.zombieList=data.data;
            }
        });
    };
    $scope.isChecked=function(id){
        return $scope.selected.indexOf(id)>=0;
    };
    $timeout(function(){
        $http.get($rootScope.link+'/operate/getZombieFan?devices='+JSON.stringify($rootScope.moArray)).success(function(data){;
            if(data.code==200){
                $rootScope.zombieList=data.data;
            }
        });
    },0);


    //配置策略
    $scope.timeInterval=5;
    $scope.saySomething='';

    $scope.sendAll=function(){
        for(var i= 0,arr=[];i<$('.new-wx-equip-input15').length;i++){
            if($('.new-wx-equip-input15').eq(i).prop('checked')){
                arr.push($('.new-wx-equip-input15').eq(i).parent().next().attr('title'));
            }
        }
        if($scope.timeInterval==''){
            alert('请填写时间间隔！');
        }else if($scope.saySomething==''){
            alert('请填写想对僵尸粉说的话！')
        }else if(arr.length==0){
            alert('请勾选需要操作的设备！');
        }else{
            var sendObj=new FormData();
            sendObj.append('content',$scope.saySomething);
            sendObj.append('devices',JSON.stringify(arr));
            sendObj.append('interval', $scope.timeInterval);
            $http({
                method:'POST',
                url:$rootScope.link+"/operate/clearZombieFan",
                data: sendObj,
                headers: {'Content-Type':undefined},
                transformRequest: angular.identity
            }).success( function ( response ) {
                //上传成功的操作
                if(response.code==200){
                    alert('任务添加成功!');
                    $location.hash('page-top15');
                    $anchorScroll();
                    $http.get($rootScope.link+'/task/getGroupTaskInit?status=-1').success(function(data){
                        if(data.code==200){
                            $rootScope.taskList=data.data;
                            $rootScope.taskAll=true;
                            $rootScope.taskDoing=false;
                            $rootScope.taskWait=false;
                            $rootScope.taskDown=false;
                            $rootScope.newBell=true;
                        }
                    });
                }
            });
        }
    };

});
app.directive('groupCheckAllFif',function($rootScope,$http){
    return {
        link : function(scope,elem){
            elem.click(function(){
                if(elem.prop('checked')){
                    elem.parent().addClass('on');
                    elem.parent().parent().next().find('p').addClass('on').find('input').prop('checked',function(){return true});
                }else{
                    elem.parent().removeClass('on');
                    elem.parent().parent().next().find('p').removeClass('on').find('input').prop('checked',function(){return false});
                }
                scope.fuckArr=[];
                for(var i= 0;i<$('.new-wx-equip-input15').length;i++){
                    if($('.new-wx-equip-input15').eq(i).prop('checked')){
                        scope.fuckArr.push($('.new-wx-equip-input15').eq(i).parent().next().attr('title'));
                    }
                }
                $http.get($rootScope.link+'/operate/getZombieFan?devices='+JSON.stringify(scope.fuckArr)).success(function(data){;
                    if(data.code==200){
                        $rootScope.zombieList=data.data;
                    }
                });
            });
        }
    }
});
app.directive('groupCheckOneFif',function($rootScope,$http){
    return {
        link:function(scope,elem){
            elem.click(function(){
                if(elem.prop('checked')){
                    elem.parent().addClass('on');
                }else{
                    elem.parent().removeClass('on');
                }
                var eNumber=elem.parent().parent().parent().parent().find('input');
                var flag=true;
                for(var i= 0;i<eNumber.length;i++){
                    if(eNumber.eq(i).prop('checked')==false){
                        flag=false;
                    }
                }
                if(flag){
                    elem.parent().parent().parent().parent().prev().find('p').addClass('on').find('input').prop('checked',function(){return true});
                }else{
                    elem.parent().parent().parent().parent().prev().find('p').removeClass('on').find('input').prop('checked',function(){return false});
                }
                scope.fuckArr=[];
                for(var i= 0;i<$('.new-wx-equip-input15').length;i++){
                    if($('.new-wx-equip-input15').eq(i).prop('checked')){
                        scope.fuckArr.push($('.new-wx-equip-input15').eq(i).parent().next().attr('title'));
                    }
                }
                $http.get($rootScope.link+'/operate/getZombieFan?devices='+JSON.stringify(scope.fuckArr)).success(function(data){;
                    if(data.code==200){
                        $rootScope.zombieList=data.data;
                    }
                });
            });
        }
    }
});
app.controller('page16C',function($rootScope,$scope,$location,$anchorScroll,$http){
    $rootScope.getAllFalse();
    $rootScope.activeSixteen=true;
    $rootScope.navPartThree=true;
    $rootScope.isScreenPage=false;
    //锚点的跳转 回到导航标题处
    $scope.getNav=function(){
        $location.hash('nav-bottom13');
        $anchorScroll();
    };
    $scope.sendObj=new FormData();
    $scope.picArr=[];
    //配置
    $scope.saySomething='';
    $scope.timeInterval=5;
    $scope.sendAll=function(){
        for(var i= 0,arr=[];i<$('.new-wx-equip-input16').length;i++){
            if($('.new-wx-equip-input16').eq(i).prop('checked')){
                arr.push($('.new-wx-equip-input16').eq(i).parent().next().attr('title'));
            }
        }
        if($scope.timeInterval==''){
            alert('请填写时间间隔！');
        }else if($scope.saySomething==''){
            alert('请填写群发的消息！');
        }else if(arr.length==0){
            alert('请勾选需要操作的群组！');
        }else{
            var sendObj=new FormData();
            sendObj.append('content',$scope.saySomething);
            sendObj.append('interval',$scope.timeInterval);
            sendObj.append('devices',JSON.stringify(arr));
            $http({
                method:'POST',
                url:$rootScope.link+"/operate/sendMsg",
                data: sendObj,
                headers: {'Content-Type':undefined},
                transformRequest: angular.identity
            }).success( function ( response ) {
                //上传成功的操作
                if(response.code==200){
                    alert('任务添加成功!');
                    $location.hash('page-top16');
                    $anchorScroll();
                    $http.get($rootScope.link+'/task/getGroupTaskInit?status=-1').success(function(data){
                        if(data.code==200){
                            $rootScope.taskList=data.data;
                            $rootScope.taskAll=true;
                            $rootScope.taskDoing=false;
                            $rootScope.taskWait=false;
                            $rootScope.taskDown=false;
                            $rootScope.newBell=true;
                        }
                    });
                }
            });
        }
    };

});
app.directive('radioCheckedSixteen',function(){
    return {
        link:function(scope,elem){
            elem.click(function(){
                if(elem.prop('checked')) {
                    elem.parents('.page16-third-li').find('div').removeClass('on');
                    elem.parent().addClass('on');
                }
            });
        }
    }
});
app.controller('page17C',function($rootScope,$scope,$http,$timeout){
    $rootScope.getAllFalse();
    $rootScope.activeSeventeen=true;
    $rootScope.navPartOne=true;
    $rootScope.isScreenPage=false;
    $timeout(function(){
        $http.get($rootScope.link+'/device/getDeviceByDevice/?devices='+JSON.stringify($rootScope.moArray)+'&pageNo=1&pageSize=17').success(function(data){
            if(data.code==200){
                $rootScope.fuckList=data.data.content;
                $('#pages17').Page({
                    totalPages: data.data.totalPages,//分页总数
                    liNums: 5,//分页的数字按钮数(建议取奇数)
                    activeClass: 'activP', //active 类样式定义
                    callBack : function(page){
                        $http.get($rootScope.link+'/device/getDeviceByDevice/?devices='+JSON.stringify(mArr)+'&pageNo='+page+'&pageSize=17').success(function(data){
                            $rootScope.fuckList=data.data.content;
                        })
                    }
                });
            }
        });
    },0)
    //页面点击顺序
    $scope.editBoxOne=false;
    $scope.editBoxTwo=false;
    $scope.editBoxThree=false;
    //添加新群组
    $scope.addNewGroup=function(){
        $scope.editBoxThree=true;
        $scope.newGroupName='';
    };
    $scope.cancelAddNewGroup=function(){
        $scope.editBoxThree=false;
    };
    $scope.sureAddNewGroup=function(){
        var flag=false;
        for(var x=0;x<$rootScope.AssGroupNames.length;x++){
            if($scope.newGroupName==$rootScope.AssGroupNames[x]){
                flag=true;
            }
        }
        if(flag){
            alert('对不起，您所输入的群组名已经存在！请重新输入');
            $scope.newGroupName='';
        }else{
            if($scope.newGroupName==''){
                alert('新的群组名称不能为空！');
            }else{
                $http.get($rootScope.link+'/group/createGroup?groupName='+$scope.newGroupName).success(function(data){
                    if(data.code==200){
                        alert('创建成功!');
                        $scope.editBoxThree=false;
                        $http.get($rootScope.link+'/group/getGroupData').success(function(data){
                            if(data.code==200){
                                $rootScope.groupNames=data.data;
                                $scope.allGroupNames=data.data;
                                $rootScope.AssGroupNames=[];
                                $rootScope.allEquipIds=[];
                                $rootScope.equipCounts=0;
                                for(var j=0;j<data.data.length;j++){
                                    $rootScope.AssGroupNames.push(data.data[j].group.name);
                                    $rootScope.allEquipIds.push(data.data[j].group.id);
                                    $rootScope.equipCounts+=data.data[j].count;
                                }
                            }
                        });
                        $http.get($rootScope.link+'/group/getGroupDataByStatus').success(function(data){
                            if(data.code==200){
                                $rootScope.onlineGroupNames=data.data;
                                //保存默认加载的设备号
                                $rootScope.moArray=[];
                                for(var a=0;a<data.data[0].deviceVos.length;a++){
                                    $rootScope.moArray.push(data.data[0].deviceVos[a].device);
                                }
                                $http.get($rootScope.link+'/device/getDeviceByDevice/?devices='+JSON.stringify($rootScope.moArray)+'&pageNo=1&pageSize=17').success(function(data){
                                    if(data.code==200){
                                        $rootScope.fuckList=data.data.content;
                                        $('#pages17').Page({
                                            totalPages: data.data.totalPages,//分页总数
                                            liNums: 5,//分页的数字按钮数(建议取奇数)
                                            activeClass: 'activP', //active 类样式定义
                                            callBack : function(page){
                                                $http.get($rootScope.link+'/device/getDeviceByDevice/?devices='+JSON.stringify(mArr)+'&pageNo='+page+'&pageSize=17').success(function(data){
                                                    $rootScope.fuckList=data.data.content;
                                                })
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }else{
                        alert('创建失败请重试');
                        $scope.editBoxThree=false;
                    }
                });
            }
        }
    };
    //删除分组
    $scope.deleteable=function(id){
        return id==1?true:false;
    };
    $scope.deleteButton=function(){
        $scope.editBoxTwo=true;
        $scope.selected=[];
        var updateSelected = function(action,id){
            if(action == 'add' && $scope.selected.indexOf(id) == -1){
                $scope.selected.push(id);
            }
            if(action == 'remove' && $scope.selected.indexOf(id)!=-1){
                var idx = $scope.selected.indexOf(id);
                $scope.selected.splice(idx,1);
            }
        };
        $scope.checkOne=function($event,id){
            var action=($event.target.checked?'add':'remove');
            updateSelected(action,id);
        };
        $scope.isChecked=function(id){
            return $scope.selected.indexOf(id)>=0;
        };
    };
    $scope.cancelDeleteButton=function(){
        $scope.editBoxTwo=false;
    };
    $scope.sureDeleteButton=function(){
        $http.get($rootScope.link+'/group/delGroup?groupIds='+JSON.stringify($scope.selected)).success(function(data){
            if(data.code==200){
                alert('删除成功！');
                $scope.editBoxTwo=false;
                $http.get($rootScope.link+'/group/getGroupData').success(function(data){
                    if(data.code==200){
                        $rootScope.groupNames=data.data;
                        $scope.allGroupNames=data.data;
                        $rootScope.AssGroupNames=[];
                        $rootScope.allEquipIds=[];
                        $rootScope.equipCounts=0;
                        for(var j=0;j<data.data.length;j++){
                            $rootScope.AssGroupNames.push(data.data[j].group.name);
                            $rootScope.allEquipIds.push(data.data[j].group.id);
                            $rootScope.equipCounts+=data.data[j].count;
                        }
                    }
                });
                $http.get($rootScope.link+'/group/getGroupDataByStatus').success(function(data){
                    if(data.code==200){
                        $rootScope.onlineGroupNames=data.data;
                        //保存默认加载的设备号
                        $rootScope.moArray=[];
                        for(var a=0;a<data.data[0].deviceVos.length;a++){
                            $rootScope.moArray.push(data.data[0].deviceVos[a].device);
                        }
                        $http.get($rootScope.link+'/device/getDeviceByDevice/?devices='+JSON.stringify($rootScope.moArray)+'&pageNo=1&pageSize=17').success(function(data){
                            if(data.code==200){
                                $rootScope.fuckList=data.data.content;
                                $('#pages17').Page({
                                    totalPages: data.data.totalPages,//分页总数
                                    liNums: 5,//分页的数字按钮数(建议取奇数)
                                    activeClass: 'activP', //active 类样式定义
                                    callBack : function(page){
                                        $http.get($rootScope.link+'/device/getDeviceByDevice/?devices='+JSON.stringify(mArr)+'&pageNo='+page+'&pageSize=17').success(function(data){
                                            $rootScope.fuckList=data.data.content;
                                        })
                                    }
                                });
                            }
                        });

                    }
                });
            }else{
                alert('删除失败！请重新再试！');
            }
        });
    };
    //修改分组名
    $scope.changeNameButton=function(id){
        $scope.editBoxOne=true;
        $scope.changeId=id;
        $scope.newGroupName='';
    };
    $scope.cancelChangeButton=function(){
        $scope.editBoxOne=false;
    };
    $scope.sureChangeButton=function(id){
        var flag=false;
        for(var x=0;x<$rootScope.AssGroupNames.length;x++){
            if($scope.changeGroupName==$rootScope.AssGroupNames[x]){
                flag=true;
            }
        }
        if(flag){
            alert('对不起，您所输入的群组名已经存在！请重新输入');
            $scope.changeGroupName='';
        }else{
            if($scope.changeGroupName==''){
                alert('请填写新的分组名！');
            }else{
                $http.get($rootScope.link+'/group/updateGroupName?groupId='+id+'&newName='+$scope.changeGroupName).success(function(data){
                    if(data.code==200){
                        alert('修改成功!');
                        $scope.editBoxOne=false;
                        $scope.changeGroupName='';
                        $http.get($rootScope.link+'/group/getGroupData').success(function(data){
                            if(data.code==200){
                                $rootScope.groupNames=data.data;
                                $scope.allGroupNames=data.data;
                                $rootScope.AssGroupNames=[];
                                $rootScope.allEquipIds=[];
                                $rootScope.equipCounts=0;
                                for(var j=0;j<data.data.length;j++){
                                    $rootScope.AssGroupNames.push(data.data[j].group.name);
                                    $rootScope.allEquipIds.push(data.data[j].group.id);
                                    $rootScope.equipCounts+=data.data[j].count;
                                }
                            }
                        });
                    }else{
                        alert('修改失败！请重试！');
                        $scope.editBoxOne=false;
                        $scope.changeGroupName=''
                    }
                });
            }
        }

    };

    $scope.isDisabled=function(id){
        if(id==1){
            return true;
        }
    };
    $scope.dColor=function(id){
        var a;
        if(id==1){
            a='binged';
        }else{
            a='binging';
        }
        return a;
    }
    //移动分组
    $scope.moveBox=false;
    $scope.assMoveTo=true;
    $scope.moveId=1;
    $scope.moveToId=function(id){
        $scope.moveId=id;
    };
    $scope.groupMoveTo=function(){
        $scope.moveGroup=[]
        for(var i= 0;i<$('.page17-floor-new-li input').length;i++){
            if($('.page17-floor-new-li input').eq(i).prop('checked')){
                $scope.moveGroup.push($('.page17-floor-new-li input').eq(i).attr('mess_id'));
            }
        }
        if($scope.moveGroup.length==0){
            alert('请勾选需要移动的设备!');
        }else{
            $scope.moveBox=true;
            $scope.moveId=1;
        }
    };
    $scope.cancelMoveTo=function(){
        $scope.moveBox=false;
    };
    $scope.sureMoveTo=function(){
        console.log($scope.moveId)
        $http.get($rootScope.link+'/group/moveGroup?groupId='+$scope.moveId+'&devices='+JSON.stringify($scope.moveGroup)).success(function(data){
            if(data.code==200){
                alert('移动成功！');
                $scope.moveBox=false;
                $http.get($rootScope.link+'/group/getGroupData').success(function(data){
                    if(data.code==200){
                        $rootScope.groupNames=data.data;
                        $scope.allGroupNames=data.data;
                        $rootScope.AssGroupNames=[];
                        $rootScope.allEquipIds=[];
                        $rootScope.equipCounts=0;
                        for(var j=0;j<data.data.length;j++){
                            $rootScope.AssGroupNames.push(data.data[j].group.name);
                            $rootScope.allEquipIds.push(data.data[j].group.id);
                            $rootScope.equipCounts+=data.data[j].count;
                        }
                    }
                });
                $http.get($rootScope.link+'/group/getGroupDataByStatus').success(function(data){
                    console.log(data);
                    if(data.code==200){
                        $rootScope.onlineGroupNames=data.data;
                        //保存默认加载的设备号
                        $rootScope.moArray=[];
                        for(var a=0;a<data.data[0].deviceVos.length;a++){
                            $rootScope.moArray.push(data.data[0].deviceVos[a].device);
                        }
                        $http.get($rootScope.link+'/device/getDeviceByDevice/?devices='+JSON.stringify($rootScope.moArray)+'&pageNo=1&pageSize=17').success(function(data){
                            if(data.code==200){
                                $rootScope.fuckList=data.data.content;
                                $('#pages17').Page({
                                    totalPages: data.data.totalPages,//分页总数
                                    liNums: 5,//分页的数字按钮数(建议取奇数)
                                    activeClass: 'activP', //active 类样式定义
                                    callBack : function(page){
                                        $http.get($rootScope.link+'/device/getDeviceByDevice/?devices='+JSON.stringify(mArr)+'&pageNo='+page+'&pageSize=17').success(function(data){
                                            $rootScope.fuckList=data.data.content;
                                        })
                                    }
                                });
                            }
                        });
                    }
                });


                $('.page17-all-checked').hide();
            }else{
                alert('移动失败！请重试！');
            }
        });
    };
    $scope.moChecked=function(id){
        return id==1?true:false;
    };
});
app.directive('newListShow',function(){
    return {
         link: function(scope,elem){
             elem.click(function(){
                 elem.parent().next().toggle();
                 if(!elem.parent().next().is(":hidden")&&elem.parent().next().find('li').length>0){
                     elem.parent().find('p').show();
                 }else{
                     elem.parent().find('p').hide();
                 }
             });
         }
    }
});
app.directive('groupCheckAll',function(){
    return {
        link : function(scope,elem){
            elem.click(function(){
                if(elem.prop('checked')){
                    elem.parent().addClass('on');
                    elem.parent().parent().next().find('p').addClass('on').find('input').prop('checked',function(){return true});
                }else{
                    elem.parent().removeClass('on');
                    elem.parent().parent().next().find('p').removeClass('on').find('input').prop('checked',function(){return false});
                }
            });
        }
    }
});
app.directive('groupCheckOne',function(){
    return {
        link:function(scope,elem){
            elem.click(function(){
                if(elem.prop('checked')){
                    elem.parent().addClass('on');
                }else{
                    elem.parent().removeClass('on');
                }
                var eNumber=elem.parent().parent().parent().parent().find('input');
                var flag=true;
                for(var i= 0;i<eNumber.length;i++){
                    if(eNumber.eq(i).prop('checked')==false){
                       flag=false;
                    }
                }
                if(flag){
                    elem.parent().parent().parent().parent().prev().find('p').addClass('on').find('input').prop('checked',function(){return true});
                }else{
                    elem.parent().parent().parent().parent().prev().find('p').removeClass('on').find('input').prop('checked',function(){return false});
                }
            });
        }
    }
});
app.directive('groupCheckAllSeventeen',function($rootScope,$http){
    return {
        link : function(scope,elem){
            elem.click(function(){
                if(elem.prop('checked')){
                    elem.parent().addClass('on');
                    elem.parent().parent().next().find('p').addClass('on').find('input').prop('checked',function(){return true});
                }else{
                    elem.parent().removeClass('on');
                    elem.parent().parent().next().find('p').removeClass('on').find('input').prop('checked',function(){return false});
                }
                scope.fuckArr=[];
                for(var i= 0;i<$('.page17-wx-input').length;i++){
                    if($('.page17-wx-input').eq(i).prop('checked')){
                        scope.fuckArr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
                    }
                }
                $http.get($rootScope.link+'/device/getDeviceByDevice/?devices='+JSON.stringify(scope.fuckArr)+'&pageNo=1&pageSize=17').success(function(data){
                    $rootScope.fuckList=data.data.content;
                    $('#pages17').Page({
                        totalPages: data.data.totalPages,//分页总数
                        liNums: 5,//分页的数字按钮数(建议取奇数)
                        activeClass: 'activP', //active 类样式定义
                        callBack : function(page){
                            $http.get($rootScope.link+'/device/getDeviceByDevice/?devices='+JSON.stringify(scope.fuckArr)+'&pageNo='+page+'&pageSize=17').success(function(data){
                                $rootScope.fuckList=data.data.content;
                            })
                        }
                    });
                });
            });
        }
    }
});
app.directive('groupCheckOneSeventeen',function($rootScope,$http){
    return {
        link:function(scope,elem){
            elem.click(function(){
                if(elem.prop('checked')){
                    elem.parent().addClass('on');
                }else{
                    elem.parent().removeClass('on');
                }
                var eNumber=elem.parent().parent().parent().parent().find('input');
                var flag=true;
                for(var i= 0;i<eNumber.length;i++){
                    if(eNumber.eq(i).prop('checked')==false){
                        flag=false;
                    }
                }
                if(flag){
                    elem.parent().parent().parent().parent().prev().find('p').addClass('on').find('input').prop('checked',function(){return true});
                }else{
                    elem.parent().parent().parent().parent().prev().find('p').removeClass('on').find('input').prop('checked',function(){return false});
                }
                scope.fuckArr=[];
                for(var i= 0;i<$('.page17-wx-input').length;i++){
                    if($('.page17-wx-input').eq(i).prop('checked')){
                        scope.fuckArr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
                    }
                }
                $http.get($rootScope.link+'/device/getDeviceByDevice/?devices='+JSON.stringify(scope.fuckArr)+'&pageNo=1&pageSize=17').success(function(data){
                    $rootScope.fuckList=data.data.content;
                    $('#pages17').Page({
                        totalPages: data.data.totalPages,//分页总数
                        liNums: 5,//分页的数字按钮数(建议取奇数)
                        activeClass: 'activP', //active 类样式定义
                        callBack : function(page){
                            $http.get($rootScope.link+'/device/getDeviceByDevice/?devices='+JSON.stringify(scope.fuckArr)+'&pageNo='+page+'&pageSize=17').success(function(data){
                                $rootScope.fuckList=data.data.content;
                            })
                        }
                    });
                });
            });
        }
    }
});
app.directive('mChecked',function($timeout){
    return {
        link:function(scope,elem){
            $timeout(function(){
                if(elem.attr("mess_id")==1&&elem.parent().parent().next().find('li').length>0){
                    elem.prop('checked',function(){return true});
                    elem.parent().addClass('on').show();
                    elem.parent().parent().next().show();
                    elem.parent().parent().next().find('p').addClass('on').find('input').prop('checked',function(){return true});
                }
            },0);
        }
    }
});
app.controller('page18C',function($rootScope,$scope,$http,$timeout){
    $rootScope.getAllFalse();
    $rootScope.activeEightteen=true;
    $rootScope.navPartOne=true;
    $rootScope.isScreenPage=true;
    $('.canvas-ul').empty();

    $scope.openAll=function(n){
        for(var i= 0,arr=[];i<$('.canvas-ul li input').length;i++){
            if($('.canvas-ul li input').eq(i).prop('checked')){
                arr.push($('.canvas-ul li input').eq(i).attr('mess_id'));
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
                url:$rootScope.link+"/device/open",
                data: sendObj,
                headers: {'Content-Type':undefined},
                transformRequest: angular.identity
            }).success( function ( data ) {
                if(data.code==200){
                    alert('添加任务栏成功！');
                }
            });
        }
    };
    $scope.closeAll=function(n){
        for(var i= 0,arr=[];i<$('.canvas-ul li input').length;i++){
            if($('.canvas-ul li input').eq(i).prop('checked')){
                arr.push($('.canvas-ul li input').eq(i).attr('mess_id'));
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
                url:$rootScope.link+"/device/close",
                data: sendObj,
                headers: {'Content-Type':undefined},
                transformRequest: angular.identity
            }).success( function ( data ) {
                if(data.code==200){
                    alert('添加任务栏成功！');
                }
            });
        }
    };
    $scope.backHome=function(){
        for(var i= 0,arr=[];i<$('.canvas-ul li input').length;i++){
            if($('.canvas-ul li input').eq(i).prop('checked')){
                arr.push($('.canvas-ul li input').eq(i).attr('mess_id'));
            }
        }
        if(arr.length==0){
            alert('请勾选需要操作的设备！');
        }else{
            $http.get($rootScope.link+'/device/backHome?devices='+JSON.stringify(arr)).success(function(data){
                if(data.code==200){
                    alert('添加任务成功！');
                }
            });
        }
    };
    //屏幕的监听
    //var screenWatcher=function(id,url,device,tp){
    //    var BLANK_IMG =
    //        'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
    //
    //    var canvas = document.getElementById(id), g = canvas.getContext('2d');
    //    canvas.addEventListener('click', function(e){
    //        var x, y;
    //        if (e.layerX || e.layerX == 0) {
    //            x = e.layerX;
    //            y = e.layerY;
    //        } else if (e.offsetX || e.offsetX == 0) { // Opera
    //            x = e.offsetX;
    //            y = e.offsetY;
    //        }
    //        $http.get($rootScope.link+'/device/touchDeviceScreen?device='+device+'&touchPort='+tp+'&x='+parseInt(x*(540/228))+'&y='+parseInt(y*2.4)).success(function(data){});
    //    }, false);
    //    var ws = new WebSocket('ws://'+url, 'minicap');
    //    ws.binaryType = 'blob';
    //
    //    ws.onclose = function() {
    //        console.log('onclose', arguments)
    //    };
    //
    //    ws.onerror = function() {
    //        console.log('onerror', arguments)
    //    };
    //
    //    ws.onmessage = function(message) {
    //        var blob = new Blob([message.data], {type: 'image/jpeg'});
    //        var URL = window.URL || window.webkitURL;
    //        var img = new Image();
    //        img.onload = function() {
    //            //console.log(img.width, img.height);
    //            canvas.width = img.width;
    //            canvas.height = img.height;
    //            g.drawImage(img, 0, 0);
    //            img.onload = null;
    //            img.src = BLANK_IMG;
    //            img = null;
    //            u = null;
    //            blob = null
    //            if(!$rootScope.isScreenPage){
    //                console.log(123);
    //                ws.close();
    //                $('.canvas-ul').empty();
    //            }
    //        };
    //        var u = URL.createObjectURL(blob);
    //        img.src = u
    //    };
    //    ws.onopen = function() {
    //        console.log('onopen', arguments);
    //        ws.send('1920x1080/0')
    //    }
    //};
    //$timeout(function(){
    //    $http.get($rootScope.link+'/device/showDeviceScreen?groupIds='+JSON.stringify($scope.selected)+'&pageNo=1&pageSize=10').success(function(data){
    //        $('.canvas-ul').empty();
    //        for(var i=0;i< data.data.content.length;i++){
    //            var cLi='<li class="canvas-li"><canvas id="canvas'+i+'"></canvas></li>';
    //            $('.canvas-ul').append(cLi);
    //            var assDevice=data.data.content[i].device;
    //            var touchPort=data.data.content[i].touchPort;
    //            var assId='canvas'+i;
    //            var assPort=data.data.content[i].ip+':'+data.data.content[i].outputPort;
    //            screenWatcher(assId,assPort,assDevice,touchPort);
    //        }
    //        var ww=$('.page18-floor-one').width();
    //        var am;
    //        if(ww<1160 && ww>=924){
    //            am=(ww-924)/8;
    //        }else if(ww < 924 && ww >= 736){
    //            am=(ww-736)/6;
    //        }else if(ww==1160){
    //            am=0
    //        }
    //        $('.page18-floor-one').find('.canvas-li').css('margin','0 '+am+'px 5px');
    //        //$('#pages18').Page({
    //        //    totalPages: data.data.totalPages,//分页总数
    //        //    liNums: 5,//分页的数字按钮数(建议取奇数)
    //        //    activeClass: 'activP', //active 类样式定义
    //        //    callBack : function(page){
    //        //        $('.canvas-ul').empty();
    //        //        $http.get($rootScope.link+'/device/showDeviceScreen?groupIds='+JSON.stringify($scope.selected)+'&pageNo='+page+'&pageSize=10').success(function(data){
    //        //            for(var i=0;i< data.data.content.length;i++){
    //        //                var cLi='<li class="canvas-li"><canvas id="canvas'+i+'"></canvas></li>';
    //        //                $('.canvas-ul').append(cLi);
    //        //                var assDevice=data.data.content[i].device;
    //        //                var touchPort=data.data.content[i].touchPort;
    //        //                var assId='canvas'+i;
    //        //                var assPort=data.data.content[i].ip+':'+data.data.content[i].outputPort;
    //        //                screenWatcher(assId,assPort,assDevice,touchPort);
    //        //            }
    //        //            var ww=$('.page18-floor-one').width();
    //        //            var am;
    //        //            if(ww<1160 && ww>=924){
    //        //                am=(ww-924)/8;
    //        //            }else if(ww < 924 && ww >= 736){
    //        //                am=(ww-736)/6;
    //        //            }else if(ww==1160){
    //        //                am=0
    //        //            }
    //        //            $('.page18-floor-one').find('.canvas-li').css('margin','0 '+am+'px 5px');
    //        //        })
    //        //    }
    //        //});
    //    });
    //},0);
    //$timeout(function(){
    //    if(sessionStorage.getItem('devices')){
    //        var devicesArr=sessionStorage.getItem('devices').split(',');
    //        for(var i=0;i<$('.new-wx-group-list-li ul li').length;i++){
    //            for(var a=0 ;a<devicesArr.length;a++){
    //                if($('.new-wx-group-list-li ul li').eq(i).find('h2').attr('title')==devicesArr[a]){
    //                    $('.new-wx-group-list-li ul li').eq(i).find('p').addClass('on').find('input').prop('checked',function(){return true});
    //                }
    //            }
    //        };
    //        var screenWatcher=function(id,url,device,tp,w,h){
    //
    //            var BLANK_IMG =
    //                'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
    //
    //            var canvas = document.getElementById(id), g = canvas.getContext('2d');
    //            var xs,ys,xe,ye;
    //            var checkedArr=[];
    //            canvas.addEventListener('mousedown',function(e){
    //                var x, y;
    //                if (e.layerX || e.layerX == 0) {
    //                    xs = e.layerX;
    //                    ys = e.layerY;
    //                } else if (e.offsetX || e.offsetX == 0) { // Opera
    //                    xs = e.offsetX;
    //                    ys = e.offsetY;
    //                }
    //                for(var e=0;e<$('.canvas-ul li input').length;e++){
    //                    if($('.canvas-ul li input').eq(e).prop('checked')){
    //                        checkedArr.push($('.canvas-ul li input').eq(e).attr('mess_id'));
    //                    }
    //                }
    //                checkedArr.push(device);
    //            },false);
    //            canvas.addEventListener('mouseup',function(e){
    //                if (e.layerX || e.layerX == 0) {
    //                    xe = e.layerX;
    //                    ye = e.layerY;
    //                } else if (e.offsetX || e.offsetX == 0) { // Opera
    //                    xe = e.offsetX;
    //                    ye = e.offsetY;
    //                }
    //                if(Math.abs(xe-xs)<10&&Math.abs(ye-ys)<10){
    //                    $http.get($rootScope.link+'/device/touchDeviceScreen?devices='+JSON.stringify(checkedArr)+'&touchPort='+tp+'&x='+parseInt(xs*(w/228))+'&y='+parseInt(ys*(h/400))).success(function(data){});
    //                }else{
    //                    $http.get($rootScope.link+'/device/slideDeviceScreen?devices='+JSON.stringify(checkedArr)+'&touchPort='+tp+'&xs='+parseInt(xs*(w/228))+'&ys='+parseInt(ys*(h/400))+'&xe='+parseInt(xe*(w/228))+'&ye='+parseInt(ye*(h/400))).success(function(){});
    //                }
    //            },false);
    //            var ws = new WebSocket('ws://'+url);
    //            $rootScope.socketArr.push(ws);
    //            ws.binaryType = 'blob';
    //
    //            ws.onclose = function() {
    //                console.log('onclose', arguments)
    //            };
    //
    //            ws.onerror = function() {
    //                console.log('onerror', arguments)
    //            };
    //
    //            ws.onmessage = function(message) {
    //                var blob = new Blob([message.data], {type: 'image/jpeg'});
    //                var URL = window.URL || window.webkitURL;
    //                var img = new Image();
    //                img.onload = function() {
    //                    //console.log(img.width, img.height);
    //                    canvas.width = img.width;
    //                    canvas.height = img.height;
    //                    g.drawImage(img, 0, 0);
    //                    img.onload = null;
    //                    img.src = BLANK_IMG;
    //                    img = null;
    //                    u = null;
    //                    blob = null;
    //                    if(!$rootScope.isScreenPage){
    //                        ws.close();
    //                        $('.canvas-ul').empty();
    //                    }
    //                };
    //                var u = URL.createObjectURL(blob);
    //                img.src = u
    //            };
    //            ws.onopen = function() {
    //                console.log('onopen', arguments);
    //                ws.send('1920x1080/0');
    //            }
    //        };
    //        if(devicesArr.length!=0){
    //            $('.page18-empty').hide();
    //            $http.get($rootScope.link+'/device/showDeviceScreen?devices='+JSON.stringify(devicesArr)+'&pageNo=1&pageSize=10').success(function(data){
    //                $('.canvas-ul').empty();
    //                for(var i=0;i< data.data.content.length;i++){
    //                    var cLi='<li class="canvas-li"><h2>'+data.data.content[i].rank+'</h2><h5></h5><canvas id="canvas'+i+'"></canvas><div><span></span><h6></h6><p><input type="checkbox" mess_id="'+data.data.content[i].device+'"></p></div></li>';
    //                    $('.canvas-ul').append(cLi);
    //                    var assDevice=data.data.content[i].device;
    //                    var touchPort=data.data.content[i].touchStart;
    //                    var assId='canvas'+i;
    //                    var assPort=data.data.content[i].ip+':8080/wgcs/ws/'+data.data.content[i].inputStart+'/'+data.data.content[i].device;
    //                    var equipWidth=data.data.content[i].wmSize.split('x')[0];
    //                    var equipHeight=data.data.content[i].wmSize.split('x')[1];
    //                    screenWatcher(assId,assPort,assDevice,touchPort,equipWidth,equipHeight);
    //                }
    //                $('.canvas-ul li span').click(function(){
    //                    var checkedArr=[];
    //                    for(var e=0;e<$('.canvas-ul li input').length;e++){
    //                        if($('.canvas-ul li input').eq(e).prop('checked')){
    //                            checkedArr.push($('.canvas-ul li input').eq(e).attr('mess_id'));
    //                        }
    //                    }
    //                    var device=$(this).next().next().find('input').attr('mess_id');
    //                    checkedArr.push(device);
    //                    $http.get($rootScope.link+'/device/returnBack?devices='+JSON.stringify(checkedArr)).success(function(){});
    //                });
    //                $('.canvas-ul li h6').click(function(){
    //                    var checkedArr=[];
    //                    for(var e=0;e<$('.canvas-ul li input').length;e++){
    //                        if($('.canvas-ul li input').eq(e).prop('checked')){
    //                            checkedArr.push($('.canvas-ul li input').eq(e).attr('mess_id'));
    //                        }
    //                    }
    //                    var device=$(this).next().find('input').attr('mess_id');
    //                    checkedArr.push(device);
    //                    $http.get($rootScope.link+'/device/returnHome?devices='+JSON.stringify(checkedArr)).success(function(){});
    //                });
    //                $('.canvas-ul li h5').click(function(){
    //                    var device=$(this).next().next().find('input').attr('mess_id');
    //                    $http.get($rootScope.link+'/device/clear?device='+device).success(function(){});
    //                });
    //                $('.canvas-ul li input').click(function(){
    //                    if($(this).prop('checked')){
    //                        $(this).parent().addClass('on');
    //                        for(var p= 0,flag=true;p<$('.canvas-ul li input').length;p++){
    //                            if(!$('.canvas-ul li input').eq(p).prop('checked')){
    //                                flag=false;
    //                            }
    //                        }
    //                        if(!flag){
    //                            $('.page18-new-add h3 span').removeClass('on').find('input').prop('checked',function(){return false});
    //                        }else{
    //                            $('.page18-new-add h3 span').addClass('on').find('input').prop('checked',function(){return true});
    //                        }
    //                    }else{
    //                        $(this).parent().removeClass('on');
    //                        $('.page18-new-add h3 span').removeClass('on').find('input').prop('checked',function(){return false});
    //                    }
    //                });
    //                var ww=$('.page18-floor-one').width();
    //                var am;
    //                if(ww<1200 && ww>=960){
    //                    am=(ww-970)/8;
    //                }else if(ww < 960 && ww >= 720){
    //                    am=(ww-730)/6;
    //                }else if(ww>=1200){
    //                    am=(ww-1210)/10
    //                }
    //                $('.page18-floor-one').find('.canvas-li').css('margin','0 '+am+'px 5px');
    //                $('#pages18').Page({
    //                    totalPages: data.data.totalPages,//分页总数
    //                    liNums: 5,//分页的数字按钮数(建议取奇数)
    //                    activeClass: 'activP', //active 类样式定义
    //                    callBack : function(page){
    //                        $('.canvas-ul').empty();
    //                        $http.get($rootScope.link+'/device/showDeviceScreen?devices='+JSON.stringify(devicesArr)+'&pageNo='+page+'&pageSize=10').success(function(data){
    //                            for(var i=0;i< data.data.content.length;i++){
    //                                var cLi='<li class="canvas-li"><h2>'+data.data.content[i].rank+'</h2><h5></h5><canvas id="canvas'+i+'"></canvas><div><span></span><h6></h6><p><input type="checkbox" mess_id="'+data.data.content[i].device+'"></p></div></li>';
    //                                $('.canvas-ul').append(cLi);
    //                                var assDevice=data.data.content[i].device;
    //                                var touchPort=data.data.content[i].touchStart;
    //                                var assId='canvas'+i;
    //                                var assPort=data.data.content[i].ip+':8080/wgcs/ws/'+data.data.content[i].inputStart+'/'+data.data.content[i].device;
    //                                var equipWidth=data.data.content[i].wmSize.split('x')[0];
    //                                var equipHeight=data.data.content[i].wmSize.split('x')[1];
    //                                screenWatcher(assId,assPort,assDevice,touchPort,equipWidth,equipHeight);
    //                            }
    //                            $('.canvas-ul li span').click(function(){
    //                                var checkedArr=[];
    //                                for(var e=0;e<$('.canvas-ul li input').length;e++){
    //                                    if($('.canvas-ul li input').eq(e).prop('checked')){
    //                                        checkedArr.push($('.canvas-ul li input').eq(e).attr('mess_id'));
    //                                    }
    //                                }
    //                                var device=$(this).next().next().find('input').attr('mess_id');
    //                                checkedArr.push(device);
    //                                $http.get($rootScope.link+'/device/returnBack?devices='+JSON.stringify(checkedArr)).success(function(){});
    //                            });
    //                            $('.canvas-ul li h6').click(function(){
    //                                var checkedArr=[];
    //                                for(var e=0;e<$('.canvas-ul li input').length;e++){
    //                                    if($('.canvas-ul li input').eq(e).prop('checked')){
    //                                        checkedArr.push($('.canvas-ul li input').eq(e).attr('mess_id'));
    //                                    }
    //                                }
    //                                var device=$(this).next().find('input').attr('mess_id');
    //                                checkedArr.push(device);
    //                                $http.get($rootScope.link+'/device/returnHome?devices='+JSON.stringify(checkedArr)).success(function(){});
    //                            });
    //                            $('.canvas-ul li h5').click(function(){
    //                                var device=$(this).next().next().find('input').attr('mess_id');
    //                                $http.get($rootScope.link+'/device/clear?device='+device).success(function(){});
    //                            });
    //                            $('.canvas-ul li input').click(function(){
    //                                if($(this).prop('checked')){
    //                                    $(this).parent().addClass('on');
    //                                    for(var p= 0,flag=true;p<$('.canvas-ul li input').length;p++){
    //                                        if(!$('.canvas-ul li input').eq(p).prop('checked')){
    //                                            flag=false;
    //                                        }
    //                                    }
    //                                    if(!flag){
    //                                        $('.page18-new-add h3 span').removeClass('on').find('input').prop('checked',function(){return false});
    //                                    }else{
    //                                        $('.page18-new-add h3 span').addClass('on').find('input').prop('checked',function(){return true});
    //                                    }
    //                                }else{
    //                                    $(this).parent().removeClass('on');
    //                                    $('.page18-new-add h3 span').removeClass('on').find('input').prop('checked',function(){return false});
    //                                }
    //                            });
    //                            var ww=$('.page18-floor-one').width();
    //                            var am;
    //                            if(ww<1200 && ww>=960){
    //                                am=(ww-970)/8;
    //                            }else if(ww < 960 && ww >= 720){
    //                                am=(ww-730)/6;
    //                            }else if(ww>=1200){
    //                                am=(ww-1210)/10
    //                            }
    //                            $('.page18-floor-one').find('.canvas-li').css('margin','0 '+am+'px 5px');
    //                        })
    //                    }
    //                });
    //            });
    //        }
    //    }
    //},500);
});
app.directive('groupCheckAllEightteen',function($rootScope,$http) {
    return {
        link : function(scope,elem){
            elem.click(function(){
                if(elem.prop('checked')){
                    elem.parent().addClass('on');
                    elem.parent().parent().next().find('p').addClass('on').find('input').prop('checked',function(){return true});
                }else{
                    elem.parent().removeClass('on');
                    elem.parent().parent().next().find('p').removeClass('on').find('input').prop('checked',function(){return false});
                }
                scope.fuckArr=[];
                for(var i= 0;i<$('.new-wx-equip-input18').length;i++){
                    if($('.new-wx-equip-input18').eq(i).prop('checked')){
                        scope.fuckArr.push($('.new-wx-equip-input18').eq(i).parent().next().attr('title'));
                    }
                }
                $rootScope.socketArr=[];
                sessionStorage.setItem('devices',scope.fuckArr);
                var screenWatcher=function(id,url,device,tp,w,h){

                    var BLANK_IMG =
                        'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';

                    var canvas = document.getElementById(id), g = canvas.getContext('2d');
                    var xs,ys,xe,ye;
                    var checkedArr=[];
                    canvas.addEventListener('mousedown',function(e){
                        var x, y;
                        if (e.layerX || e.layerX == 0) {
                            xs = e.layerX;
                            ys = e.layerY;
                        } else if (e.offsetX || e.offsetX == 0) { // Opera
                            xs = e.offsetX;
                            ys = e.offsetY;
                        }
                        for(var e=0;e<$('.canvas-ul li input').length;e++){
                            if($('.canvas-ul li input').eq(e).prop('checked')){
                                checkedArr.push($('.canvas-ul li input').eq(e).attr('mess_id'));
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
                            $http.get($rootScope.link+'/device/touchDeviceScreen?devices='+JSON.stringify(checkedArr)+'&touchPort='+tp+'&x='+parseInt(xs*(w/228))+'&y='+parseInt(ys*(h/400))).success(function(data){});
                        }else{
                            $http.get($rootScope.link+'/device/slideDeviceScreen?devices='+JSON.stringify(checkedArr)+'&touchPort='+tp+'&xs='+parseInt(xs*(w/228))+'&ys='+parseInt(ys*(h/400))+'&xe='+parseInt(xe*(w/228))+'&ye='+parseInt(ye*(h/400))).success(function(){});
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
                            blob = null
                            if(!$rootScope.isScreenPage){
                                ws.close();
                                $('.canvas-ul').empty();
                            }
                        };
                        var u = URL.createObjectURL(blob);
                        img.src = u
                    };
                    ws.onopen = function() {
                        console.log('onopen', arguments);
                        ws.send('1920x1080/0');
                    }
                };
                if(scope.fuckArr.length>0){
                    $('.page18-empty').hide();
                    $http.get($rootScope.link+'/device/showDeviceScreen?devices='+JSON.stringify(scope.fuckArr)+'&pageNo=1&pageSize=10').success(function(data){
                        $('.canvas-ul').empty();
                        for(var i=0;i< data.data.length;i++){
                            var cLi='<li class="canvas-li"><h2>'+data.data[i].rank+'</h2><h5></h5><canvas id="canvas'+i+'"></canvas><div><span></span><h6></h6><p><input type="checkbox" mess_id="'+data.data[i].device+'"></p></div></li>';                            $('.canvas-ul').append(cLi);
                            var assDevice=data.data[i].device;
                            var touchPort=data.data[i].touchStart;
                            var assId='canvas'+i;
                            var assPort=data.data[i].ip+':8080/wgcs/ws/'+data.data[i].inputStart+'/'+data.data[i].device;
                            var equipWidth=data.data[i].wmSize.split('x')[0];
                            var equipHeight=data.data[i].wmSize.split('x')[1];
                            screenWatcher(assId,assPort,assDevice,touchPort,equipWidth,equipHeight);
                        }
                        $('.canvas-ul li span').click(function(){
                            var checkedArr=[];
                            for(var e=0;e<$('.canvas-ul li input').length;e++){
                                if($('.canvas-ul li input').eq(e).prop('checked')){
                                    checkedArr.push($('.canvas-ul li input').eq(e).attr('mess_id'));
                                }
                            }
                            var device=$(this).next().next().find('input').attr('mess_id');
                            checkedArr.push(device);
                            $http.get($rootScope.link+'/device/returnBack?devices='+JSON.stringify(checkedArr)).success(function(){});
                        });
                        $('.canvas-ul li h6').click(function(){
                            var checkedArr=[];
                            for(var e=0;e<$('.canvas-ul li input').length;e++){
                                if($('.canvas-ul li input').eq(e).prop('checked')){
                                    checkedArr.push($('.canvas-ul li input').eq(e).attr('mess_id'));
                                }
                            }
                            var device=$(this).next().find('input').attr('mess_id');
                            checkedArr.push(device);
                            $http.get($rootScope.link+'/device/returnHome?devices='+JSON.stringify(checkedArr)).success(function(){});
                        });
                        $('.canvas-ul li h5').click(function(){
                            var device=$(this).next().next().find('input').attr('mess_id');
                            $http.get($rootScope.link+'/device/clear?device='+device).success(function(){});
                        });
                        $('.canvas-ul li input').click(function(){
                            if($(this).prop('checked')){
                                $(this).parent().addClass('on');
                                for(var p= 0,flag=true;p<$('.canvas-ul li input').length;p++){
                                    if(!$('.canvas-ul li input').eq(p).prop('checked')){
                                        flag=false;
                                    }
                                }
                                if(!flag){
                                    $('.page18-new-add h3 span').removeClass('on').find('input').prop('checked',function(){return false});
                                }else{
                                    $('.page18-new-add h3 span').addClass('on').find('input').prop('checked',function(){return true});
                                }
                            }else{
                                $(this).parent().removeClass('on');
                                $('.page18-new-add h3 span').removeClass('on').find('input').prop('checked',function(){return false});
                            }
                        });
                        var ww=$('.page18-floor-one').width();
                        var am;
                        if(ww<1200 && ww>=960){
                            am=(ww-970)/8;
                        }else if(ww < 960 && ww >= 720){
                            am=(ww-730)/6;
                        }else if(ww>=1200){
                            am=(ww-1210)/10
                        }
                        $('.page18-floor-one').find('.canvas-li').css('margin','0 '+am+'px 8px');
                        //$('#pages18').Page({
                        //    totalPages: data.data.totalPages,//分页总数
                        //    liNums: 5,//分页的数字按钮数(建议取奇数)
                        //    activeClass: 'activP', //active 类样式定义
                        //    callBack : function(page){
                        //        $http.get($rootScope.link+'/device/showDeviceScreen?devices='+JSON.stringify(scope.fuckArr)+'&pageNo='+page+'&pageSize=10').success(function(data){
                        //            $('.canvas-ul').empty();
                        //            for(var i=0;i< data.data.content.length;i++){
                        //                var cLi='<li class="canvas-li"><h2>'+data.data.content[i].rank+'</h2><h5></h5><canvas id="canvas'+i+'"></canvas><div><span></span><h6></h6><p><input type="checkbox" mess_id="'+data.data.content[i].device+'"></p></div></li>';                            $('.canvas-ul').append(cLi);
                        //                var assDevice=data.data.content[i].device;
                        //                var touchPort=data.data.content[i].touchStart;
                        //                var assId='canvas'+i;
                        //                var assPort=data.data.content[i].ip+':8080/wgcs/ws/'+data.data.content[i].inputStart+'/'+data.data.content[i].device;
                        //                var equipWidth=data.data.content[i].wmSize.split('x')[0];
                        //                var equipHeight=data.data.content[i].wmSize.split('x')[1];
                        //                screenWatcher(assId,assPort,assDevice,touchPort,equipWidth,equipHeight);
                        //            }
                        //            $('.canvas-ul li span').click(function(){
                        //                var checkedArr=[];
                        //                for(var e=0;e<$('.canvas-ul li input').length;e++){
                        //                    if($('.canvas-ul li input').eq(e).prop('checked')){
                        //                        checkedArr.push($('.canvas-ul li input').eq(e).attr('mess_id'));
                        //                    }
                        //                }
                        //                var device=$(this).next().next().find('input').attr('mess_id');
                        //                checkedArr.push(device);
                        //                $http.get($rootScope.link+'/device/returnBack?devices='+JSON.stringify(checkedArr)).success(function(){});
                        //            });
                        //            $('.canvas-ul li h6').click(function(){
                        //                var checkedArr=[];
                        //                for(var e=0;e<$('.canvas-ul li input').length;e++){
                        //                    if($('.canvas-ul li input').eq(e).prop('checked')){
                        //                        checkedArr.push($('.canvas-ul li input').eq(e).attr('mess_id'));
                        //                    }
                        //                }
                        //                var device=$(this).next().find('input').attr('mess_id');
                        //                checkedArr.push(device);
                        //                $http.get($rootScope.link+'/device/returnHome?devices='+JSON.stringify(checkedArr)).success(function(){});
                        //            });
                        //            $('.canvas-ul li h5').click(function(){
                        //                var device=$(this).next().next().find('input').attr('mess_id');
                        //                $http.get($rootScope.link+'/device/clear?device='+device).success(function(){});
                        //            });
                        //            $('.canvas-ul li input').click(function(){
                        //                if($(this).prop('checked')){
                        //                    $(this).parent().addClass('on');
                        //                    for(var p= 0,flag=true;p<$('.canvas-ul li input').length;p++){
                        //                        if(!$('.canvas-ul li input').eq(p).prop('checked')){
                        //                            flag=false;
                        //                        }
                        //                    }
                        //                    if(!flag){
                        //                        $('.page18-new-add h3 span').removeClass('on').find('input').prop('checked',function(){return false});
                        //                    }else{
                        //                        $('.page18-new-add h3 span').addClass('on').find('input').prop('checked',function(){return true});
                        //                    }
                        //                }else{
                        //                    $(this).parent().removeClass('on');
                        //                    $('.page18-new-add h3 span').removeClass('on').find('input').prop('checked',function(){return false});
                        //                }
                        //            });
                        //            var ww=$('.page18-floor-one').width();
                        //            var am;
                        //            if(ww<1200 && ww>=960){
                        //                am=(ww-970)/8;
                        //            }else if(ww < 960 && ww >= 720){
                        //                am=(ww-730)/6;
                        //            }else if(ww>=1200){
                        //                am=(ww-1210)/10
                        //            }
                        //            $('.page18-floor-one').find('.canvas-li').css('margin','0 '+am+'px 8px');
                        //        })
                        //    }
                        //});
                    });
                }else{
                    $('.page18-empty').show();
                    $('.canvas-ul').empty();
                }

            });
        }
    }
});
app.directive('groupCheckOneEightteen',function($rootScope,$http){
    return {
        link:function(scope,elem){
            elem.click(function(){
                if(elem.prop('checked')){
                    elem.parent().addClass('on');
                }else{
                    elem.parent().removeClass('on');
                }
                var eNumber=elem.parent().parent().parent().parent().find('input');
                var flag=true;
                for(var i= 0;i<eNumber.length;i++){
                    if(eNumber.eq(i).prop('checked')==false){
                        flag=false;
                    }
                }
                if(flag){
                    elem.parent().parent().parent().parent().prev().find('p').addClass('on').find('input').prop('checked',function(){return true});
                }else{
                    elem.parent().parent().parent().parent().prev().find('p').removeClass('on').find('input').prop('checked',function(){return false});
                }
                scope.fuckArr=[];
                for(var i= 0;i<$('.new-wx-equip-input18').length;i++){
                    if($('.new-wx-equip-input18').eq(i).prop('checked')){
                        scope.fuckArr.push($('.new-wx-equip-input18').eq(i).parent().next().attr('title'));
                    }
                }
                $rootScope.socketArr=[];
                sessionStorage.setItem('devices',scope.fuckArr);
                var screenWatcher=function(id,url,device,tp,w,h){

                    var BLANK_IMG =
                        'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';

                    var canvas = document.getElementById(id), g = canvas.getContext('2d');
                    var xs,ys,xe,ye;
                    var checkedArr=[];
                    canvas.addEventListener('mousedown',function(e){
                        var x, y;
                        if (e.layerX || e.layerX == 0) {
                            xs = e.layerX;
                            ys = e.layerY;
                        } else if (e.offsetX || e.offsetX == 0) { // Opera
                            xs = e.offsetX;
                            ys = e.offsetY;
                        }
                        for(var e=0;e<$('.canvas-ul li input').length;e++){
                            if($('.canvas-ul li input').eq(e).prop('checked')){
                                checkedArr.push($('.canvas-ul li input').eq(e).attr('mess_id'));
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
                            $http.get($rootScope.link+'/device/touchDeviceScreen?devices='+JSON.stringify(checkedArr)+'&touchPort='+tp+'&x='+parseInt(xs*(w/228))+'&y='+parseInt(ys*(h/400))).success(function(data){});
                        }else{
                            $http.get($rootScope.link+'/device/slideDeviceScreen?devices='+JSON.stringify(checkedArr)+'&touchPort='+tp+'&xs='+parseInt(xs*(w/228))+'&ys='+parseInt(ys*(h/400))+'&xe='+parseInt(xe*(w/228))+'&ye='+parseInt(ye*(h/400))).success(function(){});
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
                            blob = null
                            if(!$rootScope.isScreenPage){
                                console.log(123);
                                ws.close();
                                $('.canvas-ul').empty();
                            }
                        };
                        var u = URL.createObjectURL(blob);
                        img.src = u
                    };
                    ws.onopen = function() {
                        console.log('onopen', arguments);
                        ws.send('1920x1080/0');
                    }
                };
                if(scope.fuckArr.length>0){
                    $('.page18-empty').hide();
                    $http.get($rootScope.link+'/device/showDeviceScreen?devices='+JSON.stringify(scope.fuckArr)+'&pageNo=1&pageSize=10').success(function(data){
                        $('.canvas-ul').empty();
                        for(var i=0;i< data.data.content.length;i++){
                            var cLi='<li class="canvas-li"><h2>'+data.data.content[i].rank+'</h2><h5></h5><canvas id="canvas'+i+'"></canvas><div><span></span><h6></h6><p><input type="checkbox" mess_id="'+data.data.content[i].device+'"></p></div></li>';                            $('.canvas-ul').append(cLi);
                            var assDevice=data.data.content[i].device;
                            var touchPort=data.data.content[i].touchStart;
                            var assId='canvas'+i;
                            var assPort=data.data.content[i].ip+':8080/wgcs/ws/'+data.data.content[i].inputStart+'/'+data.data.content[i].device;
                            var equipWidth=data.data.content[i].wmSize.split('x')[0];
                            var equipHeight=data.data.content[i].wmSize.split('x')[1];
                            screenWatcher(assId,assPort,assDevice,touchPort,equipWidth,equipHeight);
                        }
                        $('.canvas-ul li span').click(function(){
                            var checkedArr=[];
                            for(var e=0;e<$('.canvas-ul li input').length;e++){
                                if($('.canvas-ul li input').eq(e).prop('checked')){
                                    checkedArr.push($('.canvas-ul li input').eq(e).attr('mess_id'));
                                }
                            }
                            var device=$(this).next().next().find('input').attr('mess_id');
                            checkedArr.push(device);
                            $http.get($rootScope.link+'/device/returnBack?devices='+JSON.stringify(checkedArr)).success(function(){});
                        });
                        $('.canvas-ul li h6').click(function(){
                            var checkedArr=[];
                            for(var e=0;e<$('.canvas-ul li input').length;e++){
                                if($('.canvas-ul li input').eq(e).prop('checked')){
                                    checkedArr.push($('.canvas-ul li input').eq(e).attr('mess_id'));
                                }
                            }
                            var device=$(this).next().find('input').attr('mess_id');
                            checkedArr.push(device);
                            $http.get($rootScope.link+'/device/returnHome?devices='+JSON.stringify(checkedArr)).success(function(){});
                        });
                        $('.canvas-ul li h5').click(function(){
                            var device=$(this).next().next().find('input').attr('mess_id');
                            $http.get($rootScope.link+'/device/clear?device='+device).success(function(){});
                        });
                        $('.canvas-ul li input').click(function(){
                            if($(this).prop('checked')){
                                $(this).parent().addClass('on');
                                for(var p= 0,flag=true;p<$('.canvas-ul li input').length;p++){
                                    if(!$('.canvas-ul li input').eq(p).prop('checked')){
                                        flag=false;
                                    }
                                }
                                if(!flag){
                                    $('.page18-new-add h3 span').removeClass('on').find('input').prop('checked',function(){return false});
                                }else{
                                    $('.page18-new-add h3 span').addClass('on').find('input').prop('checked',function(){return true});
                                }
                            }else{
                                $(this).parent().removeClass('on');
                                $('.page18-new-add h3 span').removeClass('on').find('input').prop('checked',function(){return false});
                            }
                        });
                        var ww=$('.page18-floor-one').width();
                        var am;
                        if(ww<1200 && ww>=960){
                            am=(ww-970)/8;
                        }else if(ww < 960 && ww >= 720){
                            am=(ww-730)/6;
                        }else if(ww>=1200){
                            am=(ww-1210)/10
                        }
                        $('.page18-floor-one').find('.canvas-li').css('margin','0 '+am+'px 5px');
                        $('#pages18').Page({
                            totalPages: data.data.totalPages,//分页总数
                            liNums: 5,//分页的数字按钮数(建议取奇数)
                            activeClass: 'activP', //active 类样式定义
                            callBack : function(page){
                                $http.get($rootScope.link+'/device/showDeviceScreen?devices='+JSON.stringify(scope.fuckArr)+'&pageNo='+page+'&pageSize=10').success(function(data){
                                    $('.canvas-ul').empty();
                                    for(var i=0;i< data.data.content.length;i++){
                                        var cLi='<li class="canvas-li"><h2>'+data.data.content[i].rank+'</h2><h5></h5><canvas id="canvas'+i+'"></canvas><div><span></span><h6></h6><p><input type="checkbox" mess_id="'+data.data.content[i].device+'"></p></div></li>';                            $('.canvas-ul').append(cLi);
                                        //$('.canvas-ul').append(cLi);
                                        var assDevice=data.data.content[i].device;
                                        var touchPort=data.data.content[i].touchStart;
                                        var assId='canvas'+i;
                                        var assPort=data.data.content[i].ip+':8080/wgcs/ws/'+data.data.content[i].inputStart+'/'+data.data.content[i].device;
                                        var equipWidth=data.data.content[i].wmSize.split('x')[0];
                                        var equipHeight=data.data.content[i].wmSize.split('x')[1];
                                        screenWatcher(assId,assPort,assDevice,touchPort,equipWidth,equipHeight);
                                    }
                                    $('.canvas-ul li span').click(function(){
                                        var checkedArr=[];
                                        for(var e=0;e<$('.canvas-ul li input').length;e++){
                                            if($('.canvas-ul li input').eq(e).prop('checked')){
                                                checkedArr.push($('.canvas-ul li input').eq(e).attr('mess_id'));
                                            }
                                        }
                                        var device=$(this).next().next().find('input').attr('mess_id');
                                        checkedArr.push(device);
                                        $http.get($rootScope.link+'/device/returnBack?devices='+JSON.stringify(checkedArr)).success(function(){});
                                    });
                                    $('.canvas-ul li h6').click(function(){
                                        var checkedArr=[];
                                        for(var e=0;e<$('.canvas-ul li input').length;e++){
                                            if($('.canvas-ul li input').eq(e).prop('checked')){
                                                checkedArr.push($('.canvas-ul li input').eq(e).attr('mess_id'));
                                            }
                                        }
                                        var device=$(this).next().find('input').attr('mess_id');
                                        checkedArr.push(device);
                                        $http.get($rootScope.link+'/device/returnHome?devices='+JSON.stringify(checkedArr)).success(function(){});
                                    });
                                    $('.canvas-ul li h5').click(function(){
                                        var device=$(this).next().next().find('input').attr('mess_id');
                                        $http.get($rootScope.link+'/device/clear?device='+device).success(function(){});
                                    });
                                    $('.canvas-ul li input').click(function(){
                                        if($(this).prop('checked')){
                                            $(this).parent().addClass('on');
                                            for(var p= 0,flag=true;p<$('.canvas-ul li input').length;p++){
                                                if(!$('.canvas-ul li input').eq(p).prop('checked')){
                                                    flag=false;
                                                }
                                            }
                                            if(!flag){
                                                $('.page18-new-add h3 span').removeClass('on').find('input').prop('checked',function(){return false});
                                            }else{
                                                $('.page18-new-add h3 span').addClass('on').find('input').prop('checked',function(){return true});
                                            }
                                        }else{
                                            $(this).parent().removeClass('on');
                                            $('.page18-new-add h3 span').removeClass('on').find('input').prop('checked',function(){return false});
                                        }
                                    });
                                    var ww=$('.page18-floor-one').width();
                                    var am;
                                    if(ww<1200 && ww>=960){
                                        am=(ww-970)/8;
                                    }else if(ww < 960 && ww >= 720){
                                        am=(ww-730)/6;
                                    }else if(ww>=1200){
                                        am=(ww-1210)/10
                                    }
                                    $('.page18-floor-one').find('.canvas-li').css('margin','0 '+am+'px 5px');
                                })
                            }
                        });
                    });
                }else{
                    $('.page18-empty').show();
                    $('.canvas-ul').empty();
                }
            });
        }
    }
});
app.directive('widthWatcher',function(){
    return {
        link:function(scope,elem){
            //var ww=elem.width();
            //var am;
            //if(ww<1160 && ww>=924){
            //    am=(ww-924)/8;
            //}else if(ww < 924 && ww >= 736){
            //    am=(ww-736)/6;
            //}else if(ww==1160){
            //    am=0
            //}
            //elem.find('.canvas-li').css('margin','0 '+am+'px 5px');
            window.onresize=function(){
                var iw=elem.width();
                var im;
                if(iw>=924){
                    im=(iw-924)/8;
                }else if(iw < 924 && iw >= 736){
                    im=(iw-736)/6;
                }else if(iw==1160){
                    im=0
                }
                elem.find('.canvas-li').css('margin','0 '+im+'px 5px');
            };
        }
    }
});
app.directive('screenCheckedAll',function(){
    return{
        link:function(scope,elem){
            elem.click(function(){
                if(elem.prop('checked')){
                    elem.parent().addClass('on');
                    elem.parent().parent().parent().parent().parent().next().find('.canvas-ul').find('p').addClass('on').find('input').prop('checked',function(){return true});
                }else{
                    elem.parent().removeClass('on');
                    elem.parent().parent().parent().parent().parent().next().find('.canvas-ul').find('p').removeClass('on').find('input').prop('checked',function(){return false});
                }
            });
        }
    }
});
app.directive('reload',function(){
    return {
        link:function(scope,elem){
            elem.click(function(){
                location.reload();
            });
        }
    }
});
app.controller('page19C',function($rootScope,$scope,$http){
    $rootScope.getAllFalse();
    $rootScope.activeNineteen=true;
    $rootScope.navPartSix=true;
    $rootScope.isScreenPage=true;

    $http.get($rootScope.link+'/task/getGroupTaskInitPage?status=-1&pageNo=1&pageSize=17').success(function(data){
        $scope.TaskAllList=data.data.content;
        $('#pages19').Page({
            totalPages: data.data.totalPages,//分页总数
            liNums: 5,//分页的数字按钮数(建议取奇数)
            activeClass: 'activP', //active 类样式定义
            callBack : function(page){
                $http.get($rootScope.link+'/task/getGroupTaskInitPage?status=-1&pageNo='+page+'&pageSize=17').success(function(data){
                    $scope.TaskAllList=data.data.content;
                })
            }
        });
    });
    $scope.isShow=function(s){
        if(s==3){
            return true;
        }
    };
    $scope.taskOut=false;
    $scope.checkWrong=function(id){
        $http.get($rootScope.link+'/task/getErrorTask?taskId='+id).success(function(data){
            if(data.code==200){
                $scope.taskOut=true;
                $scope.taskList=data.data;
            }else{
                alert('点击失败！请重试！');
            }

        });
    };
    $scope.getTaskBack=function(){
        $scope.taskOut=false;
    };
});
app.controller('page20C',function($rootScope,$scope,$http){
    $rootScope.getAllFalse();
    $rootScope.activeTwenty=true;
    $rootScope.navPartSix=true;
    $rootScope.isScreenPage=true;

    $scope.ifShow=function(type){
        if(type==2){
            return true;
        }
    };
    $scope.assState=function(s){
        var a;
        if(s==0){
            a='正在执行';
        }else if(s==1){
            a='等待执行';
        }else if(s==2){
            a='执行完成';
        }
        return a;
    };
    $scope.isDisabledOne=function(s){
        if(s!=1){
            return true;
        }
    };
    $scope.isDisabledTwo=function(s){
        if(s!=0){
            return true;
        }
    };
    $scope.isDisabledThree=function(s){
        if(s!=3){
            return true;
        }
    };
    $scope.isBlandOne=function(s){
        if(s!=1){
            return 'on';
        }
    };
    $scope.isBlandTwo=function(s){
        if(s!=0){
            return 'on';
        }
    };
    $scope.isBlandThree=function(s){
        if(s!=3){
            return 'on';
        }
    };
    $http.get($rootScope.link+'/remote/getTask?pageNo=1&pageSize=2').success(function(data){
        if(data.code==200){
            $scope.assList=data.data.content;
            $('#pages20').Page({
                totalPages: data.data.totalPages,//分页总数
                liNums: 5,//分页的数字按钮数(建议取奇数)
                activeClass: 'activP', //active 类样式定义
                callBack : function(page){
                    $http.get($rootScope.link+'/remote/getTask?pageNo='+page+'&pageSize=2').success(function(data){
                        $scope.assList=data.data.content;
                    })
                }
            });
        }
    });

    $scope.assChecked=function(str){
        if(JSON.parse(str).clear==1){
            return true;
        }
    };
    $scope.assValue=function(str){
        return JSON.parse(str).msg;
    };
    $scope.assInterval=function(str){
        return JSON.parse(str).interval;
    };
    $scope.assRadioOne=function(str){
        if(JSON.parse(str).strategy==1){
            return true;
        }
    };
    $scope.assRadioTwo=function(str){
        if(JSON.parse(str).strategy==0){
            return true;
        }
    };
    $scope.assCount=function(str){
        return JSON.parse(str).count;
    };
});
app.directive('startService',function($rootScope,$http){
    return {
        link:function(scope,elem){
            elem.click(function(){
                for(var i= 0,devices=[];i<$('.new-wx-equip-input20').length;i++){
                    if($('.new-wx-equip-input20').eq(i).prop('checked')){
                        devices.push($('.new-wx-equip-input20').eq(i).parent().next().attr('title'));
                    }
                }
                var tid=elem.attr('t_id');
                var msg=elem.parent().parent().prev().find('.page20-b-list-two').find('input').val();
                var interval=elem.parent().parent().prev().find('.page20-b-list-three').eq(0).find('input').val();
                var count=elem.parent().parent().prev().find('.page20-b-list-three').eq(1).find('input').val();
                var number=elem.parent().parent().prev().find('.page20-b-list-three').eq(2).find('input').val();
                var clear=0;
                if(elem.parent().parent().prev().find('.page20-b-list-one').find('input').prop('checked')){
                    clear=1;
                }
                var strategy=elem.parent().parent().prev().find('.page20-b-list-four').find('input:checked').val()||3;
                if(devices.length==0){
                    alert('请勾选需要操作的设备!');
                }else if(msg==''){
                    alert('请填写打招呼用语！');
                }else if(interval==''){
                    alert('请填写时间间隔!');
                }else if(count==''){
                    alert('请填写每天加人的数量!');
                }else if(strategy==3){
                    alert('请选择加人策略!');
                }else if(number==''){
                    alert('请填写任务执行时间间隔!');
                }else{
                    $http.get($rootScope.link+'/remote/openServer?tid='+tid+'&devices='+JSON.stringify(devices)+'&interval='+interval+'&msg='+msg+'&clear='+clear+'&strategy='+strategy+'&count='+count+'&number='+number).success(function(data){
                       if(data.code==0){
                           alert('开启成功！');
                           //$http.get($rootScope.link+'/remote/getTask?pageNo=1&pageSize=2').success(function(data){
                           //    if(data.code==200){
                           //        scope.assList=data.data.content;
                           //        $('#pages20').Page({
                           //            totalPages: data.data.totalPages,//分页总数
                           //            liNums: 5,//分页的数字按钮数(建议取奇数)
                           //            activeClass: 'activP', //active 类样式定义
                           //            callBack : function(page){
                           //                $http.get($rootScope.link+'/remote/getTask?pageNo='+page+'&pageSize=2').success(function(data){
                           //                    scope.assList=data.data.content;
                           //                })
                           //            }
                           //        });
                           //    }
                           //});
                           elem.next().removeAttr('disabled').css('background','#2abf9e');
                           elem.next().next().removeAttr('disabled').css('background','#2abf9e');
                           elem.attr('disabled','disabled').css('background','#ccc');
                           elem.parent().parent().prev().prev().text('正在执行');
                       }else if(data.code==100){
                           alert('任务已完成！');
                       }else if(data.code==101){
                           alert('任务已就绪！');
                       }
                    });
                }
            });
        }
    }
});
app.directive('stopService',function($rootScope,$http){
    return {
        link: function(scope,elem){
            elem.click(function(){
                var tid=elem.attr('t_id');
                $http.get($rootScope.link+'/remote/stopServer?tid='+tid).success(function(data){
                    if(data.code==200){
                        alert('暂停成功！');
                        //$http.get($rootScope.link+'/remote/getTask?pageNo=1&pageSize=2').success(function(data){
                        //    if(data.code==200){
                        //        scope.assList=data.data.content;
                        //        $('#pages20').Page({
                        //            totalPages: data.data.totalPages,//分页总数
                        //            liNums: 5,//分页的数字按钮数(建议取奇数)
                        //            activeClass: 'activP', //active 类样式定义
                        //            callBack : function(page){
                        //                $http.get($rootScope.link+'/remote/getTask?pageNo='+page+'&pageSize=2').success(function(data){
                        //                    scope.assList=data.data.content;
                        //                })
                        //            }
                        //        });
                        //    }
                        //});
                        elem.attr('disabled','disabled').css('background','#ccc');
                        elem.next().attr('disabled','disabled').css('background','#ccc');
                        elem.prev().removeAttr('disabled').css('background','#2abf9e');
                        elem.parent().parent().prev().prev().text('等待执行');
                    }
                });
            });
        }
    }
});
app.directive('endService',function($rootScope,$http){
    return {
        link: function(scope,elem){
            elem.click(function(){
                var tid=elem.attr('t_id');
                $http.get($rootScope.link+'/remote/close?tid='+tid).success(function(data){
                    if(data.code==200){
                        alert('终止成功！');
                        //$http.get($rootScope.link+'/remote/getTask?pageNo=1&pageSize=2').success(function(data){
                        //    if(data.code==200){
                        //        scope.assList=data.data.content;
                        //        $('#pages20').Page({
                        //            totalPages: data.data.totalPages,//分页总数
                        //            liNums: 5,//分页的数字按钮数(建议取奇数)
                        //            activeClass: 'activP', //active 类样式定义
                        //            callBack : function(page){
                        //                $http.get($rootScope.link+'/remote/getTask?pageNo='+page+'&pageSize=2').success(function(data){
                        //                    scope.assList=data.data.content;
                        //                })
                        //            }
                        //        });
                        //    }
                        //});
                        elem.prev().prev().attr('disabled','disabled').css('background','#ccc');
                        elem.prev().attr('disabled','disabled').css('background','#ccc');
                        elem.attr('disabled','disabled').css('background','#ccc');
                        elem.parent().parent().prev().prev().text('执行完成');
                    }
                });
            });
        }
    }
});
app.controller('page21C',function($rootScope,$scope,$http,$location,$anchorScroll){
    $rootScope.getAllFalse();
    $rootScope.activeTwentyone=true;
    $rootScope.navPartFour=true;
    $rootScope.isScreenPage=false;
    //配置策略
    $scope.sendAllButton=false;
    $scope.timeInterval=5;
    $scope.sayHello='您好!很高兴认识您!';
    $scope.isClear=0;
    $scope.clear=function($event){
        if($event.target.checked){
            $scope.isClear=1;
        }else{
            $scope.isClear=0;
        }
    };
    $scope.sendAll=function(){
        for(var i= 0,arr=[];i<$('.new-wx-equip-input').length;i++){
            if($('.new-wx-equip-input').eq(i).prop('checked')){
                arr.push($('.new-wx-equip-input').eq(i).parent().next().attr('title'));
            }
        }
        if($scope.timeInterval==''){
            alert('请填写时间间隔！');
        }else if($scope.sayHello==''){
            alert('请填写打招呼用语！');
        }else if(arr.length==0){
            alert('请勾选需要操作的设备！');
        }else{
            var sendObj=new FormData();
            sendObj.append('devices',JSON.stringify(arr));
            sendObj.append('interval',$scope.timeInterval);
            sendObj.append('msg',$scope.sayHello);
            sendObj.append('clear',$scope.isClear);
            sendObj.append('strategy',$scope.addPeople);
            sendObj.append('count',$scope.addPeopleCount);
            sendObj.append('contactList',JSON.stringify($scope.assList));
            $http({
                method:'POST',
                url:$rootScope.link+"/momoPlus/addFriendContact",
                data: sendObj,
                headers: {'Content-Type':undefined},
                transformRequest: angular.identity
            }).success( function ( response ) {
                //上传成功的操作
                if(response.code==200){
                    alert('任务添加成功!');
                    $location.hash('page-top6');
                    $anchorScroll();
                    $http.get($rootScope.link+'/task/getGroupTaskInit?status=-1').success(function(data){
                        if(data.code==200){
                            $rootScope.taskList=data.data;
                            $rootScope.taskAll=true;
                            $rootScope.taskDoing=false;
                            $rootScope.taskWait=false;
                            $rootScope.taskDown=false;
                            $rootScope.newBell=true;
                        }
                    });
                }
            });
        }
    };
    //加人策略
    $scope.assRadioChoose=false;
    $scope.addPeople=1;
    $scope.addPeopleCount=1;
    $scope.getAssHide=function(){
        $scope.assRadioChoose=false;
        $scope.addPeople=1;
    };
    $scope.getAssShow=function(){
        $scope.assRadioChoose=true;
        $scope.addPeople=0;
    }
});
app.controller('page22C',function($rootScope,$scope,$location,$anchorScroll,$http){
    $rootScope.getAllFalse();
    $rootScope.activeTwentytwo=true;
    $rootScope.navPartFour=true;
    $rootScope.isScreenPage=false;
    //配置策略
    $scope.timeInterval=5;
    $scope.sayHello='您好！很高兴认识您！';
    $scope.sendAllButton=false;
    $scope.addPeople=1;
    $scope.addPeopleCount=1;
    $scope.addPeopleOne=function(){
        $scope.addPeople=1;
        $scope.assRadioChoose=false;
    };
    $scope.addPeopleTwo=function(){
        $scope.addPeople=0;
        $scope.assRadioChoose=true;
    };
    $scope.sendAll=function(){
        for(var i= 0,arr=[];i<$('.new-wx-equip-input7').length;i++){
            if($('.new-wx-equip-input7').eq(i).prop('checked')){
                arr.push($('.new-wx-equip-input7').eq(i).parent().next().attr('title'));
            }
        }
        if($scope.timeInterval==''){
            alert('请填写时间间隔！');
        }else if($scope.sayHello==''){
            alert('请填写打招呼用语！');
        }else if(arr.length==0){
            alert('请勾选需要操作的设备！');
        }else{
            var sendObj=new FormData();
            sendObj.append('devices',JSON.stringify(arr));
            sendObj.append('interval',$scope.timeInterval);
            sendObj.append('msg',$scope.sayHello);
            sendObj.append('strategy',$scope.addPeople);
            sendObj.append('count',$scope.addPeopleCount);
            sendObj.append('contactList',JSON.stringify($scope.assList));
            $http({
                method:'POST',
                url:$rootScope.link+"/momoPlus/addFriendDirect",
                data: sendObj,
                headers: {'Content-Type':undefined},
                transformRequest: angular.identity
            }).success( function ( response ) {
                //上传成功的操作
                if(response.code==200){
                    alert('任务添加成功!');
                    $location.hash('page-top7');
                    $anchorScroll();
                    $http.get($rootScope.link+'/task/getGroupTaskInit?status=-1').success(function(data){
                        if(data.code==200){
                            $rootScope.taskList=data.data;
                            $rootScope.taskAll=true;
                            $rootScope.taskDoing=false;
                            $rootScope.taskWait=false;
                            $rootScope.taskDown=false;
                            $rootScope.newBell=true;
                        }
                    });
                }
            });
        }
    };
});
app.controller('page23C',function($rootScope,$scope,$location,$anchorScroll,$http){
    $rootScope.getAllFalse();
    $rootScope.activeTwentythree=true;
    $rootScope.navPartFour=true;
    $rootScope.isScreenPage=false;
    //算法配置
    //$scope.mapRang='2000米';
    $scope.timeInterval=5;
    $scope.sayHello='您好！很高兴认识您！';
    //$scope.mapLocation='';
    $scope.addPeopleNumber=10;
    $scope.addSex='全部';

    //function G(id) {
    //    return document.getElementById(id);
    //}
    //var map = new BMap.Map("page8-map");
    //map.centerAndZoom("北京",12);                   // 初始化地图,设置城市和地图级别。
    //map.enableScrollWheelZoom(true); //为了王哥
    //map.addEventListener('click',function(e){
    //    //var myIcon=new BMap.Icon("images/map-logo.png", new BMap.Size(23,33));
    //    //var marker = new BMap.Marker(new BMap.Point(e.point.lng,e.point.lat ),{icon:myIcon})
    //    //map.addOverlay(marker);
    //    $.ajax({
    //        type:'GET',
    //        url:'http://api.map.baidu.com/geocoder/v2/?ak=HbUVYMUg6PwbOnXkztdgSQlQ&callback=renderReverse&location='+e.point.lat+','+e.point.lng+'&output=json&pois=1',
    //        dataType:'JSONP',
    //        success:function(data1){
    //            $scope.mapLocation=data1.result.formatted_address;
    //            $scope.$apply();
    //        }
    //    });
    //});
    //var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
    //    {"input" : "suggestId"
    //        ,"location" : map
    //    });
    //
    //ac.addEventListener("onhighlight", function(e) {  //鼠标放在下拉列表上的事件
    //    var str = "";
    //    var _value = e.fromitem.value;
    //    var value = "";
    //    if (e.fromitem.index > -1) {
    //        value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
    //    }
    //    str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;
    //
    //    value = "";
    //    if (e.toitem.index > -1) {
    //        _value = e.toitem.value;
    //        value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
    //    }
    //    str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
    //    G("searchResultPanel").innerHTML = str;
    //});
    //
    //var myValue;
    //ac.addEventListener("onconfirm", function(e) {    //鼠标点击下拉列表后的事件
    //    var _value = e.item.value;
    //    myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
    //    G("searchResultPanel").innerHTML ="onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;
    //
    //    setPlace();
    //});
    //
    //function setPlace(){
    //    map.clearOverlays();    //清除地图上所有覆盖物
    //    function myFun(){
    //        var pp = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
    //        map.centerAndZoom(pp, 18);
    //        map.addOverlay(new BMap.Marker(pp));    //添加标注
    //        $scope.mapPointLng=pp.lng;
    //        $scope.mapPointLat=pp.lat;
    //    }
    //    var local = new BMap.LocalSearch(map, { //智能搜索
    //        onSearchComplete: myFun
    //    });
    //    local.search(myValue);
    //}

    $scope.sendAll=function(){
        for(var i= 0,arr=[];i<$('.new-wx-equip-input8').length;i++){
            if($('.new-wx-equip-input8').eq(i).prop('checked')){
                arr.push($('.new-wx-equip-input8').eq(i).parent().next().attr('title'));
            }
        }
        var sex=0;
        if($scope.addSex=='全部'){
            sex=0;
        }else if($scope.addSex=='男'){
            sex=1;
        }else if($scope.addSex=='女'){
            sex=2;
        }
        if(arr.length==0){
            alert('请勾选需要操作的设备！');
        }else if($scope.timeInterval==''){
            alert('请填写时间间隔！');
        }else if($scope.sayHello==''){
            alert('请输入打招呼用语！');
        }else if($scope.addPeopleNumber==''){
            alert('请输入加人的数量!')
        }else{
            var sendObj=new FormData();
            sendObj.append('devices',JSON.stringify(arr));
            sendObj.append('interval',$scope.timeInterval);
            sendObj.append('msg',$scope.sayHello);
            sendObj.append('num',$scope.addPeopleNumber);
            sendObj.append('sex',sex);
            $http({
                method:'POST',
                url:$rootScope.link+"/momoPlus/sayHello",
                data: sendObj,
                headers: {'Content-Type':undefined},
                transformRequest: angular.identity
            }).success( function ( response ) {
                //上传成功的操作
                if(response.code==200){
                    alert('任务添加成功!');
                    $location.hash('page-top8');
                    $anchorScroll();
                    $http.get($rootScope.link+'/task/getGroupTaskInit?status=-1').success(function(data){
                        if(data.code==200){
                            $rootScope.taskList=data.data;
                            $rootScope.taskAll=true;
                            $rootScope.taskDoing=false;
                            $rootScope.taskWait=false;
                            $rootScope.taskDown=false;
                            $rootScope.newBell=true;
                        }
                    });
                }
            });
        }
    };
});
app.controller('page24C',function($rootScope,$scope,$location,$anchorScroll,$http,$timeout){
    $rootScope.getAllFalse();
    $rootScope.activeTwentyfour=true;
    $rootScope.navPartFour=true;
    $rootScope.isScreenPage=false;
    $timeout(function(){
        $http.get($rootScope.link+'/momo/getMomosByDevice?devices='+JSON.stringify($rootScope.moArray)+'&pageNo=1&pageSize=6').success(function(data){
            if(data.code==200){
                $rootScope.MemberList9=data.data.content;
                $('#pages9').Page({
                    totalPages: data.data.totalPages,//分页总数
                    liNums: 5,//分页的数字按钮数(建议取奇数)
                    activeClass: 'activP', //active 类样式定义
                    callBack : function(page){
                        $http.get($rootScope.link+'/momo/getMomosByDevice?devices='+JSON.stringify($rootScope.moArray)+'&pageNo='+page+'&pageSize=6').success(function(data){
                            $rootScope.MemberList9=data.data.content;
                        })
                    }
                });
            }
        });
    },500);
    //配置
    $scope.countNumber=5;
    $scope.sayHello='您好！很高兴认识您！';
    $scope.timeInterval=5;

    $scope.sendAll=function(){
        for(var i= 0,arr=[];i<$('.new-wx-equip-input9').length;i++){
            if($('.new-wx-equip-input9').eq(i).prop('checked')){
                arr.push($('.new-wx-equip-input9').eq(i).parent().next().attr('title'));
            }
        }
        if(arr.length==0){
            alert('请勾选需要操作的微信群组!');
        }else if($scope.countNumber==''){
            alert('请填写添加的数量!');
        }else if($scope.sayHello==''){
            alert('请填写打招呼用语!');
        }else if($scope.timeInterval==''){
            alert('请填写时间间隔!');
        }else{
            var sendObj=new FormData();
            sendObj.append('msg',$scope.sayHello);
            sendObj.append('count',$scope.countNumber);
            sendObj.append('interval', $scope.timeInterval);
            sendObj.append('dataList', JSON.stringify(arr));
            $http({
                method:'POST',
                url:$rootScope.link+"/momoPlus/addFriendInClub",
                data: sendObj,
                headers: {'Content-Type':undefined},
                transformRequest: angular.identity
            }).success( function ( response ) {
                //上传成功的操作
                if(response.code==200){
                    alert('任务添加成功!');
                    $location.hash('page-top9');
                    $anchorScroll();
                    $http.get($rootScope.link+'/task/getGroupTaskInit?status=-1').success(function(data){
                        if(data.code==200){
                            $rootScope.taskList=data.data;
                            $rootScope.taskAll=true;
                            $rootScope.taskDoing=false;
                            $rootScope.taskWait=false;
                            $rootScope.taskDown=false;
                            $rootScope.newBell=true;
                        }
                    });
                }
            });
        }
    };
});
app.directive('groupCheckAll24',function($rootScope,$http){
    return {
        link : function(scope,elem){
            elem.click(function(){
                if(elem.prop('checked')){
                    elem.parent().addClass('on');
                    elem.parent().parent().next().find('p').addClass('on').find('input').prop('checked',function(){return true});
                }else{
                    elem.parent().removeClass('on');
                    elem.parent().parent().next().find('p').removeClass('on').find('input').prop('checked',function(){return false});
                }
                scope.fuckArr=[];
                for(var i= 0;i<$('.new-wx-equip-input9').length;i++){
                    if($('.new-wx-equip-input9').eq(i).prop('checked')){
                        scope.fuckArr.push($('.new-wx-equip-input9').eq(i).parent().next().attr('title'));
                    }
                }
                $http.get($rootScope.link+'/momo/getMomosByDevice?devices='+JSON.stringify(scope.fuckArr)+'&pageNo=1&pageSize=6').success(function(data){
                    if(data.code==200){
                        $rootScope.MemberList9=data.data.content;
                        $('#pages9').Page({
                            totalPages: data.data.totalPages,//分页总数
                            liNums: 5,//分页的数字按钮数(建议取奇数)
                            activeClass: 'activP', //active 类样式定义
                            callBack : function(page){
                                $http.get($rootScope.link+'/momo/getMomosByDevice?devices='+JSON.stringify(scope.fuckArr)+'&pageNo='+page+'&pageSize=6').success(function(data){
                                    $rootScope.MemberList9=data.data.content;
                                })
                            }
                        });
                    }
                });
            });
        }
    }
});
app.directive('groupCheckOne24',function($rootScope,$http){
    return {
        link:function(scope,elem){
            elem.click(function(){
                if(elem.prop('checked')){
                    elem.parent().addClass('on');
                }else{
                    elem.parent().removeClass('on');
                }
                var eNumber=elem.parent().parent().parent().parent().find('input');
                var flag=true;
                for(var i= 0;i<eNumber.length;i++){
                    if(eNumber.eq(i).prop('checked')==false){
                        flag=false;
                    }
                }
                if(flag){
                    elem.parent().parent().parent().parent().prev().find('p').addClass('on').find('input').prop('checked',function(){return true});
                }else{
                    elem.parent().parent().parent().parent().prev().find('p').removeClass('on').find('input').prop('checked',function(){return false});
                }
                scope.fuckArr=[];
                for(var i= 0;i<$('.new-wx-equip-input9').length;i++){
                    if($('.new-wx-equip-input9').eq(i).prop('checked')){
                        scope.fuckArr.push($('.new-wx-equip-input9').eq(i).parent().next().attr('title'));
                    }
                }
                $http.get($rootScope.link+'/momo/getMomosByDevice?devices='+JSON.stringify(scope.fuckArr)+'&pageNo=1&pageSize=6').success(function(data){
                    if(data.code==200){
                        $rootScope.MemberList9=data.data.content;
                        $('#pages9').Page({
                            totalPages: data.data.totalPages,//分页总数
                            liNums: 5,//分页的数字按钮数(建议取奇数)
                            activeClass: 'activP', //active 类样式定义
                            callBack : function(page){
                                $http.get($rootScope.link+'/momo/getMomosByDevice?devices='+JSON.stringify(scope.fuckArr)+'&pageNo='+page+'&pageSize=6').success(function(data){
                                    $rootScope.MemberList9=data.data.content;
                                })
                            }
                        });
                    }
                });
            });
        }
    }
});
app.controller('page25C',function($rootScope,$scope,$location,$anchorScroll,$http){
    $rootScope.getAllFalse();
    $rootScope.activeTwentyfive=true;
    $rootScope.navPartFour=true;
    $rootScope.isScreenPage=false;
    //自动接受新朋友添加请求
    $scope.timeInterval=5;
    $scope.sendAll=function(){
        for(var i= 0,arr=[];i<$('.new-wx-equip-input10').length;i++){
            if($('.new-wx-equip-input10').eq(i).prop('checked')){
                arr.push($('.new-wx-equip-input10').eq(i).parent().next().attr('title'));
            }
        }
        if(arr.length==0){
            alert('请勾选需要操作的设备!');
        }else if($scope.timeInterval==''){
            alert('请填写时间间隔！');
        }else{
            var sendObj=new FormData();
            sendObj.append('devices',JSON.stringify(arr));
            sendObj.append('interval',$scope.timeInterval);
            $http({
                method:'POST',
                url:$rootScope.link+"/momoPlus/receiveRequest",
                data: sendObj,
                headers: {'Content-Type':undefined},
                transformRequest: angular.identity
            }).success( function ( response ) {
                //上传成功的操作
                if(response.code==200){
                    alert('任务添加成功!');
                    $location.hash('page-top10');
                    $anchorScroll();
                    $http.get($rootScope.link+'/task/getGroupTaskInit?status=-1').success(function(data){
                        if(data.code==200){
                            $rootScope.taskList=data.data;
                            $rootScope.taskAll=true;
                            $rootScope.taskDoing=false;
                            $rootScope.taskWait=false;
                            $rootScope.taskDown=false;
                            $rootScope.newBell=true;
                        }
                    });
                }else if(response.code==300){
                    alert(response.msg);
                }
            });
        }
    };
});
app.controller('page26C',function($rootScope,$scope,$http,$timeout){
    $rootScope.getAllFalse();
    $rootScope.activeTwentySix=true;
    $rootScope.navPartFour=true;
    $rootScope.isScreenPage=false;
    //页面显示
    $scope.outSideBox=true;
    $scope.insideBox=false;
    $scope.assBack=false;
    $scope.resetSelect=true;
    $scope.getInside=function(d){
        $scope.outSideBox=false;
        $scope.insideBox=true;
        $scope.assMoveTo=false;
        $scope.assBack=true;
        $scope.resetSelect=false;
        $scope.assDevice=d;
        $http.get($rootScope.link+'/momo/getMomoByDevice?device='+d).success(function(data){
            $scope.assList=data.data;
        });
    };
    $scope.getAssBack=function(){
        $scope.outSideBox=true;
        $scope.insideBox=false;
        $scope.resetSelect=true;
        $scope.assBack=false;
        $scope.assMoveTo=true;
        var newArr=[];
        for(var i= 0;i<$('.new-wx-equip-input4').length;i++){
            if($('.new-wx-equip-input4').eq(i).prop('checked')){
                newArr.push($('.new-wx-equip-input4').eq(i).parent().next().attr('title'));
            }
        }
        $http.get($rootScope.link+'/device/getDeviceByDevice?devices='+JSON.stringify(newArr)+'&pageNo=1&pageSize=17').success(function(data){
            if(data.code==200){
                $scope.checkAllFour=false;
                $('.page4-floor-one-list').find('span').eq(0).removeClass('on');
                $rootScope.equipList4=data.data.content;
                $('#pages4').Page({
                    totalPages: data.data.totalPages,//分页总数
                    liNums: 5,//分页的数字按钮数(建议取奇数)
                    activeClass: 'activP', //active 类样式定义
                    callBack : function(page){
                        $http.get($rootScope.link+'/device/getDeviceByGroup?groupIds='+JSON.stringify(newArr)+'&pageNo='+page+'&pageSize=17').success(function(data){
                            $rootScope.equipList4=data.data.content;
                        })
                    }
                });
            }
        });
    };
    $timeout(function(){
        $http.get($rootScope.link+'/device/getDeviceByDevice?devices='+JSON.stringify($rootScope.moArray)+'&pageNo=1&pageSize=17').success(function(data){
            console.log(data);
            if(data.code==200){
                $rootScope.equipList4=data.data.content;
                $('#pages4').Page({
                    totalPages: data.data.totalPages,//分页总数
                    liNums: 5,//分页的数字按钮数(建议取奇数)
                    activeClass: 'activP', //active 类样式定义
                    callBack : function(page){
                        $http.get($rootScope.link+'/device/getDeviceByGroup?groupIds='+JSON.stringify($rootScope.moArray)+'&pageNo='+page+'&pageSize=17').success(function(data){
                            $rootScope.equipList4=data.data.content;
                        })
                    }
                });
            }
        });
        alert('请用户手动配置增加陌陌账号！');
    },500);
    //上移
    $scope.isRankOne=function(n){
        return n==1?'on':'';
    };
    $scope.rankDisabled=function(n){
        return n==1?true:false;
    };
    $scope.moveUp=function(n){
        $http.get($rootScope.link+'/momo/up?rank='+n+'&device='+$scope.assDevice).success(function(data){
            if(data.code==200){
                alert('移动成功!');
                $http.get($rootScope.link+'/wechat/getWechatByDevice?device='+$scope.assDevice).success(function(data){
                    $scope.assList=data.data;
                });
            }else{
                alert('移动失败！请重试！');
            }
        });
    };
    //下移
    $scope.isRankLast=function(n){
        return n==20?'on':'';
    };
    $scope.rankDisabledLast=function(n){
        return n==20?true:false;
    };
    $scope.moveDown=function(n){
        $http.get($rootScope.link+'/momo/down?rank='+n+'&device='+$scope.assDevice).success(function(data){
            if(data.code==200){
                alert('移动成功!');
                $http.get($rootScope.link+'/momo/getMomoByDevice?device='+$scope.assDevice).success(function(data){
                    $scope.assList=data.data;
                });
            }else{
                alert('移动失败！请重试！');
            }
        });
    };
    //切换
    $scope.assMoveTo=true;
    $scope.checked=[];
    $scope.selectAll=function(){
        if($scope.checkAllFour){
            $scope.checked=[];
            angular.forEach($rootScope.equipList4,function(i){
                i.checked=true;
                $scope.checked.push(i.device);
            })
        }else{
            angular.forEach($rootScope.equipList4,function(i){
                i.checked=false;
                $scope.checked=[];
            })
        }
    };
    $scope.selectOne=function(){
        angular.forEach($rootScope.equipList4,function(i){
            var index=$scope.checked.indexOf(i.device);
            if(i.checked && index===-1){
                $scope.checked.push(i.device);
            }else if(!i.checked && index!=-1){
                $scope.checked.splice(index,1);
            }
        });
        if($rootScope.equipList4.length===$scope.checked.length){
            $scope.checkAll=true;
        }else{
            $scope.checkAll=false;
        }
    };
    $scope.resetNumber='1';
    $scope.resetButton=function(){
        for(var i= 0,arr=[];i<$('.new-wx-equip-input4').length;i++){
            if($('.new-wx-equip-input4').eq(i).prop('checked')){
                arr.push($('.new-wx-equip-input4').eq(i).parent().next().attr('title'));
            }
        }
        if(arr.length==0){
            alert('请勾选需要切换的设备！');
        }else{
            $http.get($rootScope.link+'/momo/switchMomo?devices='+JSON.stringify(arr)+'&rank='+parseInt($scope.resetNumber)).success(function(data){
                if(data.code==200){
                    alert('添加任务成功！');
                    var newArr=[];
                    for(var i= 0;i<$('.new-wx-equip-input4').length;i++){
                        if($('.new-wx-equip-input4').eq(i).prop('checked')){
                            newArr.push($('.new-wx-equip-input4').eq(i).parent().next().attr('title'));
                        }
                    }
                    $http.get($rootScope.link+'/device/getDeviceByDevice?devices='+JSON.stringify(newArr)+'&pageNo=1&pageSize=17').success(function(data){
                        if(data.code==200){
                            $rootScope.equipList4=data.data.content;
                            $('#pages4').Page({
                                totalPages: data.data.totalPages,//分页总数
                                liNums: 5,//分页的数字按钮数(建议取奇数)
                                activeClass: 'activP', //active 类样式定义
                                callBack : function(page){
                                    $http.get($rootScope.link+'/device/getDeviceByGroup?groupIds='+JSON.stringify(newArr)+'&pageNo='+page+'&pageSize=17').success(function(data){
                                        $rootScope.equipList4=data.data.content;
                                    })
                                }
                            });
                        }
                    });
                    $http.get($rootScope.link+'/task/getGroupTaskInit?status=-1').success(function(data){
                        if(data.code==200){
                            $rootScope.taskList=data.data;
                            $rootScope.taskAll=true;
                            $rootScope.taskDoing=false;
                            $rootScope.taskWait=false;
                            $rootScope.taskDown=false;
                            $rootScope.newBell=true;
                        }
                    });
                }else{
                    alert('添加任务失败！ 请重试！');
                }
            });
        }

    };
});
app.directive('getSave2',function($rootScope,$http){
    return {
        link:function(scope,elem){
            elem.click(function(){
                var assId=elem.attr('mess_id');
                var assNumber=elem.parent().parent().find('.page4-wx-number').val();
                var assPassword=elem.parent().parent().find('.page4-wx-password').val()||'';
                var assNickname=elem.parent().parent().find('.page4-wx-nickname').val()||'';
                var assTag=elem.parent().parent().find('.page4-wx-tag').val()||'';
                var assWnumber=elem.attr('wn')||'';
                if(assNumber==''){
                    alert('请填写需要保存的帐号!');
                }
                else{
                    $http.get($rootScope.link+'/momo/updateMomo?id='+assId+'&number='+assNumber+'&password='+assPassword+'&nickname='+assNickname+'&tag='+assTag).success(function(data){
                        if(data.code==200){
                            alert('保存成功！');
                            elem.hide();
                            elem.next().show();
                            elem.parent().parent().find('input').addClass('on').attr('readonly','readonly');
                        }else{
                            alert('保存失败！请重试！');
                        }
                    });
                }

            });
        }
    }
});
app.directive('getEdit2',function(){
    return {
        link:function(scope,elem){
            elem.click(function(){
                elem.hide();
                elem.prev().show();
                elem.parent().parent().find('input').removeClass('on').removeAttr('readonly');
            });
        }
    }
});
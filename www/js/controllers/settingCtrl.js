/**
 * Created by yuhogyun on 2016. 1. 23..
 */
angular.module('restroom')
  .controller('settingCtrl',settingCtrl);

function settingCtrl($scope,$rootScope,$state,sessionService,settingService,$cordovaDevice){
  console.log('settingCtrl called');
  $scope.gps = $rootScope.gps;

  $scope.execute = function(settings){
    $rootScope.gps = settings;
  };

  $scope.logout = function(){
    sessionService.reset();
    alert('로그아웃 되었습니다.');
    $state.go('tab.main');
  }
}



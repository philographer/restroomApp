/**
 * Created by yuhogyun on 2016. 7. 23..
 */
angular.module('restroom')
  .controller('loginCtrl',loginCtrl);

function loginCtrl($scope,$rootScope,$ionicLoading, $state, loginService, sessionService){
  console.log('sign up Ctrl');
  $ionicLoading.show({
    template: 'Login...'
  }).then(function() {
    loginService.authenticate().then(function(result){
      console.log("auth 통과");
      //result => 토큰이 있음
      loginService.save(result).then(function(res){
        sessionService.setUserInfo(res['data']);
        $ionicLoading.hide();
        $state.go('tab.main');
      }).catch(function(error){

      });
    });
  });
};

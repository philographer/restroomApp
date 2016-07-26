/**
 * Created by yuhogyun on 2016. 7. 23..
 */
angular.module('restroom')
  .controller('loginCtrl',loginCtrl);

function loginCtrl($scope,$rootScope,$ionicLoading, $state, loginService, sessionService){
  $scope.$on("$ionicView.enter", function(event, data){
    console.log('sign up Ctrl');
    if(!sessionService.isUserSignedIn()){
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
            alert(JSON.stringify(error));
          });
        });
      });
    }else{
      alert("이미 로그인 되어있습니다.");
      $state.go('tab.main');
    }
  });
};

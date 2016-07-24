/**
 * Created by yuhogyun on 2016. 7. 17..
 */

angular.module('restroom')
  .service('sessionService', sessionService);

function sessionService($rootScope, loginService){
  this.localStorageKey = "__SESSION_INFO";
  try {
    $rootScope.currentUser = JSON.parse(localStorage.getItem(this.localStorageKey) || "{}");
  } catch(e) {
    $rootScope.currentUser = {};
  }

  this.getCurrentUser = function() {
    return $rootScope.currentUser;
  };

  this.isUserSignedIn = function() {
    console.log(this.getCurrentUser());

    if(this.getCurrentUser()['username'] != undefined) {
      return true;
    } else {
      return false;
    }
  };

  this.setUserInfo = function(info) {
    angular.extend($rootScope.currentUser, info);
    localStorage.setItem(this.localStorageKey, JSON.stringify($rootScope.currentUser));
  };

  this.reset = function() {
    $rootScope.currentUser = {};
    localStorage.setItem(this.localStorageKey, JSON.stringify($rootScope.currentUser));
  };
}

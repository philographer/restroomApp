/**
 * Created by yuhogyun on 2016. 7. 14..
 */
angular.module('restroom')
  .service('loginService', loginService);

function loginService($q, $cordovaOauth,$http) {

  var self = this;

  this.authenticate = function () {
    var deferred = $q.defer();
    $cordovaOauth.facebook("1749580705320334", ["email"]).then(function (result) {
      console.log("Response Object -> " + JSON.stringify(result));
      deferred.resolve(result['access_token']);
    }, function (error) {
      alert("There was a problem signing in!  See the console for logs");
      console.log(error.toString());
      deffer.reject(error);
    });
    return deferred.promise;
  };

  this.save = function (param) {
    console.log("save service");
    console.log(param);
    var deferred = $q.defer();
    $http.post('http://ec2-52-78-104-123.ap-northeast-2.compute.amazonaws.com:3000/auth/facebook',{
      access_token: param
    }
    ).then(function(result){
      console.log("success");
      deferred.resolve(result);
    }).catch(function(error){
      console.log("error");
      console.log(JSON.stringify(error));
      deferred.reject(error);
    });
    return deferred.promise;
  };
}

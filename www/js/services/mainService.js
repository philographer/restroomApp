/**
 * Created by yuhogyun on 2016. 1. 25..
 */
angular.module('restroom')
        .service('mainService', mainService);

function mainService($q, $http){

  var self = this;

  self.countReview = function(){
    var deferred = $q.defer();

    return deferred.promise;
  };

  self.countRestroom = function(){
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: 'http://ec2-52-78-104-123.ap-northeast-2.compute.amazonaws.com:3000/restroom/count'
    }).then(function successCallback(response) {
      deferred.resolve(response);
    }, function errorCallback(response) {
      deferred.reject(response);
    });
    return deferred.promise;
  };

  self.countStar = function(){
    var deferred = $q.defer();

    return deferred.promise;
  };
};

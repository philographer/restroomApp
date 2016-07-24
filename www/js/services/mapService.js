/**
 * Created by yuhogyun on 2016. 1. 23..
 */
angular.module('restroom')
   .service('mapService', mapService);

function mapService($q, $ionicLoading, $http){

  console.log("mapService called");

  var self = this;

  this.createComment = function (restroom_id, user_id, star, comment, username){
    var deferred = $q.defer();

    console.log(restroom_id);
    console.log(user_id);
    console.log(star);
    console.log(comment);
    console.log(username);

    $http.post('http://ec2-52-78-104-123.ap-northeast-2.compute.amazonaws.com:3000/restroom/comment',{
      data:{
        restroom_id: restroom_id,
        user_id: user_id,
        star: star,
        comment: comment,
        username: username
      }
    }).then(function(result){
      deferred.resolve(result);
    }).catch(function(error){
      deferred.reject(error);
    });

    return deferred.promise;
  };

  this.briefRestroom = function(restroom_id){
    $ionicLoading.show();
    var deferred = $q.defer();
    $http.get('http://ec2-52-78-104-123.ap-northeast-2.compute.amazonaws.com:3000/restroom/brief',{
      params:{
        restroom_id: restroom_id
      }}).then(function(result){
      console.log(result);
      var result = result['data'];

      for(var i=0; i < 5; i++) //별점 초기화
      {
        $('.rate').eq(i).removeClass('ion-ios-star').addClass('ion-ios-star-outline');
      }
      for(var i=0; i<result['star_avg']; i++)//별로 채워줌
      {
        $('.rate').eq(i).removeClass('ion-ios-star-outline').addClass('ion-ios-star');
      }

      document.getElementById('comment_span').innerHTML = result['recent_comment'];

      deferred.resolve(result);
    }).catch(function(error){
      deferred.resolve(error);
    });
    return deferred.promise;
  };

  this.readCommentDetail = function(restroom_id){
    var deferred = $q.defer();
    $http.get('http://ec2-52-78-104-123.ap-northeast-2.compute.amazonaws.com:3000/restroom/comment',{
      params:{
        restroom_id: restroom_id
      }}).then(function(result){
      console.log(result);
      deferred.resolve(result);
    }).catch(function(error){
      deferred.resolve(error);
    });
    return deferred.promise;
  };

  this.countStar = function(restroom_id){
    var deferred = $q.defer();
    $http.get('http://ec2-52-78-104-123.ap-northeast-2.compute.amazonaws.com:3000/restroom/count/star',{
      params:{
        restroom_id: restroom_id
      }}).then(function(result){
      console.log(result);
      deferred.resolve(result);
    }).catch(function(error){
      deferred.resolve(error);
    });
    return deferred.promise;
  };


  this.createRestroom = function(scope){
    var deferred = $q.defer();
    var latlng = scope.latlng.lat + ',' + scope.latlng.lng;

    console.log('scope.user_id is' + scope.user_id);
    $http.post('http://ec2-52-78-104-123.ap-northeast-2.compute.amazonaws.com:3000/restroom',{
      data:{
        name: scope.name,
        contact: scope.contact ,
        address: scope.address,
        agency: scope.agency,
        open: scope.open, 
        division: scope.division,
         latlng: latlng,
        user_id: scope.user_id
      }
    }).then(function(result){
      deferred.resolve(result);
    }).catch(function(error){
      deferred.reject(error);
    });

    return deferred.promise;
  };

  //retrieve all object
  this.loadRestroom = function(latlng){
    $ionicLoading.show();
    var deferred = $q.defer();
    var maxLat = parseFloat(parseFloat(latlng.lat) + 0.2);
    var maxLng = parseFloat(parseFloat(latlng.lng) + 0.2);
    var minLat = parseFloat(parseFloat(latlng.lat) - 0.2);
    var minLng = parseFloat(parseFloat(latlng.lng) - 0.2);
    $http.get('http://ec2-52-78-104-123.ap-northeast-2.compute.amazonaws.com:3000/restroom',{
      params:{
        minLat: minLat,
        maxLat: maxLat,
        minLng: minLng,
        maxLng: maxLng
      }}).then(function(result){
        console.log(result);
        deferred.resolve(result);
    }).catch(function(error){
      deferred.resolve(error);
    });
    return deferred.promise;
  };

  //find one restroom by restroom id
  this.findRestroom = function(restroom_id){
    var deferred = $q.defer();
    $http.get('http://ec2-52-78-104-123.ap-northeast-2.compute.amazonaws.com:3000/restroom/detail',{
      params:{
        restroom_id: restroom_id
      }}).then(function(result){
      console.log(result);
      deferred.resolve(result);
    }).catch(function(error){
      deferred.resolve(error);
    });
    return deferred.promise;
  };

}

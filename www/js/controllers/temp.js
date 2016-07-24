console.log("다 찾았다");
$ionicLoading.hide();





var watchOptions = {timeout: 10000, enableHighAccuracy: false};

//주기적으로 현재위치 갱신함
var timer = setInterval(function () {
  $cordovaGeolocation
    .getCurrentPosition(watchOptions)
    .then(function (position) {
        now_lng = position.coords.longitude;
        now_lat = position.coords.latitude;
        //console.log(now_lng + ',' + now_lat);
        //window['mousemove'].innerHTML = position.coords.latitude + ',' + position.coords.longitude;
        myLayer.setGeoJSON({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [now_lng, now_lat]
          },
          properties: {
            'title': '출발지 설정',
            'marker-color': '#ff8888',
            'marker-symbol': 'pitch'
          }
        });
        $ionicLoading.hide();
      },
      function (error) {
        timer.clearInterval();
        console.log("워치에러");
        $ionicLoading.hide();
        if ($rootScope.gps != true){
          $scope.showError("gps 설정을 화인해 주세요.");
        }
        $scope.showError(JSON.stringify(error));
        console.log('Error w/ watchPosition: ' + JSON.stringify(error));
      });
  //console.log("타이머 실행중....");
}, 1000);

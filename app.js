var CLIENT_ID = '329290453260-nkl4lfkduqkh8nfgvm5lr64cffo40o7n.apps.googleusercontent.com';
var API_KEY = 'AIzaSyCuo7VXnGv-0_m4euebERrTbCayEmiTIbk';
var filePicker = angular.module('filePicker', ['lk-google-picker']);
filePicker.config(['lkGoogleSettingsProvider', function (lkGoogleSettingsProvider) {
  lkGoogleSettingsProvider.configure({
    apiKey   : API_KEY,
    clientId : CLIENT_ID
  });
}])
filePicker.controller('mainController', function($scope){
  $scope.files = [];

  $scope.onLoaded = function () {
    console.log('Google Picker loaded!');
  }

  $scope.onPicked = function (docs) {
    angular.forEach(docs, function (file, index) {
      $scope.files.push(file);
      console.log(file);
      window.location = file.url;
    });
  }

  $scope.onCancel = function () {
    console.log('Google picker close/cancel!');
  }
})

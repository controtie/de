angular.module('thotwell.threads', [])
.controller('ThreadController', function ($scope, Threads) {
  $scope.data = {};
  $scope.

  Threads.getAll()
  .then(function(result) {

  });


});

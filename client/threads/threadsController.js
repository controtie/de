//This controller will fetch threads that are still open.
angular.module('thotwell.threads', ['thotwell.services'])
.controller('OpenThreadController', function ($scope, $location, Threads) {
  $scope.threads = {};
  Threads.getOpen()
  .then(function(result) {
    $scope.threads = result;
  });
  $scope.go = function () {
    $location.path('/new');
  };
  $scope.closeThread = function (entry) {
    Threads.moveOne(entry);
  };
  $scope.reveal = function (key) {
    console.log(key);
  };
})

//This controller will fetch closed threads.
.controller('ClosedThreadController', function ($scope, Threads) {
  $scope.threads = {};
  Threads.getClosed()
  .then(function(result) {
    $scope.threads = result;
  });
})
//This conrtoller will handle form to post new threads.
.controller('NewThreadController', function ($scope, Threads) {
  $scope.threads = {};
  $scope.addThread = function () {
  var threadObj = {
    username: $scope.username,
    subject: $scope.subject,
    text: $scope.text,
    bounty: $scope.bounty
  };
  Threads.addOne(threadObj);
  }
});

//This controller will fetch threads that are still open.
angular.module('thotwell.openThreads', ['thotwell.services'])
.controller('OpenThreadController', function ($scope, $location, Threads) {
  $scope.threads = {};
  Threads.getOpen()
  .then(function(result) {
    $scope.threads = result;
  });
  $scope.go = function () {
    $location.path('/new');
  };
});

//This controller will fetch closed threads.
angular.module('thotwell.closedThreads', ['thotwell.services'])
.controller('ClosedThreadController', function ($scope, Threads) {
  $scope.threads = {};
  Threads.getClosed()
  .then(function(result) {
    $scope.threads = result;
  });
});
//This conrtoller will handle form to post new threads.
angular.module('thotwell.newThreads', ['thotwell.services'])
.controller('NewThreadController', function ($scope, Threads) {
  $scope.threads = {};
  Threads.getClosed()
  .then(function(result) {
    $scope.threads = result;
  });
});

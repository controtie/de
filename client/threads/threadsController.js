//This controller will fetch threads that are still open.
angular.module('thotwell.openThreads', ['thotwell.services'])
.controller('OpenThreadController', function ($scope, Threads) {
  $scope.threads = {};
  Threads.getOpen()
  .then(function(result) {
    $scope.threads = result;
  });
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

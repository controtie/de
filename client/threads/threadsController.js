//This controller will fetch threads that are still open.
angular.module('thotwell.threads', ['thotwell.services'])
.controller('OpenThreadController', function ($scope, $location, Threads) {
  $scope.threads = {};
  $scope.newComm;
  Threads.getOpen()
  .then(function(result) {
    $scope.threads = result;
  });
  $scope.go = function () {
    $location.path('/new');
  };
  $scope.closeThread = function (entry) {
    Threads.moveOne(entry);
    Threads.getOpen()
    .then(function(result) {
      $scope.threads = result;
    });
  };
  $scope.reveal = function (key) {
    console.log(key);
    console.log($newComment);
  };
  $scope.addComment = function (thread, newComm) {
    Threads.addComment(thread._id, newComm);
    Threads.getOpen()
    .then(function(result) {
      $scope.threads = result;
    });
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
.controller('NewThreadController', function ($scope, $location, Threads) {
  $scope.threads = {};
  $scope.addThread = function () {
    var threadObj = {
      username: $scope.username,
      subject: $scope.subject,
      text: $scope.text,
      pub_key: $scope.pub_key,
      priv_key: $scope.priv_key,
      bounty: $scope.bounty
    };
    Threads.addOne(threadObj);
    $location.path('/open');
  }
  $scope.genAddress = function () {
    Threads.getAddress()
      .then(function (res) {
        console.log(res);
        $scope.priv_key = res.data.priv_key; 
        $scope.pub_key = res.data.pub_key; 
      });
  }
});

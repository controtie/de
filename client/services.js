angular.module('thotwell.services', [])
.factory('Threads', function ($http) {
  var getOpen = function() {
    return $http({
      method: 'GET',
      url: '/openThreads', 
    }).then(function(resp) {
      return resp.data;
    });
  };

  var getClosed = function() {
    return $http({
      method: 'GET',
      url: '/closedThreads', 
    }).then(function(resp) {
      return resp.data;
    });
  };
  var addOne = function(entry) {
    return $http({
      method: 'POST',
      url: '/addThread', 
      data: entry
    }).then(function(resp) {
      return resp;
    });
  };

  var moveOne = function(entry) {
    return $http({
      method: 'POST',
      url: '/moveThread', 
      data: entry
    }).then(function(resp) {
      return resp;
    });
  };

  return {
    getOpen: getOpen,
    getClosed: getClosed,
    moveOne: moveOne,
    addOne: addOne
  };
});

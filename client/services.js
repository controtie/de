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

  var addOne = function(link) {
    return $http({
      method: 'POST',
      url: '/api/links', 
      data: link
    }).then(function(resp) {
      return resp;
    });
  };

  return {
    getOpen: getOpen,
    getClosed: getClosed,
    addOne: addOne
  };
});

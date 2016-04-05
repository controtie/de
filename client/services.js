angular.module('threads.services', [])

.factory('Threads', function ($http) {
  var getAll = function() {
    return $http({
      method: 'GET',
      url: '/threads', 
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
    getAll: getAll,
    addOne: addOne
  };
});

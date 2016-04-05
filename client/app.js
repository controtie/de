angular.module('thotwell', [
  'thotwell.threads',
  'thotwell.services',
  'ngRoute'
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/open', {
      templateUrl: './threads/openThreads.html',
      controller: 'OpenThreadController'
    })
  .when('/closed', {
    templateUrl: './threads/closedThreads.html',
    controller: 'ClosedThreadController'
  })
  .when('/new', {
    templateUrl: './threads/newThread.html',
    controller: 'NewThreadController'
  })

  // .otherwise({redirectTo: '/'});
});

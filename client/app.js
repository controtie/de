angular.module('thotwell', [
  'thotwell.openThreads',
  'thotwell.closedThreads',
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

    // .otherwise({redirectTo: '/'});
});

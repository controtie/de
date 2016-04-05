angular.module('thotwell', [
  'thotwell.threads',
  'ngRoute'
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/threads', {
      templateUrl: './threads/threads.html',
      controller: 'ThreadController'
    })
    .otherwise({redirectTo: '/'});
});

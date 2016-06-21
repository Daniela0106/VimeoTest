var app = angular.module('vimeo1', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/main');

  /**@ngInject**/
  $stateProvider
    .state('main', {
      url:'/main',
      templateUrl: 'main.html',
      controller: 'mainCtrl'
    })
    .state('details', {
      url:'/details',
      templateUrl: 'details.html',
      controller: 'detailsCtrl'
    })
    .$stateParams('display-category',{
      url:'/main',
      templateUrl: 'main.html',
      controller: 'mainCtrl'
    } )
}]);

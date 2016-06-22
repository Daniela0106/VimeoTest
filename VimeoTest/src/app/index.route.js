(function(){
  'use strict';

 //var vimeo1 = angular.module('vimeo1', ['ui.router']);

  angular
  .module('Vimeo1')
  .config(routerConfig);

  /**@ngInject*/
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: 'main.html',
        controller: 'MainController',
        controllerAs: 'main',
        views: {
          '': {templateUrl: 'main.html'},
          'content@': {
            template: "Anything goes here"
          }
        },
        resolve:{
/*MAKING THE RESOLVE HERE*/
        }
      })
      .state('details', {
        url: '/details',
        templateUrl: 'details.html',
        controller: 'DetailsController',
        controllerAs: 'vm'
      });
    $urlRouterProvider.otherwise('/404Page');

  }
})();

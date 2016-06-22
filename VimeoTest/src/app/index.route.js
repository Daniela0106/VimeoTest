(function(){
  'use strict';

  var app = angular.module('vimeo1', ['ui.router']);

  angular
  .module('vimeo1')
  .config(routerConfig);

  /**@ngInject*/
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: 'main.html',
        controller: 'mainCtrl',
        controllerAs: 'main',
        views: {
          '': {templateUrl: 'index.html'},
          'content@': {
            template: "Anything goes here"
          }
        }
      })
      .state('details', {
        url: '/details',
        templateUrl: 'details.html',
        controller: 'detailsCtrl'
      })
      .$stateParams('display-category', {
        url: '/main',
        templateUrl: 'main.html',
        controller: 'mainCtrl'
      });

    $urlRouterProvider.otherwise('/404Page');

  }
})();
//$state.go('main');


/*
*
(function() {
 'use strict';

   angular
    .module('vimeoTest')
    .config(routerConfig);

--nginject---------
function routerConfig($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
  url: '/',
  templateUrl: 'app/main/main.html',
  controller: 'MainController',
  controllerAs: 'main'
  });

  $urlRouterProvider.otherwise('/');
  }

})();
*
*
*
* */

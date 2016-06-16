var vimeoProject = angular.module('vimeoProject', [''])

(function() {
  'use strict';

  angular
    .module('vimeoTest')
    .config(routerConfig);

  /** @ngInject */
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


/*
// app.js
 var routerApp = angular.module('routerApp', ['ui.router']);

 routerApp.config(function($stateProvider, $urlRouterProvider) {

 $urlRouterProvider.otherwise('/home');

 $stateProvider

 // HOME STATES AND NESTED VIEWS ========================================
 .state('home', {
 url: '/home',
 templateUrl: 'partial-home.html'
 })

 // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
 .state('about', {
 // we'll get to this in a bit
 });

 });
* */

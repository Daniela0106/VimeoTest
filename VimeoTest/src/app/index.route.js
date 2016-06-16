var vimeoProject = angular.module('vimeoProject', ['ui.router'])

(function() {
  'use strict';
  var vm = this;
  vm.awesomeThings = [];

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



/******PREVIOUS WORKING ANGULAR CODE********
  .controller('MainController', MainController);


-  function MainController($timeout, webDevTec, toastr) {
  -    var vm = this;
  +  function MainController() {
    +    //var vm = this;

      -    vm.awesomeThings = [];
    -    vm.classAnimation = '';
    -    vm.creationDate = 1466010877186;
    -    vm.showToastr = showToastr;

    -    activate();
    -
      -    function activate() {
        -      getWebDevTec();
        -      $timeout(function() {
          -        vm.classAnimation = 'rubberBand';
          -      }, 4000);
        -    }
    -
    -    function showToastr() {
      -      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      -      vm.classAnimation = '';
      -    }
    -
    -    function getWebDevTec() {
      -      vm.awesomeThings = webDevTec.getTec();
      -
        -      angular.forEach(vm.awesomeThings, function(awesomeThing) {
          -        awesomeThing.rank = Math.random();
          -      });
      -    }
  }
})();
View
 *
 *
 * */

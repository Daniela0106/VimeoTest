/** @ngInject */

var app = angular.module('vimeo', []);
//$routeProvider is the name of the directive
app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/main', {
      templateUrl: 'main.html',
      controller: ''
    }).
    when('/showOrders', {
      templateUrl: 'templates/show-orders.html',
      controller: 'ShowOrdersController'
    }).
    otherwise({
      redirectTo: '/main.html'
    });
  }]);



//THIS WORKS, BUT I'M STILL NOT LOADING THE VIDEO

/**@ngInject

var app = angular.module('vimeo', []);

(function() {
  'use strict';


  app.controller('VimeoController', function () {
    this.videos = videosDetails;
  });

  var videosDetails = [
    //Get videos from Vimeo's api
    //But for now, just an example to check the app is working:
    {
      name: 'My video',
      description: 'Blah, ici autre chose.'
    },
    {
      name: 'Another video',
      description: 'Beaucoup de choses ici maitenant s\'il vous plait!'
    }
  ]

})();


**/



/**
 var sampleApp = angular.module('phonecatApp', []);

 sampleApp .config(['$routeProvider',
 function($routeProvider) {
    $routeProvider.
      when('/addOrder', {
        templateUrl: 'templates/add-order.html',
        controller: 'AddOrderController'
      }).
      when('/showOrders', {
        templateUrl: 'templates/show-orders.html',
        controller: 'ShowOrdersController'
      }).
      otherwise({
        redirectTo: '/addOrder'
      });
  }]);
 * **/

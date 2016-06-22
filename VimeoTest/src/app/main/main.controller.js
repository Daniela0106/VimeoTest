
var app = angular.module('vimeo1', ['ui.router']);
app.controller('mainCtrl', function() {

  //var controller: 'MainController';
  var vm = this;

  vm.thumbnail = "";
  vm.title = 'mainCtrl';
  vm.details = [
    {description: 'Something, Something, Something, Something'},
    {author: 'Ella'},
    {numberOfViews: '2.1M'},
    {numberOfComments: '16K'}
  ];

});




/**
resolve

all of the directives

$scope doesn't go well with vm
 **/

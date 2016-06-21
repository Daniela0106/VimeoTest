var app = angular.module('vimeo1', []);
app.controller('mainCtrl', function($scope, $http) {
  $http.get("welcome.htm")
    .then(function(response) {
      $scope.myWelcome = response.data;
    });
});


/**
resolve

all of the directives
**/

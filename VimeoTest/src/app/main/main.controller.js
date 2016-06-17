/** @ngInject */
(function() {
  'use strict';

  var app = angular.module('vimeo', []);

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

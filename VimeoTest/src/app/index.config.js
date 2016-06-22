(function() {
  'use strict';

  angular
    .module('Vimeo1')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
    
  }

})();

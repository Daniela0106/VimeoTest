(function() {
  'use strict';

  angular
    .module('vimeo1')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

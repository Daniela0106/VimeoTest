(function() {
  'use strict';

  angular
    .module('Vimeo1')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

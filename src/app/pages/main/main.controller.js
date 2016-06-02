(function () {
  'use strict';

  angular
    .module('app')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($rootScope, $state, DialogService) {
    var vm = this;

    vm.dialogs = DialogService.getData();
    
    
    vm.selectDialog = function (id) {
      $state.go('main.messages', { messagesId: id }).then(function () {
        $rootScope.$broadcast('messagesChange');
      });
    };
  }
})();

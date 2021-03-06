(function () {
  'use strict';

  angular
    .module('app')
    .controller('SmartController', SmartController);

  /** @ngInject */
  function SmartController($scope, $mdSidenav,$rootScope, $http, $state) {
    var vm = this;
    $scope.openLeftMenu = function () {
      $mdSidenav('left').toggle();
    };
    console.log($state.params.applianceId)
    getData();

    function getData() {
      $http.post('http://sse.logicenergy.com/manager/sse/api/v1/login', {
        "email": "edu@logic-energy.com",
        "password": "logicenergy"
      }).then(function (ress) {
        console.log(ress.data.response.response_body.user.access_token);
        vm.token = ress.data.response.response_body.user.access_token;
        $http.post('http://sse.logicenergy.com/manager/sse/api/v1/dashboard?access_token=' + vm.token).then(function (ress) {
          console.log(ress.data.response.response_body.appliances);
          var object = ress.data.response.response_body.appliances;
          for (var key in object) {
            if (object.hasOwnProperty(key)) {
              var element = object[key];
              //if (element.appliance_id === $state.params.applianceId) {
              let tem = element.comfort_status[0].$$hashKey = "sd"
              element.comfort_status.push(tem)
              vm.data = element.comfort_status;

              //}
            }
          }
        });
      });

    }

  }
})();

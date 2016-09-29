(function () {
    'use strict';

    angular
        .module('app')
        .factory('TempDialogService', TempDialogService);

    /** @ngInject */
    function TempDialogService($http, $mdDialog, AuthService) {
        var data = null;
        var token = '';
        var item;
        var service = {
            showDialog: showDialog,
            getItem: getItem
        };


        return service;

        function getItem() {
            return item;
        }

        function showDialog(i, ev) {
            item = i;
            $mdDialog.show({
                controller: DialogController,
                templateUrl: '../app/common/tempDialog/tempDialog.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            })
                .then(function (item) {

                    $http.post('http://sse.logicenergy.com/manager/sse/api/v1/appliance/' + item.appliance_id + '?access_token=' + AuthService.getToken(), { "appliance": item }).then(function (ress) {
                        console.log(ress);
                    });
                }, function () {
                });
        };
        function DialogController($scope, $mdDialog, TempDialogService) {
            var item = TempDialogService.getItem();
            console.log(item, item.comfort_status[item.comfort_status.length - 1].profiles[item.comfort_status[item.comfort_status.length - 1].profiles.length - 1].set_point);

            $scope.value = item.comfort_status[item.comfort_status.length - 1].profiles[item.comfort_status[item.comfort_status.length - 1].profiles.length - 1].set_point;

            $scope.hide = function () {
                $mdDialog.hide();
            };

            $scope.cancel = function () {
                $mdDialog.cancel();
            };

            $scope.answer = function (answer) {
                console.log($scope.value)
                item.comfort_status[item.comfort_status.length - 1].profiles[item.comfort_status[item.comfort_status.length - 1].profiles.length - 1].set_point = $scope.value;
                $mdDialog.hide(item);
            };
       
        }
    }
})();


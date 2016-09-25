(function () {
    'use strict';

    angular
        .module('app')

        .directive('barHoris',
        function ($timeout) {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    chart: '@'
                },
                template: '<div id="charthoris{{chart}}" style="height: 90%; margin: 0 auto;width: 100%;"></div>',
                link: function (scope, element, attrs) {
                    var chart = false;

                    var initChart = function () {
                        if (chart) chart.destroy();
                        var config = scope.config || {};


                    };

                    $timeout(function () {
                        initChart()
                    }, 100);
                }
            }
        });
})();

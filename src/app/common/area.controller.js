(function () {
    'use strict';

    angular
        .module('app')

        .directive('area',
        function ($timeout) {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    chart: '@',
                    data: '='
                },
                template: '<div id="chartdiv{{chart}}" style="height: 90%; margin: 0 auto;width: 100%;"></div>',
                link: function (scope, element, attrs) {
                    var chart = false;
               
                    var initChart = function () {
                        if (chart) chart.destroy();
                        var config = scope.config || {};
                        chart = AmCharts.makeChart("chartdiv" + scope.chart, {
                            "type": "serial",
                            "categoryField": "category",
                            "startDuration": 1,
                            "categoryAxis": {
                                "gridPosition": "start",
                                "position": "top",
                                "axisAlpha": 0,
                                "gridAlpha": 0,
                            },

                            "trendLines": [],
                            "graphs": [
                                {
                                    "balloonText": "[[title]] of [[category]]:[[value]]",
                                    "fillAlphas": 0.7,
                                    "id": "AmGraph-4",
                                    "lineAlpha": 0,
                                    "valueField": "column-4"
                                },
                                {
                                    "balloonText": "[[title]] of [[category]]:[[value]]",
                                    "fillAlphas": 0.7,
                                    "id": "AmGraph-1",
                                    "lineAlpha": 0,
                                    "valueField": "column-1"
                                },
                                {
                                    "balloonText": "[[title]] of [[category]]:[[value]]",
                                    "fillAlphas": 0.7,
                                    "id": "AmGraph-2",
                                    "lineAlpha": 0,
                                    "valueField": "column-2"
                                },
                                {
                                    "balloonText": "[[title]] of [[category]]:[[value]]",
                                    "fillAlphas": 0.7,
                                    "id": "AmGraph-3",
                                    "lineAlpha": 0,
                                    "valueField": "column-3"
                                },
                                
                            ],
                            "guides": [],
                            "valueAxes": [
                                {
                                    "id": "ValueAxis-1",
                                    "labelsEnabled": false,
                                    "position": "top",
                                    "axisAlpha": 0,
                                    "gridAlpha": 0,
                                }
                            ],
                            "allLabels": [],
                            "balloon": {},
                            "legend": {
                                "enabled": false
                            },
                            "titles": [
                                {
                                    "id": "Title-1",
                                    "text": ""
                                }
                            ],
                            "dataProvider": [
                                {
                                    "category": "",
                                    "column-1": 8,
                                    "column-2": 5,
                                      "column-3": 3,
                                    "column-4": 2
                                },
                                {
                                    "category": "",
                                    "column-1": 6,
                                    "column-2": 7,
                                      "column-3": 2,
                                    "column-4": 3
                                },
                                {
                                    "category": "",
                                    "column-1": 2,
                                    "column-2": 3,
                                      "column-3": 4,
                                    "column-4": 7
                                },
                                {
                                    "category": "",
                                    "column-1": 1,
                                    "column-2": 3,
                                      "column-3": 2,
                                    "column-4": 1
                                },
                                {
                                    "category": "",
                                    "column-1": 2,
                                    "column-2": 1,
                                      "column-3": 4,
                                    "column-4": 4
                                },
                                {
                                    "category": "",
                                    "column-1": 3,
                                    "column-2": 2,
                                      "column-3": 3,
                                    "column-4": 2
                                },
                                {
                                    "category": "",
                                    "column-1": 6,
                                    "column-2": 8,
                                      "column-3": 3,
                                    "column-4": 2
                                }, {
                                    "category": "",
                                    "column-1": 8,
                                    "column-2": 5,
                                      "column-3": 4,
                                    "column-4": 5
                                },
                                {
                                    "category": "",
                                    "column-1": 6,
                                    "column-2": 7,
                                      "column-3": 5,
                                    "column-4": 6
                                },
                                {
                                    "category": "",
                                    "column-1": 2,
                                    "column-2": 3,
                                      "column-3": 7,
                                    "column-4": 3
                                },
                                {
                                    "category": "",
                                    "column-1": 1,
                                    "column-2": 3,
                                      "column-3": 3,
                                    "column-4": 2
                                },
                                {
                                    "category": "",
                                    "column-1": 2,
                                    "column-2": 1,
                                      "column-3": 3,
                                    "column-4": 2
                                },
                                {
                                    "category": "",
                                    "column-1": 3,
                                    "column-2": 2,
                                      "column-3": 4,
                                    "column-4": 6
                                },
                                {
                                    "category": "",
                                    "column-1": 6,
                                    "column-2": 8,
                                      "column-3": 5,
                                    "column-4": 5
                                },
                                               {
                                    "category": "",
                                    "column-1": 8,
                                    "column-2": 5,
                                      "column-3": 3,
                                    "column-4": 6
                                },
                                {
                                    "category": "",
                                    "column-1": 6,
                                    "column-2": 7,
                                      "column-3": 3,
                                    "column-4": 2
                                },
                                {
                                    "category": "",
                                    "column-1": 2,
                                    "column-2": 3,
                                      "column-3": 6,
                                    "column-4": 6
                                },
                                {
                                    "category": "",
                                    "column-1": 1,
                                    "column-2": 3,
                                      "column-3": 2,
                                    "column-4": 3
                                },
                                {
                                    "category": "",
                                    "column-1": 2,
                                    "column-2": 1,
                                      "column-3": 5,
                                    "column-4": 5
                                },
                                {
                                    "category": "",
                                    "column-1": 3,
                                    "column-2": 2,
                                      "column-3": 6,
                                    "column-4": 6
                                },
                                {
                                    "category": "",
                                    "column-1": 6,
                                    "column-2": 8,
                                      "column-3": 5,
                                    "column-4": 5
                                },
                                               {
                                    "category": "",
                                    "column-1": 8,
                                    "column-2": 5,
                                      "column-3": 3,
                                    "column-4": 2
                                },
                                {
                                    "category": "",
                                    "column-1": 6,
                                    "column-2": 7,
                                      "column-3": 7,
                                    "column-4": 6
                                },
                                {
                                    "category": "",
                                    "column-1": 2,
                                    "column-2": 3,
                                      "column-3": 3,
                                    "column-4": 2
                                },
                                {
                                    "category": "",
                                    "column-1": 1,
                                    "column-2": 3,
                                      "column-3": 3,
                                    "column-4": 2
                                },
                                {
                                    "category": "",
                                    "column-1": 2,
                                    "column-2": 1,
                                      "column-3": 3,
                                    "column-4": 5
                                },
                                {
                                    "category": "",
                                    "column-1": 3,
                                    "column-2": 2,
                                      "column-3": 4,
                                    "column-4": 4
                                },
                                {
                                    "category": "",
                                    "column-1": 6,
                                    "column-2": 8,
                                      "column-3": 1,
                                    "column-4": 1
                                }
                            ]
                        });


                    };

                    $timeout(function () {
                        initChart();

                    }, 100);
                }
            }
        });
})();

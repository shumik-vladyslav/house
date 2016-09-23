(function () {
    'use strict';

    angular
        .module('app')

        .directive('myElem',
        function () {
            return {
                restrict: 'E',
                replace: true,

                template: '<div id="chartdiv" style="height: 90%; margin: 0 auto"></div>',
                link: function (scope, element, attrs) {

                    var chart = false;

                    var initChart = function () {
                        if (chart) chart.destroy();
                        var config = scope.config || {};
                        chart = AmCharts.makeChart("chartdiv", {
                            "theme": "light",
                            "type": "serial",
                            "startDuration": 2,
                            "dataProvider": [{
                                "country": "00:00",
                                "visits": 25,
                                "color": "#FF0F00",
                                "show": true
                            }, {
                                    "country": "01:00",
                                    "visits": 21,
                                    "color": "#FF6600",
                                    "show": false
                                }, {
                                    "country": "02:00",
                                    "visits": 22,
                                    "color": "#FF9E01",
                                    "show": false
                                }, {
                                    "country": "03:00",
                                    "visits": 15,
                                    "color": "#FCD202",
                                    "show": false
                                }, {
                                    "country": "04:00",
                                    "visits": 17,
                                    "color": "#F8FF01",
                                    "show": false
                                }, {
                                    "country": "05:00",
                                    "visits": 18,
                                    "color": "#B0DE09",
                                    "show": false
                                }, {
                                    "country": "06:00",
                                    "visits": 19,
                                    "color": "#04D215",
                                    "show": true
                                }, {
                                    "country": "07:00",
                                    "visits": 29,
                                    "color": "#0D8ECF",
                                    "show": false
                                }, {
                                    "country": "08:00",
                                    "visits": 25,
                                    "color": "#0D52D1",
                                    "show": false
                                }, {
                                    "country": "09:00",
                                    "visits": 24,
                                    "color": "#2A0CD0",
                                    "show": false
                                }, {
                                    "country": "10:00",
                                    "visits": 25,
                                    "color": "#8A0CCF",
                                    "show": false
                                }, {
                                    "country": "11:00",
                                    "visits": 24,
                                    "color": "#CD0D74",
                                    "show": false
                                }, {
                                    "country": "12:00",
                                    "visits": 23,
                                    "color": "#754DEB",
                                    "show": true
                                }, {
                                    "country": "13:00",
                                    "visits": 23,
                                    "color": "#DDDDDD",
                                    "show": false
                                }, {
                                    "country": "14:00",
                                    "visits": 23,
                                    "color": "#333333",
                                    "show": false
                                }, {
                                    "country": "15:00",
                                    "visits": 23,
                                    "color": "#333333",
                                    "show": false
                                }, {
                                    "country": "16:00",
                                    "visits": 23,
                                    "color": "#333333",
                                    "show": false
                                }, {
                                    "country": "17:00",
                                    "visits": 23,
                                    "color": "#333333",
                                    "show": false
                                }, {
                                    "country": "18:00",
                                    "visits": 23,
                                    "color": "#333333",
                                    "show": true
                                }, {
                                    "country": "19:00",
                                    "visits": 23,
                                    "color": "#333333",
                                    "show": false
                                }, {
                                    "country": "20:00",
                                    "visits": 23,
                                    "color": "#333333",
                                    "show": false
                                }, {
                                    "country": "21:00",
                                    "visits": 23,
                                    "color": "#333333",
                                    "show": false
                                }, {
                                    "country": "22:00",
                                    "visits": 23,
                                    "color": "#333333",
                                    "show": false
                                }, {
                                    "country": "23:00",
                                    "visits": 23,
                                    "color": "#333333",
                                    "show": false
                                },
                                {
                                    "country": "00:00",
                                    "visits": 23,
                                    "color": "#333333",
                                    "show": true
                                }],
                            "valueAxes": [{
                                "position": "top",
                                "axisAlpha": 0,
                                "gridAlpha": 0
                            }],
                            "graphs": [{
                                "balloonText": "<b>[[value]] &deg;C</b>",
                                "colorField": "color",
                                "fillAlphas": 0.85,
                                "lineAlpha": 0.1,
                                "type": "column",
                                "topRadius": 1,
                                "valueField": "visits"
                            }],
                            "depth3D": 5,
                            "angle": 6,
                            "chartCursor": {
                                "categoryBalloonEnabled": false,
                                "cursorAlpha": 0,
                                "zoomable": false
                            },
                            "categoryField": "country",
                            "categoryAxis": {
                                "gridPosition": "start",
                                "axisAlpha": 0,
                                "gridAlpha": 0,
                                "position": "top",
                                "labelFunction": function (valueText, serialDataItem, categoryAxis) {
                                    console.log(valueText, serialDataItem, categoryAxis)
                                    
                                    if (!serialDataItem.dataContext.show) {
                                        return;
                                    }

                                    return valueText;
                                },


                            },
                            "export": {
                                "enabled": true
                            }

                        });


                    };
                    initChart();

                }
            }
        });
})();

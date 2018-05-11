$(()=>{
    console.log("chart.js ready")

    //////////////////////////////////////////////////////

    $('<div />')
        .addClass("chart")
        .appendTo('#chart-sync')
        .highcharts({
            chart: {
                marginLeft: 60, // Keep all charts left aligned
                spacingTop: 20,
                spacingBottom: 20,
                zoomType: 'x'
            },
            title: {
                text: "Antec 620",
                align: 'left',
                margin: 0,
                x: 30
            },
            plotOptions: {
                line: {
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 2
                        }
                    },
                    threshold: null
                }
            },
            credits: {
                enabled: false
            },
            legend: {
                enabled: true
            },
            xAxis: {
                crosshair: true,
                events: {
                    setExtremes: syncExtremes
                },
                title: {
                    text: 'Date Time'
                },
                type: 'datetime',
                // labels: {
                //     format: '{value} km'
                // }
                dateTimeLabelFormats : {
                    hour: '%I %p',
                    minute: '%I:%M %p'
                }
            },
            yAxis: {
                title: {
                    text: 'Temperature/CPU Load'
                }
            },
            tooltip: {
                positioner: function () {
                    return {
                        // right aligned
                        x: this.chart.chartWidth - this.label.width,
                        y: 10 // align to title
                    };
                },
                borderWidth: 0,
                backgroundColor: 'none',
                pointFormat: '{point.y}',
                headerFormat: '',
                shadow: false,
                style: {
                    fontSize: '18px'
                },
                valueDecimals: 3,
                formatter: function () {
                    let text = "Temp: (°C)<br>";
                    let temp = []
                    for(i in [0,1,2,3]) {
                        temp.push(this.points[i].y)
                    }
                    text += temp.join(", ")
                    let roomTempStr = Math.round(this.points[4].y * 10)/10 + ""
                    if(roomTempStr.length <= 2){
                        roomTempStr += ".0"
                    }
                    text += `<br> Room Temp: ${roomTempStr}°C`
                    text += `<br> CPU Load: ${this.points[5].y}%`
                    return text
                },
                shared: true
            },
            series: [{
                data: antec620.core0withtemp,
                name: "Core 0",
                type: "line",
                color: Highcharts.getOptions().colors[0],
                fillOpacity: 0.3,
                tooltip: {
                    valueSuffix: ' ' + "°C"
                }
            },
            {
                data: antec620.core1,
                name: "Core 1",
                type: "line",
                color: Highcharts.getOptions().colors[1],
                fillOpacity: 0.3,
                tooltip: {
                    valueSuffix: ' ' + "°C"
                }
            },
            {
                data: antec620.core2,
                name: "Core 2",
                type: "line",
                color: Highcharts.getOptions().colors[2],
                fillOpacity: 0.3,
                tooltip: {
                    valueSuffix: ' ' + "°C"
                }
            },
            {
                data: antec620.core3,
                name: "Core 3",
                type: "line",
                color: Highcharts.getOptions().colors[3],
                fillOpacity: 0.3,
                tooltip: {
                    valueSuffix: ' ' + "°C"
                }
            },
            {
                data: antec620.roomtemp.map(t=>t/1000),
                name: "Room Temperatre",
                type: "line",
                color: Highcharts.getOptions().colors[4],
                fillOpacity: 0.3,
                tooltip: {
                    valueSuffix: ' ' + "°C"
                }
            },
            {
                data: antec620.cpuload,
                name: "CPU Load",
                type: "line",
                color: Highcharts.getOptions().colors[5],
                fillOpacity: 0.3,
                tooltip: {
                    valueSuffix: ' ' + "%"
                }
            }
            ]
        });

        /////////////////////////////////////////////////

        $('<div />')
        .addClass("chart")
        .appendTo('#chart-sync')
        .highcharts({
            chart: {
                marginLeft: 60, // Keep all charts left aligned
                spacingTop: 20,
                spacingBottom: 20,
                zoomType: 'x'
            },
            title: {
                text: "Antec H1200",
                align: 'left',
                margin: 0,
                x: 30
            },
            plotOptions: {
                line: {
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 2
                        }
                    },
                    threshold: null
                }
            },
            credits: {
                enabled: false
            },
            legend: {
                enabled: true
            },
            xAxis: {
                crosshair: true,
                events: {
                    setExtremes: syncExtremes
                },
                title: {
                    text: 'Date Time'
                },
                type: 'datetime',
                // labels: {
                //     format: '{value} km'
                // }
                dateTimeLabelFormats : {
                    // hour: '%I %p',
                    minute: '%I:%M %p'
                }
            },
            yAxis: {
                title: {
                    text: 'Temperature/CPU Load'
                }
            },
            tooltip: {
                positioner: function () {
                    return {
                        // right aligned
                        x: this.chart.chartWidth - this.label.width,
                        y: 10 // align to title
                    };
                },
                borderWidth: 0,
                backgroundColor: 'none',
                pointFormat: '{point.y}',
                headerFormat: '',
                shadow: false,
                style: {
                    fontSize: '18px'
                },
                valueDecimals: 3,
                formatter: function () {
                    let text = "Temp: (°C)<br>";
                    let temp = []
                    for(i in [0,1,2,3]) {
                        temp.push(this.points[i].y)
                    }
                    text += temp.join(", ")
                    let roomTempStr = Math.round(this.points[4].y * 10)/10 + ""
                    if(roomTempStr.length <= 2){
                        roomTempStr += ".0"
                    }
                    text += `<br> Room Temp: ${roomTempStr}°C`
                    text += `<br> CPU Load: ${this.points[5].y}%`
                    return text
                },
                shared: true
            },
            series: [{
                data: antec1200.core0withtemp,
                name: "Core 0",
                type: "line",
                color: Highcharts.getOptions().colors[0],
                fillOpacity: 0.3,
                tooltip: {
                    valueSuffix: ' ' + "°C"
                }
            },
            {
                data: antec1200.core1,
                name: "Core 1",
                type: "line",
                color: Highcharts.getOptions().colors[1],
                fillOpacity: 0.3,
                tooltip: {
                    valueSuffix: ' ' + "°C"
                }
            },
            {
                data: antec1200.core2,
                name: "Core 2",
                type: "line",
                color: Highcharts.getOptions().colors[2],
                fillOpacity: 0.3,
                tooltip: {
                    valueSuffix: ' ' + "°C"
                }
            },
            {
                data: antec1200.core3,
                name: "Core 3",
                type: "line",
                color: Highcharts.getOptions().colors[3],
                fillOpacity: 0.3,
                tooltip: {
                    valueSuffix: ' ' + "°C"
                }
            },
            {
                data: antec1200.roomtemp.map(t=>t/1000),
                name: "Room Temperatre",
                type: "line",
                color: Highcharts.getOptions().colors[4],
                fillOpacity: 0.3,
                tooltip: {
                    valueSuffix: ' ' + "°C"
                }
            },
            {
                data: antec1200.cpuload,
                name: "CPU Load",
                type: "line",
                color: Highcharts.getOptions().colors[5],
                fillOpacity: 0.3,
                tooltip: {
                    valueSuffix: ' ' + "%"
                }
            }
            ]
        });

/////////////////////////////////////////////////

$('<div />')
.addClass("chart")
.appendTo('#chart-sync')
.highcharts({
    chart: {
        marginLeft: 60, // Keep all charts left aligned
        spacingTop: 20,
        spacingBottom: 20,
        zoomType: 'x'
    },
    title: {
        text: "Average CPU Temperature",
        align: 'left',
        margin: 0,
        x: 30
    },
    plotOptions: {
        // line: {
        //     marker: {
        //         enabled: false
        //     }
        // },
        line: {
            // fillColor: {
            //     linearGradient: {
            //         x1: 0,
            //         y1: 0,
            //         x2: 0,
            //         y2: 1
            //     },
            //     stops: [
            //         [0, Highcharts.getOptions().colors[0]],
            //         [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
            //     ]
            // },
            marker: {
                radius: 2
            },
            lineWidth: 1,
            states: {
                hover: {
                    lineWidth: 2
                }
            },
            threshold: null
        }
    },
    credits: {
        enabled: false
    },
    legend: {
        enabled: true
    },
    xAxis: {
        crosshair: true,
        events: {
            setExtremes: syncExtremes
        },
        title: {
            text: 'Date Time'
        },
        type: 'datetime',
        // labels: {
        //     format: '{value} km'
        // }
        dateTimeLabelFormats : {
            // hour: '%I %p',
            minute: '%I:%M %p'
        }
    },
    yAxis: {
        title: {
            text: 'Temperature'
        }
    },
    tooltip: {
        positioner: function () {
            return {
                // right aligned
                x: this.chart.chartWidth - this.label.width,
                y: 10 // align to title
            };
        },
        borderWidth: 0,
        backgroundColor: 'none',
        pointFormat: '{point.y}',
        headerFormat: '',
        shadow: false,
        style: {
            fontSize: '18px'
        },
        valueDecimals: 3,
        formatter: function () {
            let text = "Temp: (°C)<br>" + this.points.map(t=>{
                let temp = Math.round(t.y * 10)/10
                if(`${temp}`.length <= 2){
                    return `${temp}.0`
                } else {
                    return temp
                }
            }).join(", ");
            return text
        },
        shared: true
    },
    series: [{
        data: antec620.avgtemp,
        name: "Antec 620",
        type: "line",
        color: Highcharts.getOptions().colors[0],
        fillOpacity: 0.3,
        tooltip: {
            valueSuffix: ' ' + "°C"
        }
    },
    {
        data: antec1200.avgtemp,
        name: "Antec 1200",
        type: "line",
        color: Highcharts.getOptions().colors[1],
        fillOpacity: 0.3,
        tooltip: {
            valueSuffix: ' ' + "°C"
        }
    }
    ]
});

    $('#chart-sync').find(".chart").bind('mousemove touchmove touchstart', function (e) {
        var chart,
            point,
            i,
            event;

        for (i = 0; i < Highcharts.charts.length; i = i + 1) {
            chart = Highcharts.charts[i];
            // Find coordinates within the chart
            event = chart.pointer.normalize(e.originalEvent);
            // Get the hovered point
            point = chart.series[0].searchPoint(event, true);

            if (point) {
                point.highlight(e);
            }
        }
    });
    /**
     * Override the reset function, we don't need to hide the tooltips and
     * crosshairs.
     */
    Highcharts.Pointer.prototype.reset = function () {
        return undefined;
    };

    /**
     * Highlight a point by showing tooltip, setting hover state and draw crosshair
     */
    Highcharts.Point.prototype.highlight = function (event) {
        event = this.series.chart.pointer.normalize(event);
        this.onMouseOver(); // Show the hover marker
        this.series.chart.tooltip.refresh(this); // Show the tooltip
        this.series.chart.xAxis[0].drawCrosshair(event, this); // Show the crosshair
    };

    /**
     * Synchronize zooming through the setExtremes event handler.
     */
    function syncExtremes(e) {
        var thisChart = this.chart;

        if (e.trigger !== 'syncExtremes') { // Prevent feedback loop
            Highcharts.each(Highcharts.charts, function (chart) {
                if (chart !== thisChart) {
                    if (chart.xAxis[0].setExtremes) { // It is null while updating
                        chart.xAxis[0].setExtremes(
                            e.min,
                            e.max,
                            undefined,
                            false,
                            { trigger: 'syncExtremes' }
                        );
                    }
                }
            });
        }
    }

})
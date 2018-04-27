//GET temperature_log.csv

// Delete first n item from Array. If argument is negative, delete from back
Array.prototype.drop = function(n) {
    i = parseInt(n)
    if(i == NaN) throw new Error(`[Array::drop] Invaild paramter: ${n}`)
    if(i == 0){
        return this
    } else if (i > 0) {
        this.splice(0,i)
        return this
    } else {
        this.reverse().splice(0,Math.abs(i))
        return this.reverse()
    }
}

let averageByEvery = (arr, n, sf) => {
    let round2sf = (num, sf) => Math.round(num * 10 ** sf) / 10 ** sf
    let loop = parseInt(arr.length / n)
    let avgArr = Array(loop).fill().map((x)=>{
        let avg = arr.splice(0, n).reduce((x, y) => x + y) / n
        return (sf == undefined) ? avg : round2sf(avg, sf)
    })
    if(arr.length > 0) {
        let avg = arr.reduce((x, y) => x + y) / arr.length
        avgArr.push((sf == undefined) ? avg : round2sf(avg, sf))
    }
    return avgArr
}

let selectEvery = (arr, n) => {
    let select = []
    for (var i = 0; i<arr.length; i+=n){
        select.push(arr[i])
    }
    return select
}

$(()=>{
    console.log("ready")

    const AVERAGE_EVERY_DATA_POINT = 5

    $.get("/temperature_log.csv", (data)=>{
        data = data.split("\n").drop(1).drop(-1).map(x => {
            x = x.split(",")
            return [parseInt(x[0]) * 1000, parseInt(x[1]) / 1000]
        })

        dataTemperature = averageByEvery(data.map(x=>x[1]), AVERAGE_EVERY_DATA_POINT, 1)
        dataTime = selectEvery(data.map(x=>x[0]), AVERAGE_EVERY_DATA_POINT)
        let reducedData = []
        dataTime.forEach((v, k, a) => reducedData.push([v, dataTemperature[k]]) )

        

        let chart = Highcharts.chart('chart-div', {
            chart: {
                zoomType: 'x'
            },
            title: {
                text: 'Room Temperature over time'
            },
            subtitle: {
                text: document.ontouchstart === undefined ?
                    'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
            },
            xAxis: {
                type: 'datetime',
                title: {
                    text: 'Date Time'
                }
            },
            yAxis: {
                type: 'number',
                title: {
                    text: 'Temperature'
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },

            series: [{
                type: 'area',
                name: 'Temperature (°C)',
                data: reducedData
            }]
        });

        // setTimeout(function(){
        //     reducedData = reducedData.drop(3000)
        //     chart.series[0].setData(reducedData)
        // },3000)

    })
})
Highcharts.setOptions({
    lang: {
        thousandsSep: '.'
    }
})

// Data retrieved from: https://ferjedatabanken.no/statistikk
Highcharts.chart('container', {
    chart: {
        type: 'bar',
        backgroundColor: '#ffffe2',
        // spacing: [10, 10, 50, 10],
        spacingBottom: 30,
        // borderRadius: 16,
        // margin: -16,
        // spacing: [20, 0, 20, 0], // top right bottom left,

        events: {
            load: function () {
                var chart = this,
                    series = chart.series,
                    seriesSum = 0;
                series.forEach(function (series) {
                    series.data.forEach(function (point) {
                        seriesSum += point.y
                    })
                })
                chart.renderer.text('Total Luas: ' + seriesSum.toLocaleString("id-ID") + ' hektare', 100, this.chartHeight - 1)
                    .css({
                        font: 'bold 16px Rubik, sans-serif',
                        background: "fff"
                        // fontSize: 16,
                        // spacing: [20, 20, 20, 20]
                    }).attr({
                        // 'text-anchor': 'end',
                        zIndex: 3
                    })
                    .add()
                this.update({
                    legend: {
                        labelFormatter: function () {
                            var seriesData = this.data,
                                pointSum = 0;
                            seriesData.forEach(function (point) {
                                pointSum += point.y;
                            })
                            return this.name + '<br /><strong>Total: ' + pointSum.toLocaleString("id-ID") + '</strong> hektare';
                        },
                        itemStyle: {
                            font: 'normal 12px Rubik, sans-serif',
                            // color: '#A0A0A0'
                        },
                    },
                })
            }
        }
    },
    credits: {
        enabled: false
    },
    title: {
        text: null,
        style: {
            // color: "#fafafa",
            font: 'bold 20px "Rubik", sans-serif',
            // lineHeight: '2rem'
        }

    },
    subtitle: {
        text: null,
        align: 'center',
        style: {
            // color: "#fafafa",
            font: 'normal 13px "Source Code Pro", sans-serif',
            // lineHeight: '2rem'
        }
    },
    xAxis: {
        categories: ['Sumatera', 'Kalimantan', 'Jawa-Bali-Nusa', 'Sulawesi', 'Maluku', 'Papua'],
        labels: {
            style: {
                // color: "#fafafa",
                font: 'normal 13px "Rubik", sans-serif',
                // lineHeight: '2rem'
            }

        }
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        },
        labels: {
            style: {
                // color: "#fafafa",
                font: 'normal 10px "Rubik", sans-serif',
                // lineHeight: '2rem'
            }

        }
    },
    // legend: {
    //     reversed: false
    // },
    legend: {
        itemStyle: {
            font: '12px Rubik, sans-serif',
            // color: '#A0A0A0'
        },
        // itemHoverStyle: {
        //     color: '#FFF'
        // },
        // itemHiddenStyle: {
        //     color: '#444'
        // }

    },
    tooltip: {
        valueSuffix: ' hektare',
        style: {
            font: '16px "Rubik", sans-serif',

        }
    },
    plotOptions: {
        series: {
            stacking: 'normal',
            // dataLabels: {
            //     enabled: true
            // }
            dataLabels: {
                enabled: true,
                style: {
                    // color: "#fafafa",
                    font: '18px "Rubik", sans-serif',
                    // lineHeight: '2rem'
                    textOutline: false
                },
                bar: {
                    borderRadius: 0,
                    pointPadding: 1,
                    groupPadding: 0.5
                },
            },
        },

    },
    series: [
        {
            name: 'Hak Pengusahaan Hutan',
            data: [182156, 2445928, 0, 56767, 18594, 1551025],
            style: {
                // fontWeight: 'normal',
                font: 'normal 14px "Source Code Pro", sans-serif',
            }
        }, {
            name: 'Hutan Tanaman Industri',
            data: [399810, 668008, 1293, 16356, 0, 494157],
            style: {
                // fontWeight: 'normal',
                font: 'normal 14px "Source Code Pro", sans-serif',
            }
        }, {
            name: 'Perkebunan',
            data: [242990, 974936, 0, 10811, 0, 246478],
            style: {
                // fontWeight: 'normal',
                font: 'normal 14px "Source Code Pro", sans-serif',
            }
        },
        {
            name: 'Tambang',
            data: [88746, 551379, 29536, 111156, 39049, 29038],
            style: {
                // fontWeight: 'normal',
                font: 'normal 14px "Source Code Pro", sans-serif',
            }
        }]
});

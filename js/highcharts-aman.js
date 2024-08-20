

Highcharts.setOptions({
    colors: ['#24CBE5', '#50B432', '#FF9655', '#FFF263', '#6AF9C4', '#64E572', '#ED561B', '#DDDF00',]
});
Highcharts.chart('container-aman', {
    chart: {
        type: 'bar',
        backgroundColor: 'transparent'
    },
    title: {
        text: 'Hak Pengusahaan Hutan',
        align: 'left',
        style: {
            // color: "#fafafa",
            font: 'bold 20px "Rubik", sans-serif',

        }
    },
    subtitle: {
        text: null,
        // align: 'left'
    },
    xAxis: {
        categories: ['Sumatera', 'Kalimantan', 'Jawa Bali Nusa', 'Sulawesi', 'Maluku', 'Papua'],
        title: {
            text: null
        },
        labels: {
            // text: null,
            // formatter: function () {
            //     // var a = this.y.toString().replace('.', ',');
            //     // return a + '%';
            // },
            style: {
                // color: "#fafafa",
                font: '13px "Rubik", sans-serif',
                // lineHeight: '2rem'
                textOutline: false
            }
        },
        gridLineWidth: 1,
        lineWidth: 0
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Population (millions)',
            align: 'high'
        },
        labels: {
            overflow: 'justify',
            // text: null,
            // formatter: function () {
            //     // var a = this.y.toString().replace('.', ',');
            //     // return a + '%';
            // },
            style: {
                // color: "#fafafa",
                font: '13px "Rubik", sans-serif',
                // lineHeight: '2rem'
                textOutline: false
            }
        },
        gridLineWidth: 0
    },
    tooltip: {
        valueSuffix: ' hektare',
        style: {
            // fontWeight: 'bold',
            fontFamily: 'Rubik',
            fontSize: '12px'
        }
    },
    plotOptions: {
        bar: {
            borderRadius: '50%',
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                style: {
                    // color: "#fafafa",
                    font: 'normal 13px "Source Code Pro", sans-serif',
                    // lineHeight: '2rem'
                    fontWeight: 'normal',

                },
            },
            groupPadding: 0.1
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'bottom',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },


    series: [{
        name: 'Luas',
        color: '#718e03',
        data: [182156, 2445928, 0, 56767, 18594, 1551025]
    }]
});





Highcharts.chart('container-aman-hti', {
    chart: {
        type: 'pie',
        custom: {},
        backgroundColor: 'rgba(255,255,255,0)',
        borderRadius: 16,
        events: {
            render() {
                const chart = this,
                    series = chart.series[0];
                let customLabel = chart.options.chart.custom.label;

                points = chart.series[0].points,
                    len = points.length,
                    total = 0,
                    i = 0;

                for (; i < len; i++) {
                    total += points[i].y;
                }
                if (!customLabel) {
                    customLabel = chart.options.chart.custom.label =
                        chart.renderer.label(
                            'Total<br/>' +
                            '<strong>' + total.toLocaleString('id') + '</strong> ha'
                        )
                            .css({
                                // color: '#fff',
                                font: 'normal 2rem "Rubik", sans-serif',
                                textAnchor: 'middle'
                            })
                            .add();
                }

                const x = series.center[0] + chart.plotLeft,
                    y = series.center[1] + chart.plotTop -
                        (customLabel.attr('height') / 2);

                customLabel.attr({
                    x,
                    y
                });
                // Set font size based on chart diameter
                customLabel.css({
                    fontSize: `${series.center[2] / 12}px`
                });
            }
        }
    },
    title: {
        text: 'Hutan Tanaman Industri',
        style: {
            // color: "#fafafa",
            font: 'bold 20px "Rubik", sans-serif',

        }
    },
    subtitle: {
        text: null
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.y}</b> ha',
        style: {
            //fontWeight: 'bold',
            fontFamily: 'Rubik',
            fontSize: '1rem'
        }
    },
    legend: {
        enabled: false
    },
    credits: {
        enabled: false //buat highcharts com
    },
    plotOptions: {
        pie: {
            borderColor: 'transparent',
            dataLabels: {
                style: {
                    // color: "white",//color nama
                    // borderColor: '#fafafa',
                    font: 'normal 1rem "Rubik", sans-serif',
                    fontWeight: 'normal',
                    textOutline: false
                    // lineHeight: '2rem'
                },
            }
        },
        series: {
            allowPointSelect: true,
            cursor: 'pointer',
            borderRadius: 0,
            dataLabels: [{
                enabled: true,
                distance: 20,
                format: '{point.name}'
            }, {
                enabled: true,
                distance: -10,
                format: '{point.y:,.0f}',
                style: {
                    fontSize: '0.9em',
                    // color: "#fafafa"
                }
            }],
            showInLegend: false
        }
    },
    series: [
        {
            name: 'Luas',
            colorByPoint: true,
            innerSize: '65%',
            // data: [399810, 668008, 1293, 16356, 0, 494157],
            data: [
                {
                    name: 'Sumatera',
                    y: 399810
                },
                {
                    name: 'Kalimantan',
                    // sliced: true,
                    // selected: true,
                    y: 668008
                },
                {
                    name: 'Jawa Bali Nusa',
                    y: 1293
                },
                {
                    name: 'Sulawesi',
                    y: 16356
                },
                {
                    name: 'Maluku',
                    y: 494157
                },
                {
                    name: 'Papua',
                    y: 494157
                }
            ]
        }
    ]
});


Highcharts.chart('container-aman-pertambangan', {
    chart: {
        type: 'pie',
        custom: {},
        backgroundColor: 'rgba(255,255,255,0)',
        borderRadius: 16,
        events: {
            render() {
                const chart = this,
                    series = chart.series[0];
                let customLabel = chart.options.chart.custom.label;

                points = chart.series[0].points,
                    len = points.length,
                    total = 0,
                    i = 0;

                for (; i < len; i++) {
                    total += points[i].y;
                }
                if (!customLabel) {
                    customLabel = chart.options.chart.custom.label =
                        chart.renderer.label(
                            'Total<br/>' +
                            '<strong>' + total.toLocaleString('id') + '</strong> ha'
                        )
                            .css({
                                // color: '#fff',
                                font: 'normal 2rem "Rubik", sans-serif',
                                textAnchor: 'middle'
                            })
                            .add();
                }

                const x = series.center[0] + chart.plotLeft,
                    y = series.center[1] + chart.plotTop -
                        (customLabel.attr('height') / 2);

                customLabel.attr({
                    x,
                    y
                });
                // Set font size based on chart diameter
                customLabel.css({
                    fontSize: `${series.center[2] / 12}px`
                });
            }
        }
    },
    title: {
        text: 'Pertambangan',
        style: {
            // color: "#fafafa",
            font: 'bold 20px "Rubik", sans-serif',

        }
    },
    subtitle: {
        text: null
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.y}</b> ha',
        style: {
            //fontWeight: 'bold',
            fontFamily: 'Rubik',
            fontSize: '1rem'
        }
    },
    legend: {
        enabled: false
    },
    credits: {
        enabled: false //buat highcharts com
    },
    plotOptions: {
        pie: {
            borderColor: 'transparent',
            dataLabels: {
                style: {
                    // color: "white",//color nama
                    // borderColor: '#fafafa',
                    font: 'normal 1rem "Rubik", sans-serif',
                    fontWeight: 'normal',
                    textOutline: false
                    // lineHeight: '2rem'
                },
            }
        },
        series: {
            allowPointSelect: true,
            cursor: 'pointer',
            borderRadius: 0,
            dataLabels: [{
                enabled: true,
                distance: 20,
                format: '{point.name}'
            }, {
                enabled: true,
                distance: -10,
                format: '{point.y:,.0f}',
                style: {
                    fontSize: '0.9em',
                    // color: "#fafafa"
                }
            }],
            showInLegend: false
        }
    },
    series: [{
        name: 'Luas',
        colorByPoint: true,
        innerSize: '65%',
        // data: [88746, 551379, 29536, 111156, 39049, 29038],
        data: [
            {
                name: 'Sumatera',
                y: 88746
            },
            {
                name: 'Kalimantan',
                // sliced: true,
                // selected: true,
                y: 551379
            },
            {
                name: 'Jawa Bali Nusa',
                y: 29536
            },
            {
                name: 'Sulawesi',
                y: 111156
            },
            {
                name: 'Maluku',
                y: 39049
            },
            {
                name: 'Papua',
                y: 29038
            }
        ]
    }]
});


Highcharts.chart('container-aman-perkebunan', {
    chart: {
        type: 'pie',
        custom: {},
        backgroundColor: 'rgba(255,255,255,0)',
        borderRadius: 16,
        events: {
            render() {
                const chart = this,
                    series = chart.series[0];
                let customLabel = chart.options.chart.custom.label;

                points = chart.series[0].points,
                    len = points.length,
                    total = 0,
                    i = 0;

                for (; i < len; i++) {
                    total += points[i].y;
                }
                if (!customLabel) {
                    customLabel = chart.options.chart.custom.label =
                        chart.renderer.label(
                            'Total<br/>' +
                            '<strong>' + total.toLocaleString('id') + '</strong> ha'
                        )
                            .css({
                                // color: '#fff',
                                font: 'normal 2rem "Rubik", sans-serif',
                                textAnchor: 'middle'
                            })
                            .add();
                }

                const x = series.center[0] + chart.plotLeft,
                    y = series.center[1] + chart.plotTop -
                        (customLabel.attr('height') / 2);

                customLabel.attr({
                    x,
                    y
                });
                // Set font size based on chart diameter
                customLabel.css({
                    fontSize: `${series.center[2] / 12}px`
                });
            }
        }
    },
    title: {
        text: 'Perkebunan',
        style: {
            // color: "#fafafa",
            font: 'bold 20px "Rubik", sans-serif',

        }
    },
    subtitle: {
        text: null
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.y}</b> ha',
        style: {
            //fontWeight: 'bold',
            fontFamily: 'Rubik',
            fontSize: '1rem'
        }
    },
    legend: {
        enabled: false
    },
    credits: {
        enabled: false //buat highcharts com
    },
    plotOptions: {
        pie: {
            borderColor: 'transparent',
            dataLabels: {
                style: {
                    // color: "white",//color nama
                    // borderColor: '#fafafa',
                    font: 'normal 1rem "Rubik", sans-serif',
                    fontWeight: 'normal',
                    textOutline: false
                    // lineHeight: '2rem'
                },
            }
        },
        series: {
            allowPointSelect: true,
            cursor: 'pointer',
            borderRadius: 0,
            dataLabels: [{
                enabled: true,
                distance: 20,
                format: '{point.name}'
            }, {
                enabled: true,
                distance: -10,
                format: '{point.y:,.0f}',
                style: {
                    fontSize: '0.9em',
                    // color: "#fafafa"
                }
            }],
            showInLegend: false
        }
    },
    series: [{
        name: 'Luas',
        colorByPoint: true,
        innerSize: '65%',
        //  data: [242990, 974936, 0, 10811, 0, 246478],
        data: [
            {
                name: 'Sumatera',
                y: 242990
            },
            {
                name: 'Kalimantan',
                // sliced: true,
                // selected: true,
                y: 974936
            },
            {
                name: 'Jawa Bali Nusa',
                y: 0
            },
            {
                name: 'Sulawesi',
                y: 10811
            },
            {
                name: 'Maluku',
                y: 0
            },
            {
                name: 'Papua',
                y: 246478
            }
        ]
    }]
});

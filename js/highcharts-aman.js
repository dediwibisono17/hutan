Highcharts.chart('container-aman', {
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
        text: 'Hak Pengusahaan Hutan',
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
                    font: 'normal .9rem "Rubik", sans-serif',
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
            // data: [182156, 2445928, 0, 56767, 18594, 1551025],
            data: [
                {
                    name: 'Sumatera',
                    y: 182156
                },
                {
                    name: 'Kalimantan',
                    // sliced: true,
                    // selected: true,
                    y: 2445928
                },
                {
                    name: 'Jawa Bali Nusa',
                    y: 0
                },
                {
                    name: 'Sulawesi',
                    y: 56767
                },
                {
                    name: 'Maluku',
                    y: 18594
                },
                {
                    name: 'Papua',
                    y: 1551025
                }
            ]
        }
    ]
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
                    y: 0
                },
                {
                    name: 'Maluku',
                    y: 494157
                },
                {
                    name: 'Papua',
                    y: 1551025
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

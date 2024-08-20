

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
            text: null,
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
        type: 'bar',
        backgroundColor: 'transparent',

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
            text: null,
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
        data: [399810, 668008, 1293, 16356, 0, 494157]
    }]
});


Highcharts.chart('container-aman-pertambangan', {
    chart: {
        type: 'bar',
        backgroundColor: 'transparent',

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
            text: null,
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

        data: [88746, 551379, 29536, 111156, 39049, 29038]
    }]
});



Highcharts.chart('container-aman-perkebunan', {
    chart: {
        type: 'bar',
        backgroundColor: 'transparent',

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
            text: null,
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

        data: [242990, 974936, 0, 10811, 0, 246478]
    }]
});

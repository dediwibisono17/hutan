Highcharts.setOptions({
    lang: {
        thousandsSep: '.'
    },

})

Highcharts.chart('container-tanahkita', {
    chart: {
        backgroundColor: "transparent",
        zooming: {
            type: 'xy'
        }
    },
    title: {
        text: 'Data Konflik Agraria Mengorbankan Masyarakat Adat',
        align: 'left',
        style: {
            color: "#fafafa",
            font: 'bold 20px "Rubik", sans-serif',

        }
    },
    credits: {
        text: 'Sumber: Tanahkita.id'
    },
    xAxis: [{
        categories: [
            '2014', '2015', '2016', '2017', '2018', '2019',
            '2020', '2021', '2022', '2023'
        ],
        crosshair: true,
        labels: {
            // text: null,
            // formatter: function () {
            //     // var a = this.y.toString().replace('.', ',');
            //     // return a + '%';
            // },
            style: {
                color: "#fafafa",
                font: '13px "Rubik", sans-serif',
                // lineHeight: '2rem'
                textOutline: false
            }
        },
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value:,.0f} ha',
            style: {
                // color: Highcharts.getOptions().colors[1],
                color: "#fafafa",
                font: '13px "Rubik", sans-serif',
                // lineHeight: '2rem'
                textOutline: false
            },

        },
        title: {
            text: null,
            style: {
                // color: Highcharts.getOptions().colors[1],
                color: "#ff0000"
            }
        }
    }, { // Secondary yAxis
        title: {
            text: null,
            style: {
                color: Highcharts.getOptions().colors[0],
                textOutline: false
            }
        },
        labels: {
            format: '{value}',
            style: {
                // color: Highcharts.getOptions().colors[4]
                color: "#fafafa",
                textOutline: false
            }
        },
        opposite: true
    }],
    tooltip: {
        shared: true,
        style: {
            // fontWeight: 'bold',
            fontFamily: 'Rubik',
            fontSize: '13px'
        }
    },
    legend: {
        align: 'left',
        verticalAlign: 'top',
        itemStyle: {
            // fontSize: '35px',
            font: '13px Rubik',
            color: '#fafafa'
        },
        itemHoverStyle: {
            color: '#FFF'
        },
        itemHiddenStyle: {
            color: '#fafafa'
        },
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || // theme
            'rgba(255,255,255,0)',

    },
    series: [{
        name: 'Jumlah Kasus',
        type: 'column',
        yAxis: 1,
        data: [
            140, 145, 147, 191, 194, 204, 207, 212, 218,
            219
        ],
        tooltip: {
            valueSuffix: ' kasus'
        }

    }, {
        name: 'Luas',
        type: 'spline',
        data: [
            2786626, 2824774, 2831774, 2987276, 2990621, 3004263, 3008112, 3015207, 3039628,
            3039635
        ],
        tooltip: {
            valueSuffix: ' ha'
        }
    }]
});

Highcharts.chart('container-tanahkita-2', {
    chart: {
        backgroundColor: "rgba(255,255,255,.9)",
        zooming: {
            type: 'xy'
        }
    },
    title: {
        text: 'Status Penanganan Konflik hingga 2023',
        align: 'left',
        style: {
            // color: "#fafafa",
            font: 'bold 20px "Rubik", sans-serif',

        }
    },
    credits: {
        text: 'Sumber: Tanahkita.id'
    },
    xAxis: [{
        categories: [
            'Belum ditangani', 'Dalam Proses (Mediasi/Hukum)', 'Selesai'
        ],
        crosshair: true,
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
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value:,.0f} ha',
            style: {
                color: Highcharts.getOptions().colors[1],
                // color: "#fafafa",
                font: '13px "Rubik", sans-serif',
                // lineHeight: '2rem'
                textOutline: false
            },

        },
        title: {
            text: null,
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        }
    }, { // Secondary yAxis
        title: {
            text: null,
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        labels: {
            format: '{value}',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        opposite: true
    }],
    tooltip: {
        shared: true,
        style: {
            // fontWeight: 'bold',
            fontFamily: 'Rubik',
            fontSize: '13px'
        }
    },
    legend: {
        align: 'left',
        verticalAlign: 'top',
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || // theme
            'rgba(255,255,255,0.25)'
    },
    series: [{
        name: 'Jumlah Kasus',
        type: 'column',
        yAxis: 1,
        data: [
            115, 88, 16
        ],
        tooltip: {
            valueSuffix: ' kasus'
        }

    }, {
        name: 'Luas',
        type: 'spline',
        data: [
            1399354.38, 1617122.94, 23158.18


        ],
        tooltip: {
            valueSuffix: ' ha'
        }
    }]
});
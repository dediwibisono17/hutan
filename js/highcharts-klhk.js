



Highcharts.chart('container-klhk', {
    chart: {
        backgroundColor: "transparent",
        zooming: {
            type: 'xy'
        }
    },
    plotOptions: {
        column: {
            borderWidth: 0,
            borderColor: '#ff0000',
        },
        // dataLabels: {
        //     style: {
        //         color: "#fafafa",
        //         font: 'normal 1.5rem "Zain", sans-serif',
        //         // lineHeight: '2rem'
        //         fontWeight: 'normal',
        //         textOutline: false
        //     },
        // },
    },
    title: {
        text: 'Data Penetapan Hutan Adat KLHK',
        align: 'left',
        style: {
            color: "#fafafa",
            font: 'normal 20px "Rubik", sans-serif',

        }
    },
    credits: {
        enabled: false,
    },
    subtitle: {
        text: 'Source: KLHK',
        align: 'left',
        style: {
            color: "#fafafa",
            font: 'normal 12px "Source Code Pro", sans-serif',
            // lineHeight: '2rem'
        }
    },
    xAxis: [{
        categories: ['Penetapan Hutan Adat Definitif', 'Sisa Rencana Penetapan 2024', 'Target Penetapan 2005-2027', 'Dalam Proses Verifikasi'],
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
                color: Highcharts.getOptions().colors[1],
                color: "#fafafa",
                font: '13px "Rubik", sans-serif',
                // lineHeight: '2rem'
                textOutline: false
            },

        },
        title: {
            text: null,
            style: {
                // color: Highcharts.getOptions().colors[1]
                color: "#fafafa"
            }
        }
    }, { // Secondary yAxis
        title: {
            text: null,
            style: {
                // color: Highcharts.getOptions().colors[0]
                color: "#fafafa"
            }
        },
        labels: {
            format: '{value}',
            style: {
                // color: Highcharts.getOptions().colors[0]
                color: "#fafafa"
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
            'rgba(255,255,255,0)',
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
    },
    series: [{
        name: 'Jumlah',
        type: 'column',
        yAxis: 1,
        color: '#da9859',
        data: [138, 41, 97, 133],
        tooltip: {
            // valueSuffix: ' kasus'
            valueSuffix: null,
        }

    }, {
        name: 'Luas',
        type: 'spline',
        color: '#7f4718',
        data: [265250, 592381, 1761167, 2327283],
        tooltip: {
            valueSuffix: ' ha'
        }
    }]
});
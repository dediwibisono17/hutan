Highcharts.chart('container-fwi', {
    chart: {
        type: 'column',
        // custom: {},
        backgroundColor: 'transparent'
    },
    title: {
        text: null,
        align: 'left'
    },
    xAxis: {
        categories: [
            // 'Tambang', 'Perkebunan', 'HPH', 'HTI', 'Tumpang Tindih Konsesi', 'Konsesi dan Hutan Adat', 'DLL', 'Tumpang Tindih Hutan Adat'
            '2017', '2021', 'Deforestasi'
        ],
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
    },
    credits: {
        enabled: false //buat highcharts com
    },
    legend: {
        align: 'left',
        verticalAlign: 'bottom',
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
    yAxis: {
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
                color: "#fafafa",
                font: '13px "Rubik", sans-serif',
                // lineHeight: '2rem'
                textOutline: false
            }
        },
    },
    tooltip: {
        valueSuffix: ' million liters'
    },
    // plotOptions: {
    //     series: {
    //         borderRadius: '25%'
    //     }
    // },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0,
            dataLabels: {
                style: {
                    // color: "#fafafa",
                    font: 'normal 13px "Source Code Pro", sans-serif',
                    // lineHeight: '2rem'
                    fontWeight: 'normal',

                },
            }
        },
    },
    series: [
        {
            name: 'Tambang',
            // data: [1402994, 2801740, 11683519, 2624212, 2238246, 89044, 712814, 102560]
            data: [1402994, 1402994, 237199]
        }, {
            name: 'Perkebunan',
            // data: [1165794, 2019377, 10683519, 1912776, 1727427, 72286, 687358, 90001]
            data: [2801740, 2019377, 782362]
        },
        {
            name: 'HPH (Hak Pengusahaan Hutan)',
            // data: [1402994, 2801740, 11683519, 2624212, 2238246, 89044, 712814, 102560]
            data: [11683519, 10683519, 1102597]
        }, {
            name: 'Tumpang Tindih Konsesi',
            // data: [1165794, 2019377, 10683519, 1912776, 1727427, 72286, 687358, 90001]
            data: [2624212, 1912776, 711436]
        }, {
            name: 'Tumpang Tindih Konsesi dan Hutan Adat',
            // data: [1165794, 2019377, 10683519, 1912776, 1727427, 72286, 687358, 90001]
            data: [89044, 72286, 13758]
        }, {
            name: 'Dan Lain-lain',
            // data: [1165794, 2019377, 10683519, 1912776, 1727427, 72286, 687358, 90001]
            data: [712814, 687358, 25456]
        }, {
            name: 'Hutan Adat',
            data: [102560, 90001, 12559]
        }
        // {
        //     type: 'line',
        //     step: 'center',
        //     name: 'Deforestasi',
        //     // data: [237199, 782362, 1102597, 711436, 510818, 13758, 25456, 12559],
        //     data: [237199, 782362],
        //     marker: {
        //         lineWidth: 2,
        //         lineColor: Highcharts.getOptions().colors[3],
        //         fillColor: 'white'
        //     }
        // },

    ]
});

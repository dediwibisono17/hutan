Highcharts.setOptions({
    lang: {
        thousandsSep: '.'
    },
    colors: ['#718e03', '#42bb3f']
})
Highcharts.chart('container-brwa', {
    chart: {
        type: 'column',
        zoomType: 'y',
        backgroundColor: "transparent"
    },

    credits: {
        enabled: false //buat highcharts com
    },



    title: {
        text: 'Luas Wilayah Adat (dalam hektare)',
        style: {
            // color: "#fafafa",
            font: 'bold 20px "Rubik", sans-serif',

        }
    },
    subtitle: {
        text: 'Sumber: BRWA (Badan Registrasi Wilayah Adat)',
        style: {
            // color: "#fafafa",
            font: 'normal 13px "Source Code Pro", sans-serif',

        }
    },
    xAxis: {
        categories: [
            'Sumatera', 'Kalimantan', 'Sulawesi', 'Jawa-Bali-Nusa', 'Maluku', 'Papua'
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
    },
    yAxis: {
        min: 0,
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
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px"><b>{point.key}</b></span><table>',
        pointFormat: '<tr><td class="titikdua" style="color:{series.color};padding:0 4px">{series.name} </td>' +
            '<td style="padding:0 4px" class="titikdua"><b>{point.y}</b> Hektare</td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true,
        style: {
            // fontWeight: 'bold',
            fontFamily: 'Rubik',
            fontSize: '13px'
        }
    },
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
    series: [{
        name: 'Luas',

        data: [25912971, 10541385, 2152414, 642585, 761810, 13437019]

    }, {
        name: 'Penetapan ',
        data: [499295, 2176537, 666397, 56684, 481940, 970153]
    }]
});


Highcharts.chart('container-brwa2', {
    chart: {
        type: 'column',
        zoomType: 'y',
        backgroundColor: "transparent"
    },

    credits: {
        enabled: false //buat highcharts com
    },



    title: {
        text: 'Luas Hutan Adat (Ha)',
        style: {
            // color: "#fafafa",
            font: 'bold 20px "Rubik", sans-serif',

        }
    },
    subtitle: {
        text: 'Sumber: BRWA (Badan Registrasi Wilayah Adat)',
        style: {

            // color: "#fafafa",
            font: 'normal 13px "Source Code Pro", sans-serif',

        }
    },
    xAxis: {
        categories: [
            'Sumatera', 'Kalimantan', 'Sulawesi', 'Jawa-Bali-Nusa', 'Maluku', 'Papua'
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
    },
    yAxis: {
        min: 0,
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
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px"><b>{point.key}</b></span><table>',
        pointFormat: '<tr><td class="titikdua" style="color:{series.color};padding:0 4px">{series.name} </td>' +
            '<td style="padding:0 4px" class="titikdua"><b>{point.y}</b> Hektare</td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true,
        style: {
            // fontWeight: 'bold',
            fontFamily: 'Rubik',
            fontSize: '13px'
        }
    },
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
    series: [{
        name: 'Potensi',
        data: [1332971, 7709886, 1188528, 321210, 413631, 12316620]

    }, {
        name: 'Penetapan ',
        data: [66542, 126908, 22138, 9408, 342, 39912]
    }]
});
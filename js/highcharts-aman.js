Highcharts.chart('container-aman', {
    chart: {
        type: 'pie',
        backgroundColor: "transparent",
    },
    title: {
        text: 'Hak Pengusahaan Hutan',
        style: {
            // color: "#fafafa",
            font: 'bold 20px "Rubik", sans-serif',

        }
    },
    tooltip: {
        valueSuffix: ' hektare',
        style: {
            //fontWeight: 'bold',
            fontFamily: 'Rubik',
            fontSize: '1rem'
        }
    },
    subtitle: {
        text: null
    },
    credits: {
        enabled: false //buat highcharts com
    },
    plotOptions: {
        series: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: [{
                enabled: true,
                distance: 20,
                style: {
                    // color: "white",//color nama
                    borderColor: 'transparent',
                    font: 'normal 1.3rem "Rubik", sans-serif',
                    fontWeight: 'normal',
                    textOutline: false
                    // lineHeight: '2rem'
                },
            }, {
                enabled: true,
                distance: -40,
                // format: '{point.percentage:.1f}%',
                format: '{point.y:,.0f}',
                style: {
                    fontSize: '1.2em',
                    textOutline: 'none',
                    opacity: 0.7,
                    fontFamily: 'Rubik'
                },
                filter: {
                    operator: '>',
                    property: 'percentage',
                    value: 10
                }
            }]
        }
    },
    series: [
        {
            name: 'Luas',
            colorByPoint: true,
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

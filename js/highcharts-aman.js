Highcharts.chart('container-aman', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Hak Pengusahaan Hutan'
    },
    tooltip: {
        valueSuffix: ' hektare'
    },
    subtitle: {
        text: null
    },
    plotOptions: {
        series: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: [{
                enabled: true,
                distance: 20
            }, {
                enabled: true,
                distance: -40,
                // format: '{point.percentage:.1f}%',
                format: '{point.y:,.0f}',
                style: {
                    fontSize: '1.2em',
                    textOutline: 'none',
                    opacity: 0.7
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

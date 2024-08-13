Highcharts.setOptions({
    lang: {
        thousandsSep: '.'
    },
  
})

Highcharts.chart('container-tanahkita', {
    chart: {
        zooming: {
            type: 'xy'
        }
    },
    title: {
        text: 'Data Konflik Agraria Mengorbankan Masyarakat Adat',
        align: 'left'
    },
    credits: {
        text: 'Source: ' +
            '<a href="https://www.yr.no/nb/historikk/graf/5-97251/Norge/Finnmark/Karasjok/Karasjok?q=2023"' +
            'target="_blank">YR</a>'
    },
    xAxis: [{
        categories: [
            '2014', '2015', '2016', '2017', '2018', '2019',
            '2020', '2021', '2022', '2023'
        ],
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value} ha',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            text: 'Temperature',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        }
    }, { // Secondary yAxis
        title: {
            text: 'Precipitation',
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
        shared: true
    },
    legend: {
        align: 'left',
        verticalAlign: 'top',
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || // theme
            'rgba(255,255,255,0.25)'
    },
    series: [{
        name: 'Precipitation',
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
        name: 'Temperature',
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
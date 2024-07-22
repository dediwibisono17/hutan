Highcharts.setOptions({
    lang: {
        thousandsSep: '.'
    }
})

Highcharts.chart('container', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Historic World Population by Region',
        align: 'left'
    },
    subtitle: {
        text: 'Source: <a ' +
            'href="https://en.wikipedia.org/wiki/List_of_continents_and_continental_subregions_by_population"' +
            'target="_blank">Wikipedia.org</a>',
        align: 'left'
    },
    xAxis: {
        categories: ['Sumatera', 'Kalimantan', 'Jawa-Bali-Nusa', 'Sulawesi', 'Maluku', 'Papua'],
        title: {
            text: null
        },
        gridLineWidth: 1,
        lineWidth: 0
    },
    yAxis: {
        min: 0,
        title: {
            text: '(dalam Hektare)',
            align: 'bottom'
        },
        labels: {
            overflow: 'justify'
        },
        gridLineWidth: 0
    },
    tooltip: {
        valueSuffix: ' hektare'
    },
    plotOptions: {
        bar: {
            borderRadius: '50%',
            dataLabels: {
                enabled: true
            },
            groupPadding: 0.1
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
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
        name: 'HPH',
        data: [182156, 2445928, 0, 56767, 18594, 1551025]
    }, {
        name: 'HTI',
        data: [399810, 668008, 1293, 16356, 0, 494157]
    }, {
        name: 'Perkebunan',
        data: [242990, 974936, 0, 10811, 0, 246478]
    },
    {
        name: 'Tambang',
        data: [88746, 551379, 29536, 111156, 39049, 29038]
    }]
});

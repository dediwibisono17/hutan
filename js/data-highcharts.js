Highcharts.setOptions({
    lang: {
        thousandsSep: '.'
    }
})

// Data retrieved from: https://ferjedatabanken.no/statistikk
Highcharts.chart('container', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Tumpang Tindih Wilayah Adat dengan Izin Usaha'
    },
    subtitle: {
        text: '<small>Source: AMAN</small>',
        align: 'center'
    },
    xAxis: {
        categories: ['Sumatera', 'Kalimantan', 'Jawa-Bali-Nusa', 'Sulawesi', 'Maluku', 'Papua'],
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        }
    },
    legend: {
        reversed: true
    },
    tooltip: {
        valueSuffix: ' hektare'
    },
    plotOptions: {
        series: {
            stacking: 'normal',
            dataLabels: {
                enabled: true
            }
        }
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

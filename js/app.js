Highcharts.chart('container', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Historic Forest Population by Region',
        align: 'left'
    },
    subtitle: {
        text: 'Source: <a ' +
            'href="https://en.wikipedia.org/wiki/List_of_continents_and_continental_subregions_by_population"' +
            'target="_blank">Wikipedia.org</a>',
        align: 'left'
    },
    xAxis: {
        categories: ['Africa', 'America', 'Asia', 'Europe'],
        title: {
            text: null
        },
        gridLineWidth: 1,
        lineWidth: 0
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Population (millions)',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        },
        gridLineWidth: 0
    },
    tooltip: {
        valueSuffix: ' millions'
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
        name: 'Year 1990',
        data: [631, 727, 3202, 721]
    }, {
        name: 'Year 2000',
        data: [814, 841, 3714, 726]
    }, {
        name: 'Year 2018',
        data: [1276, 1007, 4561, 746]
    }]
});


$.ajax({
    url: 'js/2019v2.json',
    method: 'GET',
    success: function(response) {
        console.log(response);
        var investasi =  $("#tanahkita .form-value");
        investasi.html(response.investasi);
        var a;
        for (a=0; a<response.features.length; a++) {
            // console.log(response.features[a].properties.judul);
            $("#tanahkita table").append(`
              <tr>
                
                <td>${response.features[a].properties.judul}</td>
                <td>${response.features[a].properties.tahun}</td>
                <td>${response.features[a].properties.nm_propinsi}</td>
                <td>${response.features[a].properties.luas} ha</td>
                <td><small>${response.features[a].properties.nama_sektor}</small></td>
                <td>${response.features[a].properties.status_konflik_proses}</td>
                </tr>  
            `)
        }
    }
})
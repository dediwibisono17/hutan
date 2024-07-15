$(document).ready(function () {

    new WOW().init();
})




// slider opsi

$('.slider-navx').on('afterChange', function (event, slick, currentSlide) {
    $('.slider-navx').slick('slickGoTo', currentSlide);
    var currrentNavSlideElem = '.slider-navx .slick-slide[data-slick-index="' + currentSlide + '"]';
    $('.slider-navx .slick-slide.is-active').removeClass('is-active');
    $(currrentNavSlideElem).addClass('is-active');
});

$('.slider-forx').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-navx'
});

$('.slider-navx').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-forx',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                centerMode: true,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

$('[data-toggle="tooltip"]').tooltip()

/*Highcharts.chart('container', {
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
});*/
// var s = document.createElement("script");
// s = ""
// $(".btn-peta").click(function () {
//     var datapeta = $(this).attr('data');
//     // alert(datapeta)

//     var s = document.createElement("script");
//     s.type = "text/javascript";
//     s.src = `js/${datapeta}.js`;
//     // Use any selector
//     $("body").append(s);

// })

$(".yearx").click(function () {
    var nilaix = $(this).attr("data");
    var tahunnya = $(this).html()
    // alert(nilaix)
    $.ajax({
        url: 'js/' + nilaix + '.json',
        method: 'GET',
        success: function (response) {
            console.log(response);
            var investasi = $("#tanahkita .form-value");
            investasi.html(response.investasi);
            $(".tahunx").html(tahunnya)
            var a;
            $("#cek-data .row").html("")
            $("#tanahkita table tbody").html("")
            for (a = 0; a < response.features.length; a++) {
                // console.log(response.features[a].properties.judul);

                // bd = belum ditangani
                //ps = proses hukum

                var luas = response.features[a].properties.luas;
                var parsInt = parseInt(luas);
                var luasVal = parsInt.toLocaleString('id')
                // console.log(luasVal);
                var judul = response.features[a].properties.judul;
                var kabupaten = response.features[a].properties.nm_kabupaten;
                var propinsi = response.features[a].properties.nm_propinsi
                var data_konflik = response.features[a].properties.status_konflik_proses;
                var konflik = response.features[a].properties.status_konflik_proses == null || "" ? "-" : data_konflik;
                var sumberx = response.features[a].properties.sumber;
                //     $("#cek-data .row").append(`
                //     <div class="col-md-6">
                //     <div class="cardx">
                //         <div class="left-side">
                //             <h3 class="judulx">${judul}</h3>
                //         </div>
                //         <div class="right-side">
                //             <div class="clearfix">
                //                 <div class="float-left">
                //                     <div class="d-block" data-toggle="tooltip" data-placement="top" title="Luas">
                //                         <div class="iconx">
                //                             <img src="img/wide.png" alt="">
                //                         </div>
                //                         <div class="value">
                //                             <span class="luas">${luasVal}</span>
                //                             ha
                //                         </div>
                //                     </div>
                //                     <div class="d-block">
                //                         <div class="iconx">
                //                             <img src="img/notes.png" alt="">
                //                         </div>
                //                         <div class="value">
                //                             <span class="status">${konflik}</span>
                //                         </div>
                //                     </div>
                //                 </div>
                //                 <div class="float-right">
                //                     <div class="d-block">
                //                         <div class="iconx">
                //                             <img src="img/map.png" alt="">
                //                         </div>
                //                         <div class="value">
                //                             <div class="provinsi ">${propinsi}</div>
                //                         </div>
                //                     </div>
                //                     <div class="d-block">
                //                         <div class="iconx">
                //                             <img src="img/pin.png" alt="">
                //                         </div>
                //                         <div class="value">
                //                             <div class="kabupaten ">${kabupaten}</div>
                //                         </div>
                //                     </div>
                //                 </div>
                //             </div>
                //         </div>
                //     </div>
                // </div>
                //     `)

                $("#tanahkita table tbody").append(`
                
                  <tr>
                  <td>${a + 1}</td>
                    <td>${response.features[a].properties.judul}</td>
                    <td>${luasVal} ha</td>
                    <td>${response.features[a].properties.nm_kabupaten}</td>

                    <td>${response.features[a].properties.nm_propinsi}</td>
                    <td>${response.features[a].properties.nama_sektor}</td>

                    <td>${konflik}</td>

                    </tr>  
                `)
            }



        }
    })
})

$("#haha").click(function () {
    // alert(1)
    var condition = ($("#ceked").is(":checked") ? $(".wilayah").fadeIn() : $(".wilayah").fadeOut());
    $("#mydiv").toggle(condition);
});

$("#cek").click(function () {
    $(".wilayah").fadeToggle()
})

$('.slider-peta').slick({
    // slidesToShow: 3,
    // slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    // fade: true,
    speed: 500,
    cssEase: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
    // cssEase: 'linear'
});



const pauseVar = "fa-pause-circle";
const playVar = "fa-play-circle";

const btns = document.querySelectorAll(".all");

function onChange(event) {
    const buttonElement = event.currentTarget;

    const isPlayButton = buttonElement.classList.contains(playVar);

    if (isPlayButton) {
        buttonElement.classList.remove(playVar);
        buttonElement.classList.add(pauseVar);
        $("#play-button").removeClass("animate__infinite");
        $("#myAudio").get(0).play();
    } else {
        buttonElement.classList.remove(pauseVar);
        buttonElement.classList.add(playVar);
        $("#play-button").addClass("animate__infinite");
        $("#myAudio").get(0).pause();
    }

    // You can also use .toggle function on classList as mentioned by the person in other answer
}

// query selector all returns a list of nodes, therefore we need to iterate over it and attach an event listener to each button seperatly
btns.forEach((btn) => {
    btn.addEventListener("click", onChange);
});


$(".lihat-lain").click(function () {
    $('html, body').animate({
        scrollTop: $(".bgo").offset().top - 72
    }, 200);
});
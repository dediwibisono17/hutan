$(document).ready(function () {
    setTimeout(() => {
        $(".preloader").slideUp(1000);
        $(".preloader").remove();
        // $("html, body").animate({ scrollTop: 0 }, 10);
        // window.scrollTo(0, 0);

    }, 1500);
    new WOW().init();
})
window.onscroll = function () { ScrollIndicator() };

// var mobil = "<div class='imgs'><img src='img/mobil-kanan.png' /></div>"
function ScrollIndicator() {
    // console.log(document.documentElement.scrollHeight);
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // var height = $(".ref").height();
    var scrolled = (winScroll / height) * 100;
    document.getElementById('footer__progress_bar').style.width = scrolled + "%";
    // document.getElementById('footer__progress_bar').innerHTML = Math.round(scrolled) + "%"
    // console.log(scrolled);
    // document.getElementById('footer__progress_bar').innerHTML = mobil;

}
$('.tanahkita-slide').slick();





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
    adaptiveHeight: true,
    asNavFor: '.slider-navx'
});

$('.slider-navx').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-forx',
    dots: false,
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


// let table = new DataTable('#myTable');

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
                var tahun = response.features[a].properties.tahun;
                var kabupaten = response.features[a].properties.nm_kabupaten;
                var propinsi = response.features[a].properties.nm_propinsi
                var data_konflik = response.features[a].properties.status_konflik_proses;
                var konflik = response.features[a].properties.status_konflik_proses == null || response.features[a].properties.status_konflik_proses == "" ? "Belum ditangani" : data_konflik;
                var sumberx = response.features[a].properties.sumber;


                $("#tanahkita table tbody").append(`

                  <tr>
                  <td>${a + 1}</td>
                    <td>${judul}</td>
                    <td>${tahun}</td>
                    <td>${luasVal} ha</td>
                    <td>${kabupaten}</td>

                    <td>${propinsi}</td>
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
const playVar = "fa-volume-up";

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



$('#aman li').click(function () {
    // alert('aman')
    $('html, body').animate({
        scrollTop: $("#data-aman-scroll").offset().top - 100
    }, 500);
    $('#aman li ').removeClass("active");
    $(this).addClass("active");
});

$('#brwa li').click(function () {
    $('#brwa li ').removeClass("active");
    $(this).addClass("active");
});

$('#tanahkita li').click(function () {
    $('#tanahkita li ').removeClass("active");
    $(this).addClass("active");
});


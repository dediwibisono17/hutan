const map = L.map('map', { gestureHandling: true }).setView([-1.2910469065280155, 112.12226540832819], 4.5, {
    // dragging: !L.Browser.mobile,
    touchZoom: false,
    // dragging: false
});

map.scrollWheelZoom.disable();

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

$('.leaflet-control-attribution').hide()

// const baseballIcon = L.icon({
// 	iconUrl: 'img/baseball-marker.png',
// 	iconSize: [32, 37],
// 	iconAnchor: [16, 37],
// 	popupAnchor: [0, -28]
// });



$(".nilai").html(bicycleRental.investasi)
// console.log(pertambanganRental.investasi);
$("#tambang").html(pertambanganRental.investasi)
function onEachFeature(feature, layer) {

    var data_konflik = feature.properties.status_konflik_proses;
    var konflik = data_konflik == null || data_konflik == "" ? "Belum ditangani" : data_konflik;
    var luas = feature.properties.luas;
    var sektor = feature.properties.nama_sektor;
    var tahun = feature.properties.tahun;
    var parsInt = parseInt(luas);
    var luasVal = parsInt.toLocaleString('id')
    if (feature.properties) {
        // <p>I started out as a GeoJSON ${feature.geometry.type}, but now I'm a Leaflet vector!</p>
        let popupContent = `
                <h3>${feature.properties.judul}</h3>
                <div class="data-pop">Luas: ${luasVal} Ha</div>
                <div class="data-pop">Sektor: ${sektor}</div>
                <div class="data-pop">Status: ${konflik}</div>
                <div class="data-pop">Status: ${tahun}</div>
                <div class="data-pop">Provinsi: ${feature.properties.nm_propinsi} </div>
                <div class="data-pop">Kabupaten: ${feature.properties.nm_kabupaten} </div>
                `;
        // popupContent += feature.properties.judul;
        layer.bindPopup(popupContent);
    }

}
// <div>
//     <p>
//         ${feature.properties.short_narasi}
//     </p>
// </div>

/* global campus, bicycleRental, freeBus, coorsField */
const bicycleRentalLayer = L.geoJSON([bicycleRental], {

    style(feature) {
        return feature.properties && feature.properties.style;
    },

    onEachFeature,

    pointToLayer(feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 8,
            fillColor: '#ff7800',
            color: '#000',
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        });
    }
}).addTo(map);

const pertambanganLayer = L.geoJSON([pertambanganRental], {

    style(feature) {
        return feature.properties && feature.properties.style;
    },

    onEachFeature,

    pointToLayer(feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 8,
            fillColor: '#4a86e8',
            color: '#000',
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        });
    }
}).addTo(map);



// const coorsLayer = L.geoJSON(coorsField, {

// 	pointToLayer(feature, latlng) {
// 		return L.marker(latlng, {icon: baseballIcon});
// 	},

// 	onEachFeature
// }).addTo(map);




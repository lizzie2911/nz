/*
Script for New Zealand trip
*/

let lat = -44.7;
let lon = 169.15;
let zoom = 13;

let stop = {
    number: 16,
    title: "Wanaka",
    user: "lizzie2911",
    lat: lat,
    lon: lon,
    zoom: zoom,
};

// Map initialisation
let map = L.map('map').setView([stop.lat, stop.lon], stop.zoom);



// Background map defined
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
// create Marker
let marker = L.marker([stop.lat, stop.lon]).addTo(map);

// Popup defined and opened
marker.bindPopup(`
    <h2> ${stop.title} </h2>
    <ul>
        <li> Geogr. Breiter:${stop.lat.toFixed(5)}° </li>
        <li> Geogr. Länger: ${stop.lon.toFixed(5)}° </li>
    </ul>
`).openPopup();
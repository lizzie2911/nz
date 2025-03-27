/*
Script for New Zealand trip
*/

let lat = -44.7;
let lon = 169.15;
let zoom = 13;


let stop = {
    number: 16,
    user: "lizzie2911",
    lat: lat,
    lon: lon,
    zoom: zoom,
};

// Map initialisation
let map = L.map('map').setView([lat, lon], zoom);



// Background map defined
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
// create Marker
let marker = L.marker([lat, lon]).addTo(map);

// Popup defined and opened
marker.bindPopup(`
    <h2> Wanaka </h2>
    <ul>
        <li> Geogr. Breiter:${lat.toFixed(5)}° </li>
        <li> Geogr. Länger: ${lon.toFixed(5)}° </li>
    </ul>
`).openPopup();
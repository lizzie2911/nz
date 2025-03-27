/*
Script for New Zealand trip
*/

let lat = -44.7;
let lon = 169.15;
let zoom = 13;

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
    <b>Hello world!</b>
    <br>Welcome to Wanaka at ${lat} / ${lon} !! :)
`).openPopup();

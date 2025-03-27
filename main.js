/*
Script for New Zealand trip
*/


// Map initialisation
var map = L.map('map').setView([-44.7, 169.15], 13);

// Background map defined
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
// create Marker
        var marker = L.marker([-44.7, 169.15]).addTo(map);

// Popup defined and opened
        marker.bindPopup("<b>Hello world!</b><br>Welcome to Wanaka!! :)").openPopup();
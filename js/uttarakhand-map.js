// uttarakhand-map.js
// Renders Leaflet map, terrain tiles, markers, and disaster animations

import L from 'leaflet';

export function initUttarakhandMap(containerId, geoData) {
    const map = L.map(containerId).setView([30.0668, 79.0193], 8);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Add villages as markers
    geoData.villages.forEach(village => {
        L.marker([village.lat, village.lng])
            .addTo(map)
            .bindPopup(`<b>${village.name}</b><br>Elevation: ${village.elevation}m`);
    });

    // Draw river polylines
    geoData.rivers.forEach(river => {
        L.polyline(river.path, { color: 'blue' }).addTo(map);
    });

    // Animate risk zones
    geoData.riskZones.forEach(zone => {
        L.polygon(zone.coords, { color: 'red', fillOpacity: 0.3 }).addTo(map);
    });

    return map;
}

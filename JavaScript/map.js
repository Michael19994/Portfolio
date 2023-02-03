// Map install
const map = L.map('map').setView([55.953333, -3.189167], 13);

const dark = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://www.opensreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto/.com/attributions">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 20
});

dark.addTo(map);

L.control.layers(baseMaps).addTo(map);

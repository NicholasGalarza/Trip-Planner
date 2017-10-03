const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");



mapboxgl.accessToken = "pk.eyJ1IjoicGluZ3dpbnpsb3R5IiwiYSI6ImNqOGJ0NGF4ejAxcnQyd29razNnM29ncDYifQ.9hm_D0gtkCHlJSEm6rkomg";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});
//
const marker = buildMarker("activities", [-74.009151, 40.705086]);
marker.addTo(map);
const hotel = buildMarker('hotels', [-76.409151, 38.305086]);
//marker.addTo(map);
hotel.addTo(map);

// const markerDomEl = document.createElement("div"); // Create a new, detached DIV
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
//
// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);

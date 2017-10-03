const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");



mapboxgl.accessToken = "pk.eyJ1IjoicGluZ3dpbnpsb3R5IiwiYSI6ImNqOGJ0NGF4ejAxcnQyd29razNnM29ncDYifQ.9hm_D0gtkCHlJSEm6rkomg";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/light-v9" // mapbox has lots of different map styles available.
});

const marker = buildMarker("activities", [-74.009351, 40.705086]);
marker.addTo(map);

const hotel = buildMarker('hotels', [-74.009352, 40.708019]);
hotel.addTo(map);

const restaurant = buildMarker('restaurants', [-74.008151, 40.705076]);
restaurant.addTo(map);

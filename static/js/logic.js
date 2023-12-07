


let myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

const url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

d3.json(url).then(function(data) {
  // Corrected function name from L.geojson to L.geoJson
  L.geoJson(data, {
      // Corrected the pointToLayer function
      pointToLayer: function(feature, latlng) {
          return L.circleMarker(latlng);
      }
      }).addTo(myMap);
      function markerSize(magnitude) {
        return features.property.mag};
  console.log(data)
    });





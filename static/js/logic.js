
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
          },
          
          // set style for markers
          style: setStyle,

    

//Pop up
          onEachFeature: function(feature, layer) {
            layer.bindPopup("Magnitude- " + feature.properties.mag + "<br>Depth- " + feature.geometry.coordinates[2])
          }    
        }).addTo(myMap);
      console.log(data)
    });
           // Size and Color   
    function getColor(d) {
      return d > 15 ? '#3D3D3D' :
             d > 11  ? '#8c2d04' :
             d > 8  ? '#cc4c02' :
             d > 4   ? '#ec7014' :
             d > 3   ? '#fe9929' :
             d > 2   ? '#fff7bc' :
                        '#ffffe5';
  }

    function setStyle(feature) {
      return {
        radius: markerSize(feature.properties.mag),
        fillColor: getColor(feature.geometry.coordinates[2]),
        weight: 1,
        opacity: 100,
        color: getColor(feature.geometry.coordinates[2]),
        fillOpacity: 0.7
      };
    }

    function markerSize(magnitude) {
      return magnitude * 3;
    };


L.geoJson(Data, {style: style}).addTo(myMap);
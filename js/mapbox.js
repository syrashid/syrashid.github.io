mapboxgl.accessToken = 'pk.eyJ1Ijoic3lyYXNoaWQxMSIsImEiOiJjazA5d3ZtaXAwY2ZvM2Rtd3J2ZjU2aDhuIn0.Pz4kRXmEHgpdC530OpRozg';

var currLngLat = [144.990875, -37.827259];

var map = new mapboxgl.Map({
container: 'map', // container id
style: 'mapbox://styles/mapbox/dark-v10', // stylesheet location
center: [-77.273300, 38.795021], // starting position [lng, lat]
zoom: 0,
attributionControl: false // starting zoom
});

document.getElementById('fly').addEventListener('click', function(){
  map.flyTo({
    center: currLngLat,
    zoom: 11,
  });
});

var size = 100;

var pulsingDot = {
  width: size,
  height: size,
  data: new Uint8Array(size * size * 4),

  onAdd: function() {
    var canvas = document.createElement('canvas');
    canvas.width = this.width;
    canvas.height = this.height;
    this.context = canvas.getContext('2d');
  },

  render: function() {
    var duration = 1000;
    var t = (performance.now() % duration) / duration;

    var radius = size / 2 * 0.3;
    var outerRadius = size / 2 * 0.7 * t + radius;
    var context = this.context;

// draw outer circle
    context.clearRect(0, 0, this.width, this.height);
    context.beginPath();
    context.arc(this.width / 2, this.height / 2, outerRadius, 0, Math.PI * 2);
    context.fillStyle = 'rgba(0, 238, 175,' + (1 - t) + ')';
    context.fill();

    // draw inner circle
    context.beginPath();
    context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
    context.fillStyle = 'rgba(0, 238, 175, 1)';
    context.strokeStyle = 'white';
    context.lineWidth = 2 + 4 * (1 - t);
    context.fill();
    context.stroke();

    // update this image's data with data from the canvas
    this.data = context.getImageData(0, 0, this.width, this.height).data;

    // keep the map repainting
    map.triggerRepaint();

    // return `true` to let the map know that the image was updated
    return true;
  }
};

map.on('load', function () {

  map.addImage('pulsing-dot', pulsingDot, { pixelRatio: 2 });

  map.addLayer({
    "id": "points",
    "type": "symbol",
    "source": {
      "type": "geojson",
      "data": {
        "type": "FeatureCollection",
        "features": [{
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": currLngLat
          }
        }]
      }
    },
    "layout": {
      "icon-image": "pulsing-dot"
    }
  });
});

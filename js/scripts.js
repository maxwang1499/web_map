


// Here is my Mapbox Access Token
mapboxgl.accessToken = 'pk.eyJ1IjoibWF4d2FuZ21vZGMiLCJhIjoiY2xnNXFpa251MDVzZTNtbzhwNXdlanVlaiJ9.GD8JDqHptdwCss1PtVZkcg';

//Create the map using Mapbox.
//////////////////////////
const map = new mapboxgl.Map({
  container: 'map', // container ID
  // A simple map style from Mapbox'
  style: 'mapbox://styles/mapbox/light-v11', // style URL
  center: [-73.9948020038122, 40.735146045214435], // starting position [lng, lat]
  zoom: 12.5 // starting zoom
});

//Add the Data Source that we uploaded to Mapbox as a tileset using the url.
//////////////////////////
map.on('load', () => {
  map.addSource('buildings', {
    type: 'vector',
    url: 'mapbox://maxwangmodc.7ttnk8ta'
  });


  //Add the data as a layer
  //////////////////////////
  map.addLayer(
    {
      'id': 'building-dots',
      'type': 'circle',
      'source': 'buildings',
      'source-layer': 'Non_City_LL97v3-bqiibp',
      'paint': {
        //Color each marker based on penalty status.
        'circle-color': [
          'match',
          ['get', 'penalty_status'],
          'no', '#24892d',          // Green for no penalty
          's2030', '#ffbc02',   // Orange for penalty starting in 2030
          's2024', '#e01a27',   // Red for penalty starting in 2024

          '#ccc'
        ],
        'circle-radius': [
          'interpolate',
          ['linear'],
          ['zoom'],
          10,  // Zoom level 10
          1,   // Circle radius at zoom level 10
          12,  // Zoom level 12
          2,    // radius at level 12
          16,   // Zoom Level 14
          6 // radius at level 14

        ]
      },

    },
    'road-label-simple' // Add layer below labels
    
  );

    //Now, we will add an initial pop up that display the property name
  //////////////////////////////////////////////////////////////////////////////
  let popup = new mapboxgl.Popup({ closeButton: false, closeOnClick: false });
  // display only when hovered
  map.on('mouseenter', 'building-dots', (e) => {

    const lat = e.features[0].properties['latitude']
    const long = e.features[0].properties['longitude']
    const property_name = e.features[0].properties['property_name']
    popup.setLngLat([long, lat])
      .setHTML(property_name)
      .addTo(map);
  });
  //disappear when unhovered
  map.on('mouseleave', 'buildings', () => {
    popup.remove();
  });

});

//Add the search box.
//////////////////////////
const geocoder = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken,
  mapboxgl: mapboxgl,
  placeholder: 'Find a building',
  zoom: 17,
  marker: false
});

document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

//Add 3D buildings at closer zoom.
//////////////////////////////////////////////////////////////////////////////
map.on('style.load', () => {
  // Insert the layer beneath any symbol layer.
  const layers = map.getStyle().layers;
  const labelLayerId = layers.find(
    (layer) => layer.type === 'symbol' && layer.layout['text-field']
  ).id;

  // The 'building' layer in the Mapbox Streets
  // vector tileset contains building height data
  // from OpenStreetMap.
  map.addLayer(
    {
      'id': 'add-3d-buildings',
      'source': 'composite',
      'source-layer': 'building',
      'filter': ['==', 'extrude', 'true'],
      'type': 'fill-extrusion',
      'minzoom': 15,
      'paint': {
        'fill-extrusion-color': '#aaa',

        // Use an 'interpolate' expression to
        // add a smooth transition effect to
        // the buildings as the user zooms in.
        'fill-extrusion-height': [
          'interpolate',
          ['linear'],
          ['zoom'],
          15,
          0,
          15.05,
          ['get', 'height']
        ],
        'fill-extrusion-base': [
          'interpolate',
          ['linear'],
          ['zoom'],
          15,
          0,
          15.05,
          ['get', 'min_height']
        ],
        'fill-extrusion-opacity': 0.6
      }
    },
    labelLayerId
  );
});

// event listeners

$('#fly-to-the-dirtest').on('click', function() {
    map.flyTo({
        center: [-73.891611, 40.853346],
        zoom: 16
    })
})


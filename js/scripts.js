


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
  map.on('mouseleave', 'building-dots', () => {
    popup.remove();
  });


//Add info bar for detailed building info.
//////////////////////////////////////////////////////////////////////////////

const name_display = document.getElementById('name');
const address_display = document.getElementById('address');
const use_display = document.getElementById('use');
const year_display = document.getElementById('year');
const pen2024_display = document.getElementById('pen2024');
const pen2030_display = document.getElementById('pen2030');
const emission_display = document.getElementById('emission');
const electric_display = document.getElementById('electric');
const gas_display = document.getElementById('gas');
const oil2_display = document.getElementById('oil2');
const oil4_display = document.getElementById('oil4');
const grade_display = document.getElementById('grade');

let ID = null;

map.on('click', 'building-dots', (event) => {
  //fly to the location
  const lat = event.features[0].properties['latitude'];
  const long = event.features[0].properties['longitude'];
  map.flyTo({center: [long, lat], zoom: 17, pitch: 45,
    // Set essential to true for smooth transition
    essential: true 
  });



  // Set constants equal to the data we are intersted in
  const name = event.features[0].properties.property_name;
  const address = event.features[0].properties.standardized_address;
  const use = event.features[0].properties.property_use_type;
  const year = event.features[0].properties.construction_year;
  const pen2024 = event.features[0].properties.penalties_2024_2029;
  const pen2030 = event.features[0].properties.penalties_2030_2035;
  const emission = event.features[0].properties.carbon_emissions;
  const electric = event.features[0].properties.electricity_kWh;
  const gas = event.features[0].properties.natural_gas_kBtu;
  const oil2 = event.features[0].properties['properties.fuel_oil_#2_kBtu'];
  const oil4 = event.features[0].properties['properties.fuel_oil_#4_kBtu'];
  const grade = event.features[0].properties.energy_grade;

  // Check whether features exist
  if (event.features.length === 0) return;
  // Display the info in the infobar
  name_display.textContent = name;
  address_display.textContent = address;
  use_display.textContent = use;
  year_display.textContent = year;
  pen2024_display.textContent = pen2024;
  pen2030_display.textContent = pen2030;
  emission_display.textContent = emission;
  electric_display.textContent = electric;
  gas_display.textContent = gas;
  oil2_display.textContent = oil2;
  oil4_display.textContent = oil4;
  grade_display.textContent = grade;

  // If ID for the hovered feature is not null,
  // use removeFeatureState to reset to the default behavior
  if (ID) {
    map.removeFeatureState({
      source: 'building-dots',
      id: ID
    });
  }

  ID = event.features[0].id;

  // When the mouse moves over the building-dots layer, update the
  // feature state for the feature under the mouse
  map.setFeatureState(
    {
      source: 'building-dots',
      id: ID
    },
    {
      hover: true
    }
  );

  // Change the cursor to a pointer when the mouse is over the places layer.
map.on('mouseenter', 'building-dots', () => {
  map.getCanvas().style.cursor = 'pointer';
  });
   
  // Change it back to a pointer when it leaves.
  map.on('mouseleave', 'building-dots', () => {
  map.getCanvas().style.cursor = '';
  });
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
        center: [-73.89089872008321, 40.853076337167046],
        zoom: 18
    })
})


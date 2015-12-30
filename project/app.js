var map;
function initialize() {
  var mapOptions ={
  
    center: new google.maps.LatLng(37.773972, -122.431297),
    zoom: 12
    // mapTypeId: google.maps.MapTypeId.HYBRID,
    //scrollwheel: false,
   // draggable: false,
    //panControl: true,
   // zoomControl: true,
   // mapTypeControl: true,
   // scaleControl: true,
    // streetViewControl: true,
    // overviewMapControl: true,
    // rotateControl: true,
  };
map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);






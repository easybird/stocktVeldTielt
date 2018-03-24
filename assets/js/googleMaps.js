/* eslint-disable no-unused-vars, no-undef */
function initMap() {
  var uluru = {lat: 50.9895982, lng: 3.3289063};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

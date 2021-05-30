function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 46.619261, lng: -33.134766 },
    zoom: 3,
  });

    var labels = "ABCSEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        {lat: 40.785091, lng: -73.968285},
        {lat: 41.755691, lng: -73.968285},
        {lat: 40.785091, lng: -73.968285}
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}
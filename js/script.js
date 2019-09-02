
// import carousel
(function(){
  var templateSlide = document.getElementById('template-slide-item').innerHTML;

  Mustache.parse(templateSlide);

  var listSlides = '';

  for(var i = 0; i < imageData.length; i++){
    listSlides += Mustache.render(templateSlide, imageData[i]);
  }

  var fullSlidesList = Mustache.render(listSlides);
  results.insertAdjacentHTML('beforeend', fullSlidesList);

  var elem = document.querySelector('.carousel');
  var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  wrapAround: true,
  hash: true,
  pageDots: false
  });

})();

// Google Maps
// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {lat: -25.363, lng: 131.044};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}

(function(){
  var infos = document.getElementById('infos');

  window.initMap = function() {
    var uluru = {lat: -25.363,lng: 131.044};
    var coords2 = {lat: -25.363, lng: 134.044};
    var coords3 = {lat: -25.363, lng: 137.044};

    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 4,
      center: uluru
    });

    var markerOne = new google.maps.Marker({
      position: uluru,
      map: map
    });

    markerOne.addListener('click', function(){
      infos.innerHTML = 'You clicked markerOne'
    });

    var markerTwo = new google.maps.Marker({
      position: coords2,
      map: map
    });

    var markerThree = new google.maps.Marker({
      position: coords3,
      map: map
    });

    markerThree.addListener('click', function(){
      infos.innerHTML = 'You clicked markerThree';
    });
  };
})();
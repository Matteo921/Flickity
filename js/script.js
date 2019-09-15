// import carousel
'use strict';
(function () {
  var templateSlide = document.getElementById('template-slide-item').innerHTML;
   Mustache.parse(templateSlide);

  var listSlides = '';

  for(var i = 0; i < imageData.length; i++){
    listSlides += Mustache.render(templateSlide, imageData[i]);
  };


  var fullSlidesList = Mustache.render(listSlides);
  results.insertAdjacentHTML('beforeend', fullSlidesList);

  var elem = document.querySelector('.carousel');
  window.flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  wrapAround: true,
  hash: true,
  pageDots: false
  });

})();

// Google Maps

'use strict';
(function(){ 
  
    window.initMap = function() {
    
    var uluru = {lat: 31.993464, lng: 36.537870};
    var japan = {lat: 35.009677, lng: 135.666762};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });
    
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    }); 
  } 
   
})();  

'use strict';
(function(){ 
  
  var infos = document.getElementById('infos');
  
  
    window.initMap = function() {
    var uluru = {lat: 31.993464, lng: 36.537870};
    var japan = {lat: 35.009677, lng: 135.666762};
    
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });
    
    var markerOne = new google.maps.Marker({
      position: uluru,
      map: map
    });
    

    markerOne.addListener('click', function(){
      infos.innerHTML = 'You clicked markerOne';
    });   
    
    
    var markerTwo = new google.maps.Marker({
      position: coords2,
      map: map
    });

    markerTwo.addListener('click', function(){
      infos.innerHTML = 'You clicked markerTwo';
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

'use strict';
(function(){ 
  
    window.initMap = function() {
    var uluru = {lat: 31.993464, lng: 36.537870};
    var japan = {lat: 35.009677, lng: 135.666762}
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      center: uluru
    });
          
    for (var i = 0; i < imageData.length; i++) {
<<<<<<< HEAD
       var marker = new google.maps.Marker({
          position: imageData[i].coords,
=======
       var Marker = new google.maps.Marker({
          position: imageData[0].coords,
>>>>>>> GoogleMaps
          map:map
    });
        marker.addListener('click', (function() {
          flkty.select(this)
        }).bind(i));
  };

    document.getElementById('center-map').addEventListener('click', function(event){
      event.preventDefault();
      map.panTo(uluru);
      
      map.setZoom(10);
    });

    document.getElementById('center-smooth').addEventListener('click', function(event){
      event.preventDefault();
      smoothPanAndZoom(map, 7, japan);
    });
  } 

  var smoothPanAndZoom = function(map, zoom, coords){
    var jumpZoom = zoom - Math.abs(map.getZoom() - zoom);
    jumpZoom = Math.min(jumpZoom, zoom -1);
    jumpZoom = Math.max(jumpZoom, 3);

    smoothZoom(map, jumpZoom, function(){
      smoothPan(map, coords, function(){
        smoothZoom(map, zoom); 
      });
    });
  };
  
  var smoothZoom = function(map, zoom, callback) {
    var startingZoom = map.getZoom();
    var steps = Math.abs(startingZoom - zoom);
    
    if(!steps) {
      if(callback) {
        callback();
      }
      return;
    }

    var stepChange = - (startingZoom - zoom) / steps;

    var i = 0;
    var timer = window.setInterval(function(){
      if(++i >= steps) {
        window.clearInterval(timer);
        if(callback) {
          callback();
        }
      }
      map.setZoom(Math.round(startingZoom + stepChange * i));
    }, 80);
  };

  var smoothPan = function(map, coords, callback) {
    var mapCenter = map.getCenter();
    coords = new google.maps.LatLng(coords);

    var steps = 12;
    var panStep = {lat: (urulu.lat(31.993464) - mapCenter.lat(31.993464)) / steps, lng: (uluru.lng(36.537870) - mapCenter.lng(36.537870)) / steps};

    var i = 0;
    var timer = window.setInterval(function(){
      if(++i >= steps) {
        window.clearInterval(timer);
        if(callback) callback();
      }
      map.panTo({lat: mapCenter.lat(31.993464) + panStep.lat * i, lng: mapCenter.lng(36.537870) + panStep.lng * i});
    }, 1000/30);
  }; 
  
})();  

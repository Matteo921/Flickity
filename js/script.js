// import carousel
'use strict';
(function () {
  var templateSlide = document.getElementById('template-slide-item').innerHTML;
   Mustache.parse(templateSlide);

  var listSlides = '';

  for( i = 0; i < imageData.length; i++){
    listSlides += Mustache.render(templateSlide, imageData[i]);
  };


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

'use strict';
(function(){ 
  
    window.initMap = function() {
    
    var uluru = {lat: -25.363, lng: 131.044};
    
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
    var uluru = {lat: -25.363, lng: 131.044};

    
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
    var uluru = {lat: -25.363, lng: 131.044};
    var portugal = {lat: -8.636258, lng: 39.691540}
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      center: uluru
    });
          
    for (var i = 0; i < imageData.length; i++) {
       var Marker = new google.maps.Marker({
          position: imageData[i].coords,
          map:map
    });
  };

    document.getElementById('center-map').addEventListener('click', function(event){
      event.preventDefault();
      map.panTo(portugal);
      
      map.setZoom(10);
    });

    document.getElementById('center-smooth').addEventListener('click', function(event){
      event.preventDefault();
      smoothPanAndZoom(map, 7, uluru);
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
    var panStep = {lat: (coords.lat() - mapCenter.lat()) / steps, lng: (coords.lng() - mapCenter.lng()) / steps};

    var i = 0;
    var timer = window.setInterval(function(){
      if(++i >= steps) {
        window.clearInterval(timer);
        if(callback) callback();
      }
      map.panTo({lat: mapCenter.lat() + panStep.lat * i, lng: mapCenter.lng() + panStep.lng * i});
    }, 1000/30);
  }; 
  
})();  
initMap();
    for (var i = 0; i < imageData.length; i++) {
       var Marker = new google.maps.Marker({
          position: imageData[i].coords,
          map:map
    });
  };
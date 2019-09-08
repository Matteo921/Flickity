// import carousel
(function(){
  var templateSlide = document.getElementById('template-slide-item').innerHTML;

  Mustache.parse(templateSlide);

  var listSlides = '';

  for(var i = 0; i < imageData.length; i++){
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
  
  // Definujemy funkcję initMap w zakresie globalnym (czyli jako właściwość obiektu window).
    window.initMap = function() {
    
    // Zapisujemy w zmiennej obiekt zawierający współrzędne geograficzne.
    var uluru = {lat: -25.363, lng: 131.044};
    
    // W zmiennej map zapisujemy nową instancję obiektu Map. 
    var map = new google.maps.Map(document.getElementById('map'), {
      // Podajemy opcje mapy, np. zoom i punkt wycentrowania mapy.
      zoom: 4,
      center: uluru
    });
    
    // Definiujemy marker jako nową instancję obiektu Marker.
    var marker = new google.maps.Marker({
      // I podajemy opcje tego markera, np. na której mapie ma być dodany oraz jakie są jego współrzędne. 
      position: uluru,
      map: map
    }); 
  } 
   
})();  

'use strict';
(function(){ 
  // Zapiszemy sobei w zmiennej odwołanie do elementu z id="infos", w którym będziemy wyświetlać komunikaty po kliknięciu markera. 
  
  var infos = document.getElementById('infos');
  
  // Definiujemy funkcję initMap tak samo jak wcześniej. 
  
    window.initMap = function() {
    // Zdefiniujemy parę dodatkowych współrzędnych dla dodatkowych markerów. 
    var uluru = {lat: -25.363, lng: 131.044};

    var coords2 = {lat: -33.874237, lng: 151.198517};

    var coords3 = {lat: -8.636258, lng: 39.691540};

    var coords4 = {lat: -18.109222, lng: 65.740824};

    var coords5 = {lat: -70.235885, lng: 18.947303};



    
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });
    
    var markerOne = new google.maps.Marker({
      position: uluru,
      map: map
    });
    
    // Po dodaniu markera możemy użyć jego metody addListener:
    
    markerOne.addListener('click', function(){
      // Wewnątrz funcji wpisujemy kod, który ma się wykonać po kliknięciu markera. W tym przykładzie wyświetlimy tekst na stronie. 
      infos.innerHTML = 'You clicked markerOne';
    });   
    
    // Dodajemy jeszcze dwa markery, aby sprawdzić czy na pewno kliknięcie każdego z nich wyświetli inny tekst. 
    
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
    
    // Oczywiście, w takim przypadku dużo lepiej by było zastosować pętlę do zdefiniowania wielu markerów, niż powtarzać prawie identyczny kod. To jednak będzie już za chwilę częścią Twojego zadania!
    
  }; 
  
})();  

/*
UWAGA: Normalnie nie ma potrzeby wywołania funkcji initMap, tak jak robimy to poniżej. Musieliśmy jednak zmodyfikować sposób wczytywania skryptu Google Maps API ze względu na działanie CodePena. W Twoim kodzie nie powinno być tego wywołania. 
*/'use strict';
(function(){ 
  // Definiujemy funkcję initMap tak samo jak wcześniej. 
  
    window.initMap = function() {
    var uluru = {lat: -25.363, lng: 131.044};
    var sydney = {lat: -33.874237, lng: 151.198517};
    var Portugal = {lat: -8.636258, lng: 39.691540};
    var Islandia = {lat: -18.109222, lng: 65.740824};
    var Dominikana = {lat: -70.235885, lng: 18.947303};

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      center: uluru
    });
    
    var markerOne = new google.maps.Marker({
      position: uluru,
      map: map
    });
    
    var markerTwo = new google.maps.Marker({
      position: sydney,
      map: map
    });
    var markerThree = new google.maps.Marker({
      position: Portugal,
      map: map
    })
    var markerFour = new google.maps.Marker({
      position:Islandia,
      map: map
    })
    var markerFive = new google.maps.Marker({
      position: Dominikana,
      map: map
    })
    // Następnie dodajemy akcję do guzika, dokładnie tak samo jak robiliśmy to w poprzednim module.
    
    document.getElementById('center-map').addEventListener('click', function(event){
      event.preventDefault();
      // Najpierw wykorzystujemy metodę panTo w obiekcie map do przesunięcia współrzędnych mapy:
      map.panTo(sydney);
      
      // A następnie zmieniamy powiększenie mapy:
      map.setZoom(10);
    });
    
    /* Jak widzisz, guzik "Center map" nagle przeskakuje do docelowych pozycji i powiększenia. 
    
    Jako alternatywę przygotowaliśmy funkcję smoothPanAndZoom, która korzysta z funkcji smoothZoom i smoothPan. Jest to nasz własny kod, który jest przykładem tego w jaki sposób można wykorzystać JavaScript oraz podstawy matematyki do wykonania ciekawych manipulacji. 
    
    Aby zobaczyć ten efekt w akcji, kliknij najpierw guzik "Center map", a następnie "Center smoothly". 
    */
    
    document.getElementById('center-smooth').addEventListener('click', function(event){
      event.preventDefault();
      smoothPanAndZoom(map, 7, uluru);
    });
  } 
  
  var smoothPanAndZoom = function(map, zoom, coords){
    // Trochę obliczeń, aby wyliczyć odpowiedni zoom do którego ma oddalić się mapa na początku animacji.
    var jumpZoom = zoom - Math.abs(map.getZoom() - zoom);
    jumpZoom = Math.min(jumpZoom, zoom -1);
    jumpZoom = Math.max(jumpZoom, 3);

    // Zaczynamy od oddalenia mapy do wyliczonego powiększenia. 
    smoothZoom(map, jumpZoom, function(){
      // Następnie przesuwamy mapę do żądanych współrzędnych.
      smoothPan(map, coords, function(){
        // Na końcu powiększamy mapę do żądanego powiększenia. 
        smoothZoom(map, zoom); 
      });
    });
  };
  
  var smoothZoom = function(map, zoom, callback) {
    var startingZoom = map.getZoom();
    var steps = Math.abs(startingZoom - zoom);
    
    // Jeśli steps == 0, czyli startingZoom == zoom
    if(!steps) {
      // Jeśli podano trzeci argument
      if(callback) {
        // Wywołaj funkcję podaną jako trzeci argument.
        callback();
      }
      // Zakończ działanie funkcji
      return;
    }

    // Trochę matematyki, dzięki której otrzymamy -1 lub 1, w zależności od tego czy startingZoom jest mniejszy od zoom
    var stepChange = - (startingZoom - zoom) / steps;

    var i = 0;
    // Wywołujemy setInterval, który będzie wykonywał funkcję co X milisekund (X podany jako drugi argument, w naszym przypadku 80)
    var timer = window.setInterval(function(){
      // Jeśli wykonano odpowiednią liczbę kroków
      if(++i >= steps) {
        // Wyczyść timer, czyli przestań wykonywać funkcję podaną w powyższm setInterval
        window.clearInterval(timer);
        // Jeśli podano trzeci argument
        if(callback) {
          // Wykonaj funkcję podaną jako trzeci argument
          callback();
        }
      }
      // Skorzystaj z metody setZoom obiektu map, aby zmienić powiększenie na zaokrąglony wynik poniższego obliczenia
      map.setZoom(Math.round(startingZoom + stepChange * i));
    }, 80);
  };

  // Poniższa funkcja działa bardzo podobnie do smoothZoom. Spróbuj samodzielnie ją przeanalizować. 
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


// var marker = new google.maps.Marker({
//   position.coordsObject[i].coords, map:map
// });
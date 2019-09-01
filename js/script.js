
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

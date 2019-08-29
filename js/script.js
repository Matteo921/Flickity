
// import carousel
(function(){
var templateSlide = document.getElementById('template-slide').innerHTML;
var templatebox = document.getElementById('template-slide-content').innerHTML;

Mustache.parse(templateSlide);

var slideItem = '';
	for(var k = 0; k < imageData.length; k++){
		
		slideItem += Mustache.render(templateSlide, imageData[k]);
	}

var feedbackslide = Mustache.render(templatebox,{elements: slideItem});
results2.insertAdjacentHTML('beforeend', feedbackslide)
})();


var elem = document.querySelector('.carousel-cell');

var flkty = new Flickity( elem, {
  // options
  freeScroll:true,
  cellAlign: 'left',
  contain: true,
  pageDots: false,
  draggable: false,
});


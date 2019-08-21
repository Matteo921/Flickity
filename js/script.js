var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  freeScroll:true,
  cellAlign: 'left',
  contain: true
  pageDots: false,
  draggable: false,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  // options
  freeScroll: true,
  contain: true,
  prevNextButtons: false,
  
});
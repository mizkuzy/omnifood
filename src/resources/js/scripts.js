$(document).ready(() => {

  /* Sticky navigation*/
  $('.js--section-features').waypoint((direction) => {
    if (direction === 'down') {
      $('nav').addClass('sticky')
    } else {
      $('nav').removeClass('sticky')
    }
  }, {offset: '60px'})

})

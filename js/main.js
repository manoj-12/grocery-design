$('.owl-carousel-1').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  // autoplay: true,
  autoplayTimeout: 1500,
  responsive: {
    0: {
      items: 1
    }
  }
})


$('.offer-slider').owlCarousel({
  loop: true,
  margin: 50,
  nav: false,
  dots: false,
  // autoplay: true,  
  autoplayTimeout: 1000,
  responsive: {
    0:{
      items:1
  },
  400:{
    items:3
},

  600:{
      items:3
  },
  1000:{
      items:4
  }
  }
})
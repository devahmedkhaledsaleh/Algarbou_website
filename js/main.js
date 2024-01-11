$(document).ready(function () {
  var owl = $(".domains");
  owl.owlCarousel({
    rtl: true,
    margin: 25,
    nav: true,
    loop: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  });

  var owl = $(".articles");
  owl.owlCarousel({
    rtl: true,
    margin: 25,
    nav: true,
    loop: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  });
});

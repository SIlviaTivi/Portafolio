$(window).on('scroll', function() {
    if ($(window).scrollTop()) {
      $('nav').removeClass('bg-nav');
      $('nav').addClass('black');
      $('.prueba').addClass('text-white')
    } else {
      $('nav').addClass('bg-nav');
      $('nav').removeClass('black');
      $('.prueba').removeClass('text-white')
    }
  });
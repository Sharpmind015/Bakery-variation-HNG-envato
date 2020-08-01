  //
   var swiper = new Swiper('.swiper-container-1', {
      slidesPerView: 1,
      breakpoints: {
      992: {
        slidesPerView: 3
      },
      },
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
       var swiper = new Swiper('.swiper-container-2', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },
    });
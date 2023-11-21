var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: false,
    },
    breakpoints: {
    0: {
      slidesPerView: 1,
    },
    769: {
      slidesPerView: 2.5,
    },
    1201: {
      slidesPerView: 4,
    },
  },
});
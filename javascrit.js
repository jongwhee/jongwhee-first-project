var swiper = new Swiper('.main_swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    slidesPerView : 2,
    // centeredSlides: true,
    spaceBetween: 10,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
var swiper = new Swiper('.swiper2', {
  loop : true,
  slidesPerView : 3,
  spaceBetween: 10,
  slidesPerGroup: 1,
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});
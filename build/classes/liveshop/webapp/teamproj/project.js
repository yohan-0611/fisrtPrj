/**
 * 
 *///슬라이드 스크립트   
let currentSlide = 0;

function nextSlide() {
   if (currentSlide < document.querySelectorAll('.slide').length - 1) {
      currentSlide++;
   } else {
      currentSlide = 0;
   }
   updateSlider();
}

function prevSlide() {
   if (currentSlide > 0) {
      currentSlide--;
   } else {
      currentSlide = document.querySelectorAll('.slide').length - 1;
   }
   updateSlider();
}

function updateSlider() {
   const slides = document.getElementById('slides');
   const slideWidth = document.querySelector('.slide').clientWidth;
   slides.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
}

document.addEventListener('DOMContentLoaded', function() {
   var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },

   });
});
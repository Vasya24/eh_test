/* eslint-disable no-undef, no-unused-vars */
import Swiper, {Navigation} from 'swiper';
import('swiper/swiper-bundle.css');
import('swiper/swiper-bundle.min.css')
Swiper.use([Navigation])

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 13,
  slidesPerGroup: 3,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

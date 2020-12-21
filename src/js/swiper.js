import Swiper from 'swiper'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'

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

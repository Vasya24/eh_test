import './swiper'
import './maps'
import video from '../css/img/gallery/video.mp4'

// Cancelling form default submitting
// const bookForm = document.querySelector('form[data-id="dates-form"]');
// bookForm.addEventListener('submit', (e) => {
//   e.preventDefault();
// });
const forms = document.forms;

for (let f of forms) {
  f.onsubmit = (e) => {e.preventDefault()}
}


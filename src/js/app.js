import './swiper';
import './maps';

// Cancelling form default submitting

const { forms } = document;

for (const f of forms) {
  f.onsubmit = (e) => { e.preventDefault(); };
}

const side = document.querySelector('.sidebar');
const burg = document.querySelector('.burger');
const close = document.querySelector('.close');
burg.addEventListener('click', () => {
  side.classList.add('active');
});

close.addEventListener('click', () => {
  side.classList.remove('active');
});

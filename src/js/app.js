import './swiper'
import './maps'

// Cancelling form default submitting

const forms = document.forms;

for (let f of forms) {
  f.onsubmit = (e) => {e.preventDefault()}
}



let side = document.querySelector('.sidebar');
let burg = document.querySelector('.burger');
let close = document.querySelector('.close')
burg.addEventListener('click', () => {
  side.classList.add('active');
})

close.addEventListener('click', () => {
  side.classList.remove('active')
})

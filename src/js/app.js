//Cancelling form default submitting
let bookForm = document.querySelector('form[data-id="dates-form"]');
bookForm.addEventListener('submit', (e) => {
  e.preventDefault()
})

let labels = document.querySelectorAll('input[name="type"] + label');


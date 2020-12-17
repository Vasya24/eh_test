// Cancelling form default submitting
const bookForm = document.querySelector('form[data-id="dates-form"]');
bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
});

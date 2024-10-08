const ROWS = document.querySelectorAll('.row');
const BUTTONS = document.querySelectorAll('.div-btn-js');

BUTTONS.forEach(element => {
  element.addEventListener('click', () => {
    console.log(element.parentElement);
  })
});




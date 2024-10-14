const ROWS = document.querySelectorAll('.row');
const BUTTONS = document.querySelectorAll('.div-btn-js');

// Toggle answer display
ROWS.forEach((element, index) => {
  element.addEventListener('click', () => {
    toggleNotes(element, index);
  })
});

// toggle answers function
function toggleNotes(element, index) {
  element.classList.toggle("info");
    
  if (element.classList.contains("info")) {
    showNotes(element, index);

  } else {
    hideNotes(index);
  }
}

// show answers 
function showNotes(element, i) {
  element.appendChild(texts[i]);
  BUTTONS[i].innerHTML =  `<img src="./assets/images/icon-minus.svg" alt="minus"></img>`;
}

// hide  answers
function hideNotes(i) {
  texts[i].parentElement.removeChild(texts[i]);
  BUTTONS[i].innerHTML =  `<img src="./assets/images/icon-plus.svg" alt="plus"></img>`;
}

// Answer nodes
const one = document.createElement("P");
const two= document.createElement("P");
const three = document.createElement("P");
const four= document.createElement("P");

// array containing answer nodes
var texts = [one, two, three, four];

// row-one text
  one
    .innerHTML = `Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.`;

// row-two text
  two
    .innerHTML = `Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.`;


// row-three text
  three
    .innerHTML = `Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!`;

// row-four text
  four
    .innerHTML = `The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.`;

// Keyboard event listener
const ROWS = document.querySelectorAll('.row');
const BUTTONS = document.querySelectorAll('.div-btn-js');

BUTTONS.forEach((element, index) => {
  element.addEventListener('click', () => {
    toggleNotes(element, index);
  })

  // element.parentElement.addEventListener('click', () => {
  //   element.classList.add("info");

  //   if (element.classList.contains("info")) {
  //     showNotes(element, index);
  //   }
  // })
});

function toggleNotes(element, index) {
  element.classList.toggle("info");
    
  if (element.classList.contains("info")) {
    showNotes(element, index);
    console.log(element);
    
  } else {
    hideNotes(element, index);
    console.log(element.parentElement.childNodes);
    console.log(element);
  }
}

function showNotes(element, index) {
  element.parentElement.appendChild(texts[index]);
  element.innerHTML = `<img src="/assets/images/icon-minus.svg"  alt="minus_icon" />`
  
}

function hideNotes(element, index) {
  element.parentElement.removeChild(texts[index]);
  element.innerHTML = `<img src="/assets/images/icon-plus.svg"  alt="minus_icon" />`
}

const one = document.createElement("P");
const two= document.createElement("P");
const three = document.createElement("P");
const four= document.createElement("P");

var texts = [one, two, three, four];

// row one text
  one
    .innerHTML = `Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.`;

// row two text
  two
    .innerHTML = `Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.`;


// row three text
  three
    .innerHTML = `Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!`;

// row four text
  four
    .innerHTML = `The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.`;


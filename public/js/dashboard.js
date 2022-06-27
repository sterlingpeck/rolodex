// let contactsStorage=getContacts;

// const db = require('../../config/connection');

// app.use(express.json());
// app.use(express.static('public'));

// const getContacts = () =>
//   fetch('/api/contactget', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   getContacts();

const cards = [
  'Kansas Carver kansascarver@gmail.com 1111111111',
  'V Garcia vgarcia@gmail.com 8019403336',
  'Jennifer Goodwin goodwije@gmail.com 7203357097',
  'Sterling Peck peck.sterling@gmail.com 8018244075',
];

const ulEl = document.querySelector('ul');
const d = new Date();
let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
let activeIndex = daynumber;
const rotate = -360 / cards.length;
init();

function init() {
  cards.forEach((cards, idx) => {
    const liEl = document.createElement('li');
    liEl.style.setProperty('--day_idx', idx);
    liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${
      idx + 1
    }</time><span>${cards}</span>`;
    ulEl.append(liEl);
  });
  ulEl.style.setProperty('--rotateDegrees', rotate);
  adjustDay(0);
}

function adjustDay(nr) {
  daynumber += nr;
  ulEl.style.setProperty('--currentDay', daynumber);

  const activeEl = document.querySelector('li.active');
  if (activeEl) activeEl.classList.remove('active');

  activeIndex = (activeIndex + nr + cards.length) % cards.length;
  const newActiveEl = document.querySelector(
    `li:nth-child(${activeIndex + 1})`
  );
  document.body.style.backgroundColor =
    window.getComputedStyle(newActiveEl).backgroundColor;

  newActiveEl.classList.add('active');
}

window.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowUp':
      adjustDay(-1);
      break;
    case 'ArrowDown':
      adjustDay(1);
      break;
    default:
      return;
  }
});

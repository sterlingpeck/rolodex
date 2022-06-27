let contactsStorage = getContacts;

const db = require('../../config/connection');

app.use(express.json());
app.use(express.static('public'));

const getContacts = () =>
  fetch('/api/contactget', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
getContacts();

const ulEl = document.querySelector('ul');
const d = new Date();
let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
let activeIndex = daynumber;
const rotate = -360 / cards.length;
init();

function displayContactCard() {
  // Loop over the array contactsStorage and insert into the contact page

  createContactCard();

  contactCardContainer.innerHTML = '';
  for (let i = 0; i < contactsStorage.length; i++) {
    htmlStr = `<div class="savedContactInfo " id="savedContactInfo">
                    <div class="savedContact">
                    <i class="fas fa-user"></i>
                      <p type="text" name="savedContactFirstName" class="savedContactFirstName" value="">
                        ${contactsStorage[i][0]}
                      </p>
                  </div>
                  <div class="savedContact">
                    <i class="fas fa-user"></i>
                      <p type="text" name="savedContactLastName" class="savedContactLastName" value="">
                        ${contactsStorage[i][1]}
                      </p>
                  </div>
                  <div class="savedContact">
                    <i class="fas fa-phone-alt"></i>
                      <p type="text" name="savedContactPhone" class="savedContactPhone" value="">
                      ${contactsStorage[i][2]}
                      </p>
                  </div>
                  <div class="savedContact">
                    <i class="fas fa-map-marker-alt"></i>
                      <p type="text" name="savedContactEmail" class="savedContactEmail" value="">
                      ${contactsStorage[i][3]}
                      </p>
                  </div>
                  <div>
                      
                      <button type="button" class="btnDel" data-id="${i}">Delete</button>
                  </div>
              </div>`;

    contactCardContainer.innerHTML += htmlStr;
  }
  console.log(contactsStorage);
  console.log(document.querySelectorAll('.savedContactInfo'));
}

function init() {
  cards.forEach((cards, idx) => {
    const liEl = document.createElement('li');
    liEl.style.setProperty('--day_idx', idx);
    liEl.innerHTML = '';
    for (let i = 0; i < contactsStorage.length; i++) {
      htmlStr = `<div class="savedContactInfo " id="savedContactInfo">
                      <div class="savedContact">
                      <i class="fas fa-user"></i>
                        <p type="text" name="savedContactFirstName" class="savedContactFirstName" value="">
                          ${contactsStorage[i][0]}
                        </p>
                    </div>
                    <div class="savedContact">
                      <i class="fas fa-user"></i>
                        <p type="text" name="savedContactLastName" class="savedContactLastName" value="">
                          ${contactsStorage[i][1]}
                        </p>
                    </div>
                    <div class="savedContact">
                      <i class="fas fa-phone-alt"></i>
                        <p type="text" name="savedContactPhone" class="savedContactPhone" value="">
                        ${contactsStorage[i][2]}
                        </p>
                    </div>
                    <div class="savedContact">
                      <i class="fas fa-map-marker-alt"></i>
                        <p type="text" name="savedContactEmail" class="savedContactEmail" value="">
                        ${contactsStorage[i][3]}
                        </p>
                    </div>
                    <div>
                        
                        <button type="button" class="btnDel" data-id="${i}">Delete</button>
                    </div>
                </div>`;
      ulEl.append(liEl);
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
  });
}

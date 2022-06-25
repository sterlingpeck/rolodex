let contactsStorage = [];
let contactCardArr = [];
let createBtn = document.getElementById("btnSave");
let deleteBtn = document.querySelector(".btnDel");
let contactCard = document.querySelector(".savedContactInfo");
let contactCardContainer = document.querySelector(".savedContactInfoList");
let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let phone = document.querySelector("#phone");
let email = document.querySelector("#email");

let searchContactList = document.querySelector(".search");

createBtn.addEventListener("click", displayContactCard);
contactCardContainer.addEventListener("click", deleteContactCard);
createBtn.addEventListener("click", handleContactSave);

fetch("/api/contactget")
  .then((response) => response.json())
  .then((data) => {
    console.log("Success:", data);
    contactsStorage.push(...data);
    console.log(contactsStorage, "string");
    displayContactCard();
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// Creates new contact card
function createContactCard() {
  let isNull =
    firstName.value != "" ||
    lastName.value != "" ||
    phone.value != "" ||
    email.value != "";
  if (isNull) {
    contactCardArr = [
      firstName.value,
      lastName.value,
      phone.value,
      email.value,
    ];

    contactsStorage.push(contactCardArr);
  }
  // clearContactForm();
}

let htmlStr = "";

function displayContactCard() {
  // Loop over the array contactsStorage and insert into the contact page

  // createContactCard();

  contactCardContainer.innerHTML = "";
  for (let i = 0; i < contactsStorage.length; i++) {
    htmlStr = `<div class="savedContactInfo " id="savedContactInfo">
                    <div class="savedContact">
                    <i class="fas fa-user"></i>
                      <p type="text" name="savedContactFirstName" class="savedContactFirstName" value="">
                        ${contactsStorage[i].firstname}
                      </p>
                  </div>
                  <div class="savedContact">
                    <i class="fas fa-user"></i>
                      <p type="text" name="savedContactLastName" class="savedContactLastName" value="">
                        ${contactsStorage[i].lastname}
                      </p>
                  </div>
                  <div class="savedContact">
                    <i class="fas fa-phone-alt"></i>
                      <p type="text" name="savedContactPhone" class="savedContactPhone" value="">
                      ${contactsStorage[i].phone}
                      </p>
                  </div>
                  <div class="savedContact">
                    <i class="fas fa-map-marker-alt"></i>
                      <p type="text" name="savedContactEmail" class="savedContactEmail" value="">
                      ${contactsStorage[i].email}
                      </p>
                  </div>
                  <div>
                      
                      <button type="button" class="btnDel" data-id="${i}">Delete</button>
                  </div>
              </div>`;

    contactCardContainer.innerHTML += htmlStr;
  }
  console.log(contactsStorage);
  console.log(document.querySelectorAll(".savedContactInfo"));
}

function handleContactSave() {
  const newContact = {
    firstname: firstName.value,
    lastname: lastName.value,
    email: email.value,
    phone: phone.value,
  };
  console.log(newContact);
  fetch("/api/contactpost", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newContact),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      contactsStorage.push(data);
      displayContactCard();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  clearContactForm();
}

//search for contact
function searchContact() {
  let searchValue = searchContactList.value.toLowerCase();

  for (let i = 0; i < contactsStorage.length; i++) {
    if (contactsStorage[i][0].toLowerCase().includes(searchValue)) {
      // return contactCard[i];
      // } else if (!contactsStorage[i][0].toLowerCase().includes(searchValue)) {
      //     contactCard.style.display = "none";
      // }
    }
    searchValue = "";
  }
}

// Remove contact

function deleteContactCard(e) {
  if (e.target.classList.contains("btnDel")) {
    let pos = e.target.getAttribute("data-id");
    contactsStorage.splice(pos, 1);
    displayContactCard();
  }
}

// Clear contact page
function clearContactForm() {
  let clearForm = document.querySelectorAll(".clearForm");
  for (let i in clearForm) {
    clearForm[i].value = "";
  }
}

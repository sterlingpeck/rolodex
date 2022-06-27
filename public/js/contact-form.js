let contactFirstName = document.querySelector('#contact-fname');
let contactLastName = document.querySelector('#contact-lname');
let contactEmail = document.querySelector('#contact-email');
let contactPhone = document.querySelector('#contact-phone');
let contactAddress = document.querySelector('#contact-adress');
let saveContactBtn = document.querySelector('#save-contact');
app.use(express.json());
app.use(express.static('public'));

const handleContactSave = () => {
  const newContact = {
    firstname: contactFirstName.value,
    lastname: contactLastName.value,
    email: contactEmail.value,
    phone: contactPhone.value,
  };
  console.log(newContact);
  fetch('/api/contactpost', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newContact),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

const getContacts = () =>
  fetch('/api/contactget', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

saveContactBtn.addEventListener('click', handleContactSave);

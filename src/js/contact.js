import { formValidation } from '../helpers/formValidation.js';

const button = document.querySelector('.contact_form--button');

const mail = document.getElementById('contact_form_email');
const phone = document.getElementById('contact_form_phone');

const requiredPhoneorMail = () => {
  if (mail.value !== '') {
    phone.classList.remove('_req');
    phone.parentElement.classList.remove('_error');
  } else if (phone.value !== '') {
    mail.classList.remove('_req');
    mail.parentElement.classList.remove('_error');
  } else {
    mail.classList.add('_req');
    phone.classList.add('_req');
  }
};

button?.addEventListener('click', (e) => {
  e.preventDefault();
  requiredPhoneorMail();
  formValidation(e, '.contact_form');
});

import { formValidation } from '../helpers/formValidation.js';

const button = document.querySelector('.contact_form--button');
const mail = document.getElementById('contact_form_email');
const phone = document.getElementById('contact_form_phone');

const requiredPhoneOrMail = () => {
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

phone.addEventListener('focus', (e) => {
  if (e.target.value.length > 1) return;
  e.target.value = '+';
});

phone.addEventListener('keypress', (e) => {
  if (!/\d/.test(e.key)) e.preventDefault();
});

button?.addEventListener('click', (e) => {
  e.preventDefault();
  requiredPhoneOrMail();
  formValidation(e, '.contact_form');
});

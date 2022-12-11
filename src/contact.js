import { formValidation } from './helpers/formValidation.js';

const buuton = document.querySelector('.contact_form--button');

buuton?.addEventListener('click', (e) => {
  formValidation(e, '.contact_form');
});

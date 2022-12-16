import { formValidation } from '../helpers/formValidation.js';

const buuton = document.querySelector('.footer_button');

buuton?.addEventListener('click', (e) => {
  formValidation(e, '.footer_form');
});

// instruction
//for start ==> on form button "click" need and formValidation(event,'.form_class')
//form button must have type "submit"
// validator will work with next classes in inputs:
// '_req' for required values(if they '' => error)
// '_email' for email input
// '_phone'  - no logic yet
// '_name' - no logic yet
// '_message' - no logic yet

// Classes for form error
// '_error'

export function formValidation(event, formClass) {
  event.preventDefault();
  const form = document.querySelector(formClass);
  let formData = new FormData(form);

  async function formSend() {
    let error = validate(form);
    console.log(error);
    if (error === 0) {
      form.classList.add('_sending');
      let reesponse = await fetch('sendmail.php', {
        method: 'POST',
        body: formData,
      });
      if (reesponse.ok) {
        let result = await reesponse.json();
        alert(result.message);
        form.reset();
        form.classList.remove('_sending');
      } else {
        form.classList.remove('_sending');
        alert('Error');
      }
    } else {
      console.log('form error');
    }
  }

  function validate(form) {
    let error = 0;

    let formRequiredItem = Array.from(form.querySelectorAll('._req'));
    formRequiredItem.forEach((input) => {
      removeError(input);

      if (input.value === '') {
        formAddError(input);
        error++;
        return;
      }

      if (input.classList.contains('_email')) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      }
    });
    return error;
  }
  const formAddError = (input) => {
    // input.parentElement.classList.add('_error');
    input.classList.add('_error');
  };
  const removeError = (input) => {
    // input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  };
  const emailTest = (input) => {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  };
  formSend();
}

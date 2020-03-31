import maskPhone from "./maskPhone";

const validateForm = () => {
  const rusTextInputs = document.querySelectorAll('#name, #place'),
        phoneInput = document.getElementById('phone'),
        textNumInput = document.getElementById('time');

  rusTextInputs.forEach(item => {
    item.addEventListener('input', e => {
      const input = e.target;
      input.value = input.value.replace(/[^а-яё ]/i, '');
    });
  });

  textNumInput.addEventListener('input', e => {
    const input = e.target;
    input.value = input.value.replace(/[a-z]/i, '');
  });

  maskPhone('#phone');
};
export default validateForm;
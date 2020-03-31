const form = () => {
  const form = document.querySelector('.form');

  form.addEventListener('click', e => {
    const target = e.target;
    if(!target.closest('.form-item__label') && !target.closest('.consent__title')){
      return
    } else if (target.closest('.form-item__checkbox') || target.closest('.consent__checkbox')) return;
    target.classList.toggle('active');

  });
};

export default form;
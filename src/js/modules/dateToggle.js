const dateToggle = () => {
  const btn = document.getElementById('calendar-btn'),
        content = document.getElementById('calendar-cnt');

  btn.addEventListener('click', () => {
    content.classList.toggle('hidden');
    btn.classList.toggle('customselect__title_active');
    document.querySelector('.menu').classList.toggle('hidden');
    if(document.documentElement.clientWidth < 576){
      document.querySelector('.menu-footer__link').classList.toggle('hidden');
    }
  });
};

export default dateToggle;
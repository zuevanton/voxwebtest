const customSelectTravel = () => {
  const btn = document.getElementById('travel-type-btn'),
        content = document.getElementById('travel-type-cnt');

  const toggleCnt = () => {
    content.classList.toggle('hidden');
    btn.classList.toggle('customselect__title_active');
    document.querySelector('.menu').classList.toggle('hidden');
    if(document.documentElement.clientWidth < 576){
      document.querySelector('.menu-footer__link').classList.toggle('hidden');
    }
  };
  btn.addEventListener('click', toggleCnt);

  const choseType = () => {
    const list = content.querySelector('.travel__list');
    list.addEventListener('click', e => {
      const target = e.target;
      if(!target.closest('.travel__type')) return;
      btn.textContent = target.textContent;
      toggleCnt();
    });
  };
  choseType();
};

export default customSelectTravel;
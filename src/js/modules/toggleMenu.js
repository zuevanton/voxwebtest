const toggleMenu = () => {
  const btn = document.querySelector('.menu-btn'),
        menu = document.querySelector('.popup-wrap');
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    btn.classList.toggle('menu-btn_active');
    menu.classList.toggle('popup-wrap_active');
  });
};

export default toggleMenu;
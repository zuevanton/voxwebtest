import '../style/main.sass';
import toggleMenu from "./modules/toggleMenu";
import form from "./modules/form";
import customSelectCountry from "./modules/customSelect";
import dateToggle from "./modules/dateToggle";
import customSelectTravel from "./modules/customSelectTravel";
import sendForm from "./modules/sendForm";
import validateForm from "./modules/validateForm";

window.addEventListener('DOMContentLoaded', () => {
  'use strict';
  toggleMenu();
  form();
  const countrySelect = new customSelectCountry({
    btn: 'country-btn',
    list: 'country-list'
  });
  countrySelect.init();


  pickmeup.defaults.locales['ru'] = {
    days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    daysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']
  };
  pickmeup('.calendar', {
    flat : true,
    mode : 'range',
    locale: 'ru',
    prev: '<img src="images/arrow.png">',
    next: '<img src="images/arrow.png">'
  });

  dateToggle();
  customSelectTravel();
  sendForm();
  validateForm();
});
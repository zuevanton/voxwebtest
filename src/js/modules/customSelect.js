export default class CustomSelectCountry {
  constructor({btn, list, isInner}) {
    this.btn = document.getElementById(btn);
    this.list = document.getElementById(list);
    this.countries = this.list.querySelectorAll('.list');
  }
  toggleList(){
    this.list.classList.toggle('list_opened');
    this.btn.classList.toggle('customselect__title_active');
    document.querySelector('.menu').classList.toggle('hidden');
    if(document.documentElement.clientWidth < 576){
      document.querySelector('.menu-footer__link').classList.toggle('hidden');
    }
  }
  showCountryBlock(e){
    const target = e.target;
    Array.from(this.countries).forEach(item => {
      if(target.closest('.list__title') === item.querySelector('.list__title')){
        item.classList.toggle('title_opened');
      } else {
        item.classList.remove('title_opened');
      }
    });

  }
  showChosenCountry(e){
    const target = e.target;
    if(!target.closest('.list__country')) return;
    this.toggleList();
    this.btn.textContent = target.textContent;
  }
  init(){
    this.btn.addEventListener('click', this.toggleList.bind(this));
    this.list.addEventListener('click', (e) => {
      this.showCountryBlock(e);
      this.showChosenCountry(e);
    })
  }
}
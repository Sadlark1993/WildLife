
export default class MenuMobile{
  constructor(){
    this.menuBtn = document.querySelector('header>.menu>.logo>.menu-mobile');
    this.menuList = document.querySelector('header .menu-list');

    //bind
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    event.preventDefault();
    this.menuBtn.classList.toggle('active');
    this.menuList.classList.toggle('active');
  }

  init(){
    this.menuBtn.addEventListener('click', this.handleClick);
    document.body.addEventListener('click', (event)=>{
      if(event.target !== this.menuBtn){
        this.menuBtn.classList.remove('active');
        this.menuList.classList.remove('active');
      }
    });
  }

}
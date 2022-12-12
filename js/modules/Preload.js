

//evitar que as animações ocorram ao carregar a página.
export default class Preload{
  init(){
    setTimeout(function(){
      document.body.classList.remove('preload');
  },500);
  }
}
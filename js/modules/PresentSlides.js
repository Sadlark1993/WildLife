
//Ficar mudando a imagem de apresentacao do site
export default class PresentSlides{
    constructor(){
        this.presImg = document.querySelectorAll('.slide-wrap .imagens li');
        //console.log(presImg);

        this.cControl = document.querySelectorAll('.slide-wrap .custom-control li');
        //console.log(cControl);

        this.apTexto = document.querySelector('.container.present-content');
        /* console.log(presImg[0].offsetHeight);
        console.log(presImg[0].offsetHeight/2); */

        this.i = 0;

        //binds
        //define a classe como o this eterno desse metodo. Se nao fizer isso, o this passa ser o link q o chamou.
        this.onResize = this.onResize.bind(this);
        this.changeImg = this.changeImg.bind(this);
        this.controlCB = this.controlCB.bind(this);
    }

    adjust(){

    }

    onResize(){
        this.apTexto.style.height = `${this.presImg[0].offsetHeight}px`;
        if(window.innerWidth>740){
            this.apTexto.style.padding = `${this.presImg[0].offsetHeight/2}px 0 0 0`;
        }else{
            this.apTexto.style.padding = `${this.presImg[0].offsetHeight/5}px 0 0 0`;
        }
    }

    changeImg(){
        this.presImg.forEach((item, index)=>{
            item.classList.remove('active');
            this.cControl[index].classList.remove('active');
        });
        if(this.i >= (this.presImg.length-1))
            this.i = 0;
        else
            this.i++;
        this.presImg[this.i].classList.add('active');
        this.cControl[this.i].classList.add('active');
    }

    controlCB(index){
        this.presImg.forEach((item, index)=>{
            item.classList.remove('active');
            this.cControl[index].classList.remove('active');
        });
        this.i = index;
        this.presImg[this.i].classList.add('active');
        this.cControl[this.i].classList.add('active');
        clearInterval(this.apInt);
        this.apInt = setInterval(this.changeImg, 9000);
    }


    init(){
        
        this.apTexto.style.height = `${this.presImg[0].offsetHeight}px`;
        if(window.innerWidth>740){
            this.apTexto.style.padding = `${this.presImg[0].offsetHeight/2}px 0 0 0`;
        }else{
            this.apTexto.style.padding = `${this.presImg[0].offsetHeight/5}px 0 0 0`;
        }
        window.addEventListener('resize', this.onResize);

        setTimeout(()=>{
            this.onResize();
            setTimeout(()=>{
                this.onResize();
            }, 4500);
        }, 1500);

        this.apInt = setInterval(this.changeImg, 9000);

        this.cControl.forEach((item, index) => {
            item.addEventListener('click', ()=>{
                this.controlCB(index);
            });
        });
    }
}

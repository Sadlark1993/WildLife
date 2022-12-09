//Ficar mudando a imagem de apresentacao do site

const onResize = function(){
    apTexto.style.height = `${presImg[0].offsetHeight}px`;
    apTexto.style.padding = `${presImg[0].offsetHeight/2}px 0 0 0`;
}

const presImg = document.querySelectorAll('.slide-wrap .imagens li');
//console.log(presImg);

const cControl = document.querySelectorAll('.slide-wrap .custom-control li');
//console.log(cControl);

const apTexto = document.querySelector('.container.present-content');
console.log(presImg[0].offsetHeight);
console.log(presImg[0].offsetHeight/2);


apTexto.style.height = `${presImg[0].offsetHeight}px`;
apTexto.style.padding = `${presImg[0].offsetHeight/2}px 0 0 0`;

window.addEventListener('resize', onResize)

//funcao que vai mudando a imagem da apresentacao toda vez q for chamada.
let i = 0;
function changeImg(){
    presImg.forEach((item, index)=>{
        item.classList.remove('active');
        cControl[index].classList.remove('active');
    });
    if(i >= (presImg.length-1))
        i = 0;
    else
        i++;
    presImg[i].classList.add('active');
    cControl[i].classList.add('active');
}

let apInt = setInterval(changeImg, 9000);

function controlCB(index){
    presImg.forEach((item, index)=>{
        item.classList.remove('active');
        cControl[index].classList.remove('active');
    });
    i = index;
    presImg[i].classList.add('active');
    cControl[i].classList.add('active');
    clearInterval(apInt);
    apInt = setInterval(changeImg, 9000);
}

cControl.forEach((item, index) => {
    item.addEventListener('click', ()=>{
        controlCB(index);
    });
});
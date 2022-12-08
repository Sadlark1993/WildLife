//Ficar mudando a imagem de apresentacao do site

const presImg = document.querySelectorAll('.slide-wrap .imagens li');

const cControl = document.querySelectorAll('.slide-wrap .custom-control li');

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
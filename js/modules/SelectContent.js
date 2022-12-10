
//selecionar conteudo a ser exibido
export default class SelectContents{
    constructor(){
        this.conteudoBtns = document.querySelectorAll('.container.hobbie>.listaBtn li');
        this.conteudos = document.querySelectorAll('.selecao>.selecionado');
    }

    init(){
        this.conteudoBtns.forEach((item, index)=>{
            item.addEventListener('click', ()=>{
                this.conteudos.forEach((item)=>{
                    item.classList.remove('active');
                });
                this.conteudos[index].classList.add('active');
            });
        });
    }
}

//modal

export default class Modal{
    constructor(abrirBtn, fecharBtn, modalSelector){
        this.abrir = document.querySelectorAll(abrirBtn);
        this.fechar = document.querySelector(fecharBtn);
        this.modal = document.querySelector(modalSelector);
        
        this.login = document.querySelector('.modal-login .container-modal #entrarBtn');

        //bind
        this.toggleModal = this.toggleModal.bind(this);
        this.outsideClick = this.outsideClick.bind(this);
        this.keyboardEvent = this.keyboardEvent.bind(this);
    }

    toggleModal(event){
        event.preventDefault();
        this.modal.classList.toggle('active');
        document.querySelectorAll('.msgErro').forEach((item)=>{
            item.innerText = '';
        })
        window.addEventListener('keydown', this.keyboardEvent); //talvez n esteja da melhor forma
    }

    outsideClick(event){
        event.preventDefault();
        if(event.target === event.currentTarget){
            this.toggleModal(event);
        }
    }

    keyboardEvent(event){
        if(event.key === 'Escape'){
            this.modal.classList.remove('active');
            window.removeEventListener('keydown', this.keyboardEvent);
        }
    }

    init(){
        this.abrir.forEach((item)=>{
            item.addEventListener('click', this.toggleModal);
        });
        this.fechar.addEventListener('click', this.toggleModal);
        this.modal.addEventListener('click', this.outsideClick);
        
        this.login.addEventListener('click', ()=>{
            document.location.reload(true);
        });
        window.addEventListener('keydown', this.keyboardEvent);
    }
}
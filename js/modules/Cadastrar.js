//classe de cadastro de usuarios

export default class Cadastrar{
  constructor(){
    this.cadastroBtn = document.querySelector('.modal-cadastro #confCadastro');
    this.message = document.querySelector('body .message');
    this.errorMsg = document.querySelector('.modal-cadastro .msgErro');

    //bind
    this.handleCadastro = this.handleCadastro.bind(this);
  }

  handleProblem(problem){

    switch(problem){
      case 1:
        this.errorMsg.innerText = 'usuário inválido.';
        break;
      case 2:
        this.errorMsg.innerText = 'email inválido.';
        break;
      case 3:
        this.errorMsg.innerText = 'senha inválida.';
        break;
      case 4:
        this.errorMsg.innerText = 'as senhas não coincidem.';
        break;
      case 5:
        this.errorMsg.innerText = 'nome de usuário já cadastrado.';
    }
    
  }

  efetuarCadastro(){
    this.errorMsg.innerText = '';
    localStorage.setItem(this.cadastro.usuario, JSON.stringify(this.cadastro));
    this.message.innerHTML = '<span>Cadastro efetuado</span>';
    this.message.classList.add('active');

    //tive que fazer malabarismo pra mensagem sumir suavemente
    this.message.style.display = 'block';
    setTimeout(()=>{
      this.message.classList.remove('active');
      setTimeout(()=>{
        this.message.style.display = 'none';
      },500);
    },1500);

    document.formCadastro.newUser.value = '';
    document.formCadastro.newEmail.value = '';
    document.formCadastro.newPass.value = '';
    document.formCadastro.newPassConf.value = '';

    document.querySelector('.modal-cadastro').classList.remove('active');
  }

  handleCadastro(event){
    event.preventDefault();
    //console.log(document.forms.formCadastro.newUser.value);
    this.cadastro = {
      usuario: document.forms.formCadastro.newUser.value.trim(),
      email: document.forms.formCadastro.newEmail.value.trim(),
      senha: document.forms.formCadastro.newPass.value.trim(),
    }
    //console.log(this.cadastro);

    let problem = 0;

    if(this.cadastro.senha !== document.forms.formCadastro.newPassConf.value){
      problem = 4;
      console.log('as senhas nao coincidem');
    }

    if(!this.cadastro.senha || this.cadastro.senha.length<6){
      problem = 3;
      console.log('senha invalida');
    }

    if(!this.cadastro.email.match(/[\w.-]+@[\w-]+\.[\w-.]+/gi)){
      problem = 2;
      console.log('email invalido');
    }

    if(!this.cadastro.usuario.match(/^[A-Za-z][A-Za-z0-9_]*$/)){
      problem = 1;
      console.log('usuario invalido');
    }

    if(localStorage.getItem(this.cadastro.usuario)){
      problem = 5;
      console.log('nome de usuario ja cadastrado');
    }

    console.log(problem);
    if(problem)
      this.handleProblem(problem);
    else{
      this.efetuarCadastro()
    }
  }

  init(){
    this.cadastroBtn.addEventListener('click', this.handleCadastro);
  }
}
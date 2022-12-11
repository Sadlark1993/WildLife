//classe de cadastro de usuarios

export default class Cadastrar{
  constructor(){
    this.cadastroBtn = document.querySelector('.modal-cadastro #confCadastro');

    //bind
    this.handleCadastro = this.handleCadastro.bind(this);
  }

  handleProblem(problem){
    let i = 2; //provisorio
  }

  efetuarCadastro(){
    localStorage.setItem(this.cadastro.usuario, JSON.stringify(this.cadastro));
  }

  handleCadastro(event){
    event.preventDefault();
    //console.log(document.forms.formCadastro.newUser.value);
    this.cadastro = {
      usuario: document.forms.formCadastro.newUser.value,
      email: document.forms.formCadastro.newEmail.value,
      senha: document.forms.formCadastro.newPass.value,
    }
    //console.log(this.cadastro);

    let problem = 0;
    if(!this.cadastro.usuario.match(/^[A-Za-z][A-Za-z0-9_]*$/)){
      problem = 1;
      console.log('usuario invalido');
    }

    if(!this.cadastro.email.match(/[\w.-]+@[\w-]+\.[\w-.]+/gi)){
      problem = 2;
      console.log('email invalido');
    }
    
    if(!this.cadastro.senha || this.cadastro.senha.length<6){
      problem = 3;
      console.log('senha invalida');
    }

    if(this.cadastro.senha !== document.forms.formCadastro.newPassConf.value){
      problem = 4;
      console.log('as senhas nao coincidem');
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
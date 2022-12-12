
//Busca pelo usuario no local storage para logar

import Modal from "./Modal.js";

export default class Login{
  constructor(){
    this.loginBtn = document.querySelector('.modal-login #entrarBtn');
    this.headerLogin = document.querySelector('header .login-btn');
    this.msgErro = document.querySelector('.modal-login .msgErro');

    //bind
    this.handleEntrar = this.handleEntrar.bind(this);
    this.excluirConta = this.excluirConta.bind(this);
  }

  handleErro(erro){
    switch(erro){
      case 1:
        this.msgErro.innerText = 'insira um usuário valido';
        break;
      case 2:
        this.msgErro.innerText = 'usuário ou senha inválidos';
        break;
      case 3:
        this.msgErro.innerText = 'insira uma senha';
        break;
    }
  }

  handleEntrar(event){
    event.preventDefault();
    const usuario = document.forms.formLogin.user.value.trim();
    const pass = document.forms.formLogin.pass.value.trim();
    let erro = 0;

    if(!pass){
      erro = 3;
    }

    if(!localStorage.getItem(usuario)){
      console.log('usuario invalido');
      erro = 2;
    }

    if(!usuario){
      console.log('Digite o usuario');
      erro = 1;
    }
 

    this.dadosUser = JSON.parse(localStorage.getItem(usuario)); 


    if(erro){
      this.handleErro(erro);
      return;
    }

    if(pass === this.dadosUser.senha){
      console.log('entrou');
      localStorage.contaLogada = JSON.stringify(this.dadosUser);
      location.reload(true);
    }else{
      console.log('senha incorreta');
      this.handleErro(2);
    }

  }

  deslogarUsuario(){
    localStorage.removeItem('contaLogada');
    location.reload(true);
  }

  excluirConta(){
    localStorage.removeItem(this.dadosUser.usuario);
    this.deslogarUsuario();
  }

  /* metodo que insere o nome do usuario no lugar do link 'login', e, o faz abrir o perfil do usuario
  quando nele for clicado. */
  logarUsuario(){
    //recuperando dados da conta
    this.dadosUser = JSON.parse(localStorage.getItem('contaLogada')); 
    this.headerLogin.innerText = this.dadosUser.usuario;

    //substituindo eventListener do botao de login (q agora carrega o nome do usuario)
    const newHeaderLogin = this.headerLogin.cloneNode(true);
    //tive que substituir o no por completo
    this.headerLogin.parentNode.replaceChild(newHeaderLogin, this.headerLogin);
    const modal = new Modal('header .login-btn', '.modal-user #fecharModal', '.modal-user');
    modal.init();

    document.querySelector('.modal-user p.usuario.response').innerText = this.dadosUser.usuario;
    document.querySelector('.modal-user p.email.response').innerText = this.dadosUser.email;


    //atribuindo listeners para os botoes do modal de usuario
    document.querySelector('.modal-user .deslogarUsuario').addEventListener('click', this.deslogarUsuario);
    document.querySelector('.modal-user .excluirConta').addEventListener('click', this.excluirConta);
  }

  init(){
    if(localStorage.contaLogada){
      this.logarUsuario();
    }else{
      this.loginBtn.addEventListener('click', this.handleEntrar);
    }
  }
}
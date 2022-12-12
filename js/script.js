'use strict' //impedir bad actions

import Preload from './modules/Preload.js';
import PresentSlides from './modules/PresentSlides.js';
import SelectContent from './modules/SelectContent.js';
import Modal from './modules/Modal.js';
import Cadastrar from './modules/Cadastrar.js';
import Login from './modules/Login.js';
import MenuMobile from './modules/MenuMobile.js';

const preload = new Preload();
preload.init();

//Ficar mudando a imagem de apresentacao do site
const presentSlides = new PresentSlides();
presentSlides.init();

//selecao de conteudo
const selectContent = new SelectContent();
selectContent.init();

const modalLogin = new Modal('.login-btn', '.modal-login .container-modal #fechar', '.modal-login');
modalLogin.init();

const modalCadastro = new Modal('.cadastro-btn', '.modal-cadastro .container-modal #fecharModal', '.modal-cadastro');
modalCadastro.init();

const modalObras = new Modal('.obras', '.modal-construcao #fecharModal', '.modal-construcao');
modalObras.init();

const cadastrar = new Cadastrar();
cadastrar.init();

const login = new Login();
login.init();

const menuMobile = new MenuMobile();
menuMobile.init();
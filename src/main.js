import { pantallaInicio } from './lib/inicio.js';
import { registroUsuario } from './lib/registroUsuario.js';
import { inicioSesion } from './lib/inicioSesion.js';
import { publicaciones } from './lib/publicaciones.js';
import { registerUSer, loginUSer, registroGmail } from './lib/firebaseAuth.js';

const rootHtml = document.getElementById('root');
const appenPantallaInicio = rootHtml.appendChild(pantallaInicio());
const bntRegistro = document.getElementById('btnRegistrate');
const btnIniciarSesion = document.getElementById('btnIniciarSesion');

const mostrarLogin = () => {
  const appPantallaLogin = rootHtml.appendChild(inicioSesion());
  const botonLogin = document.getElementById('botonLogin');
  appenPantallaInicio.style.display = 'none';
  appPantallaLogin.style.display = 'block';
  const formularioInicioSesion = document.getElementById('formularioInicioSesion');
  formularioInicioSesion.addEventListener('submit', (event) => {
    const emailLogin = document.getElementById('emailLogin').value;
    const passwordLogin = document.getElementById('passwordLogin').value;
    event.preventDefault();

    loginUSer(emailLogin, passwordLogin);
  });

  const mostrarMuro = () => {
    const appenMuro = rootHtml.appendChild(publicaciones());
    appenPantallaInicio.style.display = 'none';
    appPantallaLogin.style.display = 'none';
    appenMuro.style.display = 'flex';
  };
  botonLogin.addEventListener('click', mostrarMuro);
};

const mostrarRegistro = () => {
  const appePantallaRegistro = rootHtml.appendChild(registroUsuario());
  appenPantallaInicio.style.display = 'none';
  appePantallaRegistro.style.display = 'flex';

  // aqui vamos a traer la información del formulario del registro 41:51
  const formularioRegistro = document.getElementById('formularioRegistroUsuario');
  formularioRegistro.addEventListener('submit', (event) => {
    const emailRegistro = document.getElementById('emailRegistro').value;
    const passwordRegistro = document.getElementById('passwordRegistro').value;
    event.preventDefault();
    registerUSer(emailRegistro, passwordRegistro);
  });

  // registro Gmail
  const contenedorclickGmail = document.getElementById('contenedorclickGmail');
  contenedorclickGmail.addEventListener('click', registroGmail);
};

bntRegistro.addEventListener('click', mostrarRegistro);
btnIniciarSesion.addEventListener('click', mostrarLogin);
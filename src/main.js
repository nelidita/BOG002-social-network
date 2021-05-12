import { pantallaInicio } from './lib/inicio.js';
import { registroUsuario } from './lib/registroUsuario.js';
import { inicioSesion } from './lib/inicioSesion.js';
import { publicaciones } from './lib/publicaciones.js';
import { registerUSer, loginUSer, registroGmail } from './lib/firebaseAuth.js';

console.log(registroUsuario,inicioSesion,publicaciones,registerUSer, loginUSer, registroGmail)



export const mostrarHome = () => {
const rootHtml = document.getElementById('root');
const appPantallaInicio = rootHtml.appendChild(pantallaInicio());
// const bntRegistro = document.getElementById('btnRegistrate');
// const btnIniciarSesion = document.getElementById('btnIniciarSesion');

// appPantallaLogin.style.display = 'none';
// bntRegistro.addEventListener('click', mostrarRegistro);
// btnIniciarSesion.addEventListener('click', mostrarLogin);
console.log("pantalla inicio o home");
return appPantallaInicio;
}



export const mostrarLogin = () => {
  const rootHtml = document.getElementById('root');
  const appPantallaLogin = rootHtml.appendChild(inicioSesion());
  
  // const botonLogin = document.getElementById('botonLogin');
  // appenPantallaInicio.style.display = 'none';
  // appPantallaLogin.style.display = 'block';
  const formularioInicioSesion = document.getElementById('formularioInicioSesion');
  formularioInicioSesion.addEventListener('submit', (event) => {
    const emailLogin = document.getElementById('emailLogin').value;
    const passwordLogin = document.getElementById('passwordLogin').value;
    event.preventDefault();

    loginUSer(emailLogin, passwordLogin);
  });

  /* const mensajeErrorLogin = document.getElementById ('errorLogin'); */
    // botonLogin.addEventListener('click', mostrarMuro);//lo que va a decidir que mostrar es la ruta.
  return appPantallaLogin;
}; 


// const mostrarMuro = () => {
//   const rootHtml = document.getElementById('root');
//   const appenMuro = rootHtml.appendChild(publicaciones());
//   // appenPantallaInicio.style.display = 'none';
//   // appPantallaLogin.style.display = 'none';
//   appenMuro.style.display = 'flex';
//   /// Popup Publicarciones
//   const abrirPopup = document.getElementById('publicar');
//   const overLay = document.getElementById('overLay');
//   const popUp = document.getElementById('popUp');
//   const btnCerrarPopup = document.getElementById('cerrarPopup');
//   abrirPopup.addEventListener('click', () => {
//     overLay.classList.add('active');
//     popUp.classList.add('active');
//   });
//   btnCerrarPopup.addEventListener('click', (e) => {
//     e.preventDefault();
//     overLay.classList.remove('active');
//     popUp.classList.remove('active');
//   });
// /*     console.log(errorMessage); */
// /*   return appenMuro; */
// };
export const mostrarRegistro = () => {
  const rootHtml = document.getElementById('root');
  const appePantallaRegistro = rootHtml.appendChild(registroUsuario());
  // appenPantallaInicio.style.display = 'none';
  appePantallaRegistro.style.display = 'flex';
  // appPantallaLogin.style.display = 'none';

  // aqui vamos a traer la información del formulario del registro 41:51
  const formularioRegistro = document.getElementById('formularioRegistroUsuario');
  formularioRegistro.addEventListener('submit', (event) => {
    const emailRegistro = document.getElementById('emailRegistro').value;
    const passwordRegistro = document.getElementById('passwordRegistro').value;
    event.preventDefault();
    registerUSer(emailRegistro, passwordRegistro);
    return appePantallaRegistro;
  });

  // registro Gmail
  const contenedorclickGmail = document.getElementById('contenedorclickGmail');
  contenedorclickGmail.addEventListener('click', registroGmail);
};



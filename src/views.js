import { pantallaInicio } from './lib/inicio.js';
import { registroUsuario } from './lib/registroUsuario.js';
import { inicioSesion } from './lib/inicioSesion.js';
import { publicaciones, viewPost } from './lib/publicaciones.js';
import { registerUSer, loginUSer, registroGmail } from './firebaseAuth.js';

const data = firebase.firestore();

export const mostrarHome = () => {
  const rootHtml = document.getElementById('root');
  const appPantallaInicio = rootHtml.appendChild(pantallaInicio());

  return appPantallaInicio;
};

export const mostrarLogin = () => {
  const rootHtml = document.getElementById('root');
  const appPantallaLogin = rootHtml.appendChild(inicioSesion());
  const formularioInicioSesion = document.getElementById('formularioInicioSesion');

  formularioInicioSesion.addEventListener('submit', (event) => {
    const emailLogin = document.getElementById('emailLogin').value;
    const passwordLogin = document.getElementById('passwordLogin').value;
    event.preventDefault();

    loginUSer(emailLogin, passwordLogin);
  });
  //Inicio de sesion con gmail
  const contenedorGmailLogin = document.getElementById('contenedorGmailLogin');
  contenedorGmailLogin.addEventListener('click', registroGmail);
  return appPantallaLogin;
};

const crearPost = (titulo, descripcion) => {
   data.collection('posts').doc().set({
    titulo,
    descripcion,
  });
};
const publicarPost = () => {
  const formPublicacion = document.getElementById('formPublicacion');
  formPublicacion.addEventListener('submit', createPlacePost);
  formPublicacion.reset();
};

const onGetPost = (callback) => data.collection('posts').onSnapshot(callback);

// crear el post list parametro mostrar muro
const postList = async() => {
  await onGetPost((querySnapshot) => {
    const divListPost = document.getElementById('postsContainer');
    divListPost.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const objetoPosts = ({ ...doc.data(), id: doc.id });
      divListPost.innerHTML += viewPost(objetoPosts);
    publicarPost ();
    });
  });
}

const createPlacePost = async (e) => {
  e.preventDefault();
  const formPublicacion = document.getElementById('formPublicacion');
  const titulo = formPublicacion.titulo;
  const descripcion = formPublicacion.descripcion;
  crearPost(titulo.value, descripcion.value)
  await postList();
  const overLay = document.getElementById('overLay');
  const popUp = document.getElementById('popUp');
  overLay.classList.remove('active');
  popUp.classList.remove('active');
};

export const mostrarMuro = async () => {
  const rootHtml = document.getElementById('root');
  const appenMuro = rootHtml.appendChild(publicaciones());
  appenMuro.style.display = 'flex';
  await postList();

  // Popup Publicaciones
  const abrirPopup = document.getElementById('publicar');
  const overLay = document.getElementById('overLay');
  const popUp = document.getElementById('popUp');
  const btnCerrarPopup = document.getElementById('cerrarPopup');
  abrirPopup.addEventListener('click', () => {
    overLay.classList.add('active');
    popUp.classList.add('active');
  });

  btnCerrarPopup.addEventListener('click', (e) => {
    e.preventDefault();
    overLay.classList.remove('active');
    popUp.classList.remove('active');
  });

  const iconoMenu = document.querySelectorAll('.iconoMenu');
  iconoMenu.forEach((iconoDom) => {
    iconoDom.addEventListener('click', (event) => {
      const idNav = `#nav-${event.currentTarget.id}`;
      console.log(idNav)
      const menu = document.querySelector(idNav);
      menu.style.display = 'block';
      iconoDom.addEventListener('click', () => {
        menu.style.display = 'none';
      });
    });
  });
  return appenMuro;
};

export const mostrarRegistro = () => {
  const rootHtml = document.getElementById('root');
  const appePantallaRegistro = rootHtml.appendChild(registroUsuario());
  appePantallaRegistro.style.display = 'flex';

  // aqui vamos a traer la información del formulario del registro.
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
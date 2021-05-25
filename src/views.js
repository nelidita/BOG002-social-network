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
  // Inicio de sesion con gmail
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

const onGetPost = (callback) => data.collection('posts').onSnapshot(callback);
const deletePost = (id) => data.collection("posts").doc(id).delete();
const editPost = (id, updatedPost) => data.collection('posts').doc(id).update(updatedPost);
const getPostEditar = (id) => data.collection("posts").doc(id).get();
let editStatus = false;
let id = '';

// crear el post list parametro mostrar muro
const postList = async () => {
  await onGetPost((querySnapshot) => {
    const divListPost = document.getElementById('postsContainer');
    divListPost.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const objetoPosts = ({ ...doc.data(), id: doc.id });
      divListPost.innerHTML += viewPost(objetoPosts);
      const iconoMenu = document.querySelectorAll('.iconoMenu');
      iconoMenu.forEach((iconoDom) => {
        iconoDom.addEventListener('click', (event) => {
          const idNav = `#nav-${event.currentTarget.id}`;
          const menu = document.querySelector(idNav);
          menu.style.display = 'block';
          iconoDom.addEventListener('click', () => {
            menu.style.display = 'none';
          });
        });
      });
    });
    const formPublicacion = document.getElementById('formPublicacion');
    const btnsEdit = document.querySelectorAll(".btnEditar");
    btnsEdit.forEach((btn) =>
      btn.addEventListener("click", async (event) => {
        try {
          const doc = await getPostEditar(event.target.dataset.id);
          const postsEdit = doc.data();
                    const overLay = document.getElementById('overLay');
          const popUp = document.getElementById('popUp');
          const btnCerrarPopup = document.getElementById('cerrarPopup');
          // activamos el pop up automaticamente con el click
          overLay.classList.add('active');
          popUp.classList.add('active');
          editStatus = true;
          id = doc.id;
          formPublicacion['btnPublicar'].innerText = 'Actualizar';
          // Cerramos el pop up con la X
          btnCerrarPopup.addEventListener('click', (e) => {
            e.preventDefault();
            overLay.classList.remove('active');
            popUp.classList.remove('active');
          });
          formPublicacion['titulo'].value = postsEdit.titulo;
          formPublicacion['descripcion'].value = postsEdit.descripcion;
        }
        catch (error) {
          console.log(error);
        }
      })
    );
    const btnsDelete = document.querySelectorAll(".btnEliminar");
    btnsDelete.forEach((btn) =>
      btn.addEventListener("click", async (event) => {
        
        try { await deletePost(event.target.dataset.id); }
        catch (error) {
          console.log(error);
        }
      })
    );
    
  });
}

export const mostrarMuro = async () => {
  const rootHtml = document.getElementById('root');
  const appenMuro = rootHtml.appendChild(publicaciones());
  appenMuro.style.display = 'flex';
  const formPublicacion = document.getElementById('formPublicacion');
  formPublicacion.addEventListener('submit', async (e) => {
    e.preventDefault();
    const titulo = formPublicacion['titulo']
    const descripcion = formPublicacion['descripcion'];
    try {
      if (!editStatus) {
        await crearPost(titulo.value, descripcion.value);
      } else {
        await editPost(id, {
          titulo: titulo.value,
          descripcion: descripcion.value,
        })
        editStatus = false;
        id = '';
        formPublicacion['btnPublicar'].innerText= 'Publicar';
      }
      formPublicacion.reset();
      titulo.focus();
    } catch (error) {
      console.log(error);
    }
  });
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

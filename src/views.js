import { pantallaInicio } from './lib/inicio.js';
import { registroUsuario } from './lib/registroUsuario.js';
import { inicioSesion } from './lib/inicioSesion.js';
import { publicaciones, viewPost, viewListPost } from './lib/publicaciones.js';
import { registerUSer, loginUSer, registroGmail } from './firebaseAuth.js';


export const mostrarHome = () => {
    const rootHtml = document.getElementById('root');
    const appPantallaInicio = rootHtml.appendChild(pantallaInicio());

    return appPantallaInicio;
}

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

    return appPantallaLogin;
};


//crear el post list parametro mostrar muro
const postList = async () => {
    let arraydata =[];
    // await crearPost(titulo.value, descripcion.value);
    const querySnapshot = await getPosts();
    querySnapshot.forEach(doc => {
       arraydata.push(doc.data());
       })
    return arraydata;
}


export const mostrarMuro =async() => {
    let arrpost = await postList();
    const rootHtml = document.getElementById('root');
    const appenMuro = rootHtml.appendChild(publicaciones());
    appenMuro.style.display = 'flex';
    document.getElementById("postsContainer").innerHTML = viewListPost(arrpost);
    publicarPost();

    // Popup Publicarciones
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
const data = firebase.firestore();

const getPosts = () => data.collection("posts").get();

const crearPost = (titulo, descripcion) => {
    data.collection("posts").doc().set({
        titulo,
        descripcion
    })

}

const createPlacePost = async (e) => {
    const postsContainer = document.getElementById("postsContainer");
    postsContainer.innerHTML = "";
    e.preventDefault();
    const titulo = formPublicacion["titulo"];
    const descripcion = formPublicacion["descripcion"];
    console.log(titulo, descripcion)

    await crearPost(titulo.value, descripcion.value);
    const querySnapshot = await getPosts();
    querySnapshot.forEach(doc => {
        postsContainer.innerHTML += viewPost(doc.data())
    })
    titulo.focus();
}

const publicarPost = () => {

    const formPublicacion = document.getElementById("formPublicacion");
    formPublicacion.addEventListener("submit", createPlacePost);
    formPublicacion.reset();

}




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
        registerUSer(emailRegistro, passwordRegistro)

        return appePantallaRegistro;
    });

    // registro Gmail
    const contenedorclickGmail = document.getElementById('contenedorclickGmail');
    contenedorclickGmail.addEventListener('click', registroGmail);

};

import { pantallaInicio } from './lib/inicio.js';
import { registroUsuario } from './lib/registroUsuario.js';
import { inicioSesion } from './lib/inicioSesion.js';
import { publicaciones/*, createDivPost*/} from './lib/publicaciones.js';
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

export const mostrarMuro = () => {
    const rootHtml = document.getElementById('root');
    const appenMuro = rootHtml.appendChild(publicaciones());
    appenMuro.style.display = 'flex';
    viewPost();
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
 const viewPost = () => {

    const formPublicacion = document.getElementById("formPublicacion");
    const postsContainer = document.getElementById("postsContainer");
     
    formPublicacion.addEventListener("submit", async (e) => {
        postsContainer.innerHTML="";
        e.preventDefault();
        const titulo = formPublicacion["titulo"];
        const descripcion = formPublicacion["descripcion"];
        console.log(titulo,descripcion)

        await crearPost(titulo.value,descripcion.value);

        // const createPlacePost = () =>  {
        const querySnapshot = await getPosts();
        querySnapshot.forEach( doc => {
            let titulos = doc.data().titulo;
            let contenido=doc.data().descripcion;
            // postsContainer.innerHTML += createDivPost();
            postsContainer.innerHTML += 
            `<div class="bodyPost">
                <h3>${titulos}</h3>
                <p>${contenido}</p>
                <div class="menuDesplegable">
                    <a href="#" class= "iconoMenu"><i class="fas fa-ellipsis-h"></i></a>
                    <nav>
                         <ul>
                            <li><a href="#">Editar</a></li>
                            <li><a href="#">Eliminar</a></li>
                         </ul>
                    </nav>
                </div>
            </div>`
            //vamos a mover el div de publicaciones
            console.log(doc.data());
        })
  
        formPublicacion.reset();
        titulo.focus();

    })
    
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
import { pantallaInicio } from './lib/inicio.js';
import { registroUsuario } from './lib/registroUsuario.js';
import { inicioSesion } from './lib/inicioSesion.js';

let rootHtml = document.getElementById("root");
let appenPantallaInicio = rootHtml.appendChild(pantallaInicio());

const bntRegistro = document.getElementById("btnRegistrate");
const btnIniciarSesion = document.getElementById("btnIniciarSesion");

let mostrarLogin = () => {
    let appPantallaLogin = rootHtml.appendChild(inicioSesion());
    appenPantallaInicio.style.display = "none";
    appPantallaLogin.style.display = "flex";
}

let mostrarRegistro = () => {
    let appePantallaRegistro = rootHtml.appendChild(registroUsuario());
    appenPantallaInicio.style.display = "none";
    appePantallaRegistro.style.display = "flex";
}

bntRegistro.addEventListener("click",mostrarRegistro);
btnIniciarSesion.addEventListener("click",mostrarLogin);

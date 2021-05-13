
import  { mostrarHome,mostrarRegistro,mostrarLogin,mostrarMuro } from './main.js';

// esto identifica cada on load si lo comentan nos toca darle recargar para que cambie la pantalla
window.addEventListener('hashchange', () => {
    showRoot(window.location.hash);
  });

// preguntar si se puede retornar de una vez o es una buena practica el break
   const showRoot = (router) => {
        const root = document.getElementById('root');
        root.innerHTML = '';
        switch (router){
            case "#/Login" : 
                mostrarLogin();
                break;
            case "#/Registro" : 
                mostrarRegistro();
                break;
            case "#/posts" : 
                mostrarMuro();
                break;
            // case "" : 
            //     mostrarHome();
            //     break;
           default:
                mostrarHome();
                break;
        }
 
    }

//si no le pasamos estos parametros no nos carga la pagina incial tan pronto ejecutamos
    showRoot(window.location.hash);

 

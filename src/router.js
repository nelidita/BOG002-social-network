import  { mostrarHome,mostrarRegistro,mostrarLogin } from './main.js';


window.addEventListener("hashchange", () => {
    console.log(window.location.hash);
  });
//   const changeTmp = (hash) => {
//     console.log('dentro de changetnp', hash)
//     if (hash === '#/' || hash === '' || hash === '#') {
//       return viewTmp('#/login');
//     } else if (hash === '#/login' || hash === '#/post' || hash === '#/create') {
//       return viewTmp(hash);
//     } else {
//       return viewTmp('#/login');
//     }
//   }


// console.log("Hola estoy en router")

    
//     const showRoot = (hash) => {
//     if (hash==""){
//     mostrarHome();
//   }else if (hash=="#/Registro"){
//     mostrarRegistro();
 
//   }
  
// }
// showRoot(window.location.hash);

// window.onhashchange = showRoot;


console.log("Hola estoy en router")



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
            default:
                mostrarHome();
                break;
        }
  
    }



    showRoot(window.location.hash);

 
//   export const initRouter = () => {
//     window.addEventListener('load', changeTmp(window.location.hash))
//     if (("onhashchange" in window)) window.onhashchange = () => changeTmp(window.location.hash)
//   }
//   console.log(mostrarHome);
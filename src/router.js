import {
  mostrarHome, mostrarRegistro, mostrarLogin, mostrarMuro,
} from './views.js';

// preguntar si se puede retornar de una vez o es una buena practica el break
export const showRoot = (router) => {
  const root = document.getElementById('root');
  root.innerHTML = '';
  switch (router) {
    case '#/Login':
      mostrarLogin();
      // viewPost();
      break;
    case '#/Registro':
      mostrarRegistro();
      // viewPost();
      break;
    case '#/posts':
      mostrarMuro();

      break;
    default:
      mostrarHome();
      break;
  }
};

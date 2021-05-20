import { showRoot } from './router.js';

const init = () => {
  // esto identifica cada on load si lo comentan nos toca darle recargar para que cambie la pantalla
  window.addEventListener('hashchange', () => {
    showRoot(window.location.hash);
  });
  // si no le pasamos estos parametros no nos carga la pagina incial tan pronto ejecutamos
  showRoot(window.location.hash);
};
init();

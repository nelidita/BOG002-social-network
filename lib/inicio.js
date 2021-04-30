export const pantallaInicio = () => {
  const inicio = document.createElement('div');
  const logo = document.createElement('img');
  const textoCervecero = document.createElement('p');
  const btnIniciarSesion = document.createElement('button');
  const btnRegistarte = document.createElement('button');
  inicio.className = 'contenedorInicio';
  logo.src = 'Imagenes/logoBeer.png';
  logo.id = 'logoInicio';

  textoCervecero.textContent = 'Para los verdaderos amantes de la cerveza';
  textoCervecero.className = 'textoCervecero';

  btnIniciarSesion.textContent = 'Iniciar Sesión';
  btnIniciarSesion.id = 'btnIniciarSesion';
  btnIniciarSesion.className = 'botonesInicio';
  btnRegistarte.textContent = 'Regístrate';
  btnRegistarte.id = 'btnRegistrate';
  btnRegistarte.className = 'botonesInicio';

  inicio.appendChild(logo);
  inicio.appendChild(textoCervecero);
  inicio.appendChild(btnIniciarSesion);
  inicio.appendChild(btnRegistarte);

  return inicio;
};

export const pantallaInicio = () => {
  const inicio = document.createElement('div');
  inicio.className = 'contenedorInicio';
  const contenidoinicio = `
    <div class = "textoInicioGrande">
    <p class="textoCervecero1"> Para los verdaderos amantes de la cerveza... </p>
    </div>
    <div class = "logoBotones">
      <img alt="logoInicio" class="logoPantallainicio" id="logoInicio" src = "Imagenes/LogoBeer.png"/>
      <p class="textoCervecero2"> Para los verdaderos amantes de la cerveza </p>
      <button class="botonesInicio" id="btnIniciarSesion" type="submit"> Iniciar sesión </button>
      <button class="botonesInicio" id="btnRegistrate" type="submit"> Regístrate </button>
    </div>
  `;
  inicio.innerHTML = contenidoinicio;
  return inicio;
};
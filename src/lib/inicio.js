export const pantallaInicio = () => {
  const inicio = document.createElement('div');
  inicio.className = 'contenedorInicio';
  const contenidoinicio = `
   <div> <a href="#/Inicio">
      <div class = "textoInicioGrande">
        <p class="textoCervecero1"> Para los verdaderos amantes de la cerveza... </p>
      </div>
      <div class = "logoBotones">
        <img alt="logoInicio" class="logoPantallainicio" id="logoInicio" src = "Imagenes/LogoBeer.png"/>
        <p class="textoCervecero2"> Para los verdaderos amantes de la cerveza </p>
        <div> <a href="#/Login" class="botonesInicio" id="btnIniciarSesion" type="submit"  > Iniciar sesión </a>  </div>
        <div> <a href="#/Registro" class="botonesInicio" id="btnRegistrate" type="submit"> Regístrate </a></div>
      </div>
      </a></div>
  `;
  inicio.innerHTML = contenidoinicio;
  return inicio;
};
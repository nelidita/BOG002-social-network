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
        <div> <a href="#/Login" ><input type="button" value="Iniciar sesión" class="botonesInicio" id="btnIniciarSesion"></input></a></div>
        <div> <a href="#/Registro"><input type="button" value="Regístrate" class="botonesInicio" id="btnRegistrate"></input></a></div>
      </div>
      </a></div>
  `;
  inicio.innerHTML = contenidoinicio;
  return inicio;
};
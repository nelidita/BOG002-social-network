export const inicioSesion = () => {
  const contenedorIniciosesion = document.createElement('div');
  contenedorIniciosesion.className = 'contenedorIniciosesion';

  const contenidoEncabezadoinicio = `
    <div class= 'textoSesionGrande' >
      <p class='mensajeCervecero1'> Para los verdaderos amantes de la cerveza...</p> 
    </div>
    <div class = "contenidoInputs">
        <img alt="logoIniciosesion" class="logoIniciosesion" id="logoIniciosesion"src = "Imagenes/LogoBeer.png"/>
        <h3 class='mensajeCervecero2'> Para los verdaderos amantes de la cerveza.</h3>
        <form id = "formularioInicioSesion">
        <input class = "inputSesion" id = "emailLogin" type ="email" placeholder = "Correo Eletrónico" required>
        <input class = "inputSesion" id= "passwordLogin" type ="password" placeholder ="Contraseña" required>
        <p class= "mensajeError" id = "errorLogin"></p>
        <div> <button location.href="#/posts" class="iniciarSesion" id="botonLogin" type="submit"> Iniciar sesión </button></div>
        </form>
        <p class = "mensajeCuentainicio">¿No tienes cuenta?<a href = "#/Inicio"> Regístrate</a></p>
    </div>
    `;
  contenedorIniciosesion.innerHTML = contenidoEncabezadoinicio;

  return contenedorIniciosesion;
};

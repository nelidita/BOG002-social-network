export const inicioSesion = () => {
  const contenedorIniciosesion = document.createElement('div');
  contenedorIniciosesion.className = 'ContenedorIniciosesion';

  const contenidoEncabezadoinicio = `
  
    <h3> Para los verdaderos amantes de la cerveza </h3>
    <div class = "contenidoInputs">
        <img alt="logoRegistro" class="logoRegistro" src = "Imagenes/LogoBeer.png"/>
        <input class = "inputSesion" id = "emailLogin" type ="email" placeholder = "Correo Eletrónico">
        <input class = "inputSesion" id= "contraseñaLogin" type ="password" placeholder ="Contraseña">
        <button class="IniciarSesion" type="submit"> Inicio de sesión </button>
        <a href = " ">¿No tienes cuenta? Regístrate</a>
    </div>

    `;
  contenedorIniciosesion.innerHTML = contenidoEncabezadoinicio;

  return contenedorIniciosesion;
};

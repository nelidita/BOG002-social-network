import { loginUSer, registroGmail } from '../firebaseAuth.js';

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
      
      <div class= "contenedorGmailLogin" id="contenedorGmailLogin">
        <p> Iniciar sesión con Google</p>
        <img alt="gmail" class="gmail" src="Imagenes/google.png"/>
      </div>

      <form id = "formularioInicioSesion">
        <div id = "validacionInicio">
          <input class = "inputSesion" name= "email" id = "emailLogin" type ="email" placeholder = "Correo Eletrónico">
          <p class= "mensajeError" id = "errorLoginEmail">Debes introducir un correo válido.</p>
        </div>
        <div id = "validacionIniciopass">
          <input class = "inputSesion" id= "passwordLogin" name="password" type ="password" placeholder ="Contraseña">
          <p class= "mensajeError" id = "errorLoginPassword"> Contraseña inválida, vueve a intentarlo.</p>
        </div>
        <div>
          <button location.href="#/posts" class="iniciarSesion" id="botonLogin" type="submit"> Iniciar sesión </button>
          <p class="mensaje-exitoLogin" id="mensaje-exitoLogin">Ingresaste correctamente. Bienvenido a Beer Lovers!</p>
        </div>
        <div class="inicioSesionmensaje" id="formulario__mensaje">
				  <p class="advertencia"><i class="fas fa-exclamation-triangle"></i> <b>Error:</b> Por favor completa los campos correctamente. </p>
			  </div>
      </form>
      <p class = "mensajeCuentainicio">¿No tienes cuenta?<a href = "#/Inicio"> Regístrate</a></p>
    </div>
    `;

  contenedorIniciosesion.innerHTML = contenidoEncabezadoinicio;

  const formularioInicioSesion = contenedorIniciosesion.querySelector('#formularioInicioSesion');

  formularioInicioSesion.addEventListener('submit', (event) => {
    const emailLogin = document.getElementById('emailLogin').value;
    const passwordLogin = document.getElementById('passwordLogin').value;
    event.preventDefault();
    loginUSer(emailLogin, passwordLogin)
      .then((userCredential) => {
        window.location.hash = '#/posts'; // Con esto si el usuario se loguea correctamente muestra el muro.
        swal({
          title: 'Muy bien!!! Eres un  Beer Lovers.',
          text: 'Bienvenido',
          icon: 'success',
        });
        return userCredential;
      }).catch((error) => {
        const mensajeErrorInicio = error.message;
        swal({
          title: mensajeErrorInicio,
          text: 'Por favor vuelve a intentarlo',
          icon: 'error',
        });
      });
  });

  // Inicio de sesion con gmail
  const contenedorGmailLogin = contenedorIniciosesion.querySelector('#contenedorGmailLogin');
  contenedorGmailLogin.addEventListener('click', registroGmail);

  return contenedorIniciosesion;
};

import { registroGmail, registerUSer } from '../firebaseAuth.js';

export const registroUsuario = () => {
  const contenedorRegistro = document.createElement('div');
  contenedorRegistro.id = 'contenedorRegistro';
  contenedorRegistro.className = 'classContenedorRegistro';

  const ladoIzquierdo = document.createElement('div');
  ladoIzquierdo.className = 'ladoIzquierdo';
  const contenidoLadoIzquierdo = `
    <img alt="logoRegistro" class="logoRegistroizq" src = "Imagenes/LogoBeer.png"/>
    <h3 class="textoCervecero1regizq">  Para los verdaderos amantes de la cerveza...  </h3>
  `;
  ladoIzquierdo.innerHTML = contenidoLadoIzquierdo;
  contenedorRegistro.appendChild(ladoIzquierdo);

  const ladoDerecho = document.createElement('div');
  ladoDerecho.className = 'ladoDerecho';
  const contenidoLadoDerecho = `
    <img alt="logoRegistro" class="logoRegistro" src = "Imagenes/LogoBeer.png"/>
    <div class= "contenedorFraseInvitacionder"><p> Conviértete en un Beer Lover's </p></div>
    <div class= "contenedorGmail" id="contenedorclickGmail">
      <p> Iniciar sesión con Google</p>
      <img alt="gmail" class="gmail" src="Imagenes/google.png"/>
    </div>
    <form id = "formularioRegistroUsuario">
      <div class="grupo__registro" id="grupo__email2">
        <input class = "inputForm" id = "emailRegistro" name:"email2" type ="email" placeholder = "Correo Eletrónico" required>
        <p class= "mensajeErrorRegistro" id = "errorRegistroEmail">Debes introducir un correo válido.</p>
      </div>
      <div class="grupo__registro" id="grupo__nombre">
        <input class = "inputForm" id = "nombreDeUsuario" name:"nombre" type ="nickname" placeholder ="Nombre de Usuario" required>
        <p class= "mensajeErrorRegistro" id = "errorRegistronombre"> El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.</p>
      </div>
      <div class="grupo__registro" id="grupo__password2">
        <input class = "inputForm" id = "passwordRegistro" name:"password2" type ="password" placeholder ="Contraseña" required>
        <p class= "mensajeErrorRegistro" id = "errorRegistroPassword"> Contraseña inválida, vueve a intentarlo.</p>
      </div>
      <p class="registro">¿Ya tienes cuenta?<a href = "#/Inicio"> Iniciar sesión</a></p>
      <p class="terminosBeerlover">Para formar parte de la comunidad Beer Lovers debes aceptar que  eres mayor de edad.</p>
      <div class="grupo__registro" id="grupo__terminos">
        <input class = "checkbox" name:"terminos" id="terminos" type ="checkbox"><label for="">Soy mayor de edad</label>
      </div>
      <div>
        <button location.href="#/posts" class="registrarme" type="submit"> Registrarme </button>
      </div>
      <div class="registroMensaje" id="formulario__mensajeRegistro">
        <p><i class="fas fa-exclamation-triangle"></i> <b>Error:</b> Por favor completa los campos correctamente. </p>
      </div>
    </form>
  `;

  ladoDerecho.innerHTML = contenidoLadoDerecho;
  contenedorRegistro.appendChild(ladoDerecho);

  const formularioRegistro = contenedorRegistro.querySelector('#formularioRegistroUsuario');

  formularioRegistro.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailRegistro = contenedorRegistro.querySelector('#emailRegistro').value;
    // const nombreUsuarioinput = document.getElementById('nombreDeUsuario').value;
    const passwordRegistro = contenedorRegistro.querySelector('#passwordRegistro').value;

    registerUSer(emailRegistro, passwordRegistro)
      .then((userCredential) => {
        window.location.hash = '#/posts';
        swal({
          title: 'Bienvenido a Beer Lovers.',
          text: 'Ya puedes disfrutar de nuestro contenido',
          icon: 'success',
        });
        return userCredential;
      }).catch((error) => {
        const mensajeError = error.message;
        console.log(mensajeError);
        swal({
          title: mensajeError,
          text: 'Por favor intente con una cuenta válida',
          icon: 'error',
        });
      });
    });

  // registro Gmail
  const contenedorclickGmail = contenedorRegistro.querySelector('#contenedorclickGmail');
  console.log("fuera del contenedor")
  contenedorclickGmail.addEventListener('click', registroGmail().then((result) => {
    console.log("estoy en contenedor")
    window.location.hash = '#/posts';
    swal({
      title: 'Ingresaste correctamente.',
      text: 'Bienvenido a Beer Lover',
      icon: 'success',
    });
    return result;
  }).catch((error) => {
    swal({
      title: 'Cuenta no válida.',
      text: 'Por favor use una cuenta válida',
      icon: 'error',
    });
  }));


  return contenedorRegistro;
};


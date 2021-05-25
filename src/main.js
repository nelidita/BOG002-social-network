import { showRoot } from './router.js';
import { loginUSer,registerUSer} from './firebaseAuth.js';


const init = () => {
  // esto identifica cada on load si lo comentan nos toca darle recargar para que cambie la pantalla
  window.addEventListener('hashchange', () => {
    showRoot(window.location.hash);
  });
  // si no le pasamos estos parametros no nos carga la pagina incial tan pronto ejecutamos
  showRoot(window.location.hash);
  /* Validaciones para los Inputs Inicio de sesión*/

const expresiones = {
  usuario: /^[a-zA-Z0-9\_\-]{6,16}$/, // Letras, numeros, guion y guion_bajo
  password: /^.{8,12}$/,// 8 a 12 digitos.
  password2:/^.{8,12}$/,// 8 a 12 digitos.
  email2: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}
/* Objetos que nos ayudan a saber si un campo es valido o no */
const campos = {
  usuario: false,
  password: false,
  password2: false,
  email: false,
  email2: false
}

const validarformularios = (e) => {
  switch (e.target.name) {
    case "email":

      if (expresiones.email.test(e.target.value)) {
        document.getElementById('validacionInicio').classList.remove('inputSesion-incorrecto');
        document.getElementById('validacionInicio').classList.add('inputSesion-correcto');
        document.querySelector('#validacionInicio .mensajeError').classList.remove('mensajeError-activo');
        campos['email'] = true;
      } else {
        document.getElementById('validacionInicio').classList.add('inputSesion-incorrecto');
        document.getElementById('validacionInicio').classList.remove('inputSesion-correcto');
        document.querySelector('#validacionInicio .mensajeError').classList.add('mensajeError-activo');
        campos['email'] = false;
      }

      break;
    case "password":
      if (expresiones.password.test(e.target.value)) {
        document.getElementById('validacionIniciopass').classList.remove('inputSesion-incorrecto');
        document.getElementById('validacionIniciopass').classList.add('inputSesion-correcto');
        document.querySelector('#validacionIniciopass .mensajeError').classList.remove('mensajeError-activo');
        campos['password'] = true;
      } else {
        document.getElementById('validacionIniciopass').classList.add('inputSesion-incorrecto');
        document.getElementById('validacionIniciopass').classList.remove('inputSesion-correcto');
        document.querySelector('#validacionIniciopass .mensajeError').classList.add('mensajeError-activo');
        campos['password'] = false;
      }
      break;
  }
}

const inputSesion = document.querySelectorAll('.inputSesion');
inputSesion.forEach((input) => {
  input.addEventListener('keyup', validarformularios);
  input.addEventListener('blur', validarformularios);
});
const formulario = document.getElementById('formularioInicioSesion');
formulario.addEventListener('submit', () => {
  if (campos.email && campos.password) {
    formulario.reset();
    loginUSer();

    } else {
    document.getElementById('formulario__mensaje').classList.add('inicioSesionmensaje-activo');
 
    document.querySelector('#validacionIniciopass .mensajeError').classList.add('mensajeError-activo');
    document.querySelector('#validacionInicio .mensajeError').classList.add('mensajeError-activo');
    document.getElementById('validacionIniciopass').classList.add('inputSesion-incorrecto');
    document.getElementById('validacionInicio').classList.add('inputSesion-incorrecto');
    formulario.reset();
    loginUSer();
       setTimeout(() => {
      
    }, 3000);
  }
});




/* Validaciones para los Inputs Registro de Usuario*/

// const validarRegistro = (e) => {
//   switch (e.target.name) {
//     case "email2":

//       if (expresiones.email.test(e.target.value)) {
//         document.getElementById('grupo__email2').classList.remove('inputForm-incorrecto');
//         document.getElementById('grupo__email2').classList.add('inputForm-correcto');
//         document.querySelector('#grupo__email2 .mensajeError').classList.remove('mensajeErrorRegistro-activo');
//         campos['email2'] = true;
//       } else {
//         document.getElementById('grupo__email2').classList.add('inputForm-incorrecto');
//         document.getElementById('grupo__email2').classList.remove('inputForm-correcto');
//         document.querySelector('#grupo__email2  .mensajeErrorRegistro').classList.add('mensajeErrorRegistro-activo');
//         campos['email2'] = false;
//       }

//       break;
//     case "password2":
//       if (expresiones.password.test(e.target.value)) {
//         document.getElementById('grupo__password2').classList.remove('inputForm-incorrecto');
//         document.getElementById('grupo__password2').classList.add('inputForm-correcto');
//         document.querySelector('#grupo__password2 .mensajeError').classList.remove('mensajeError-activo');
//         campos['password2'] = true;
//       } else {
//         document.getElementById('grupo__password2').classList.add('inputForm-incorrecto');
//         document.getElementById('grupo__password2').classList.remove('inputForm-correcto');
//         document.querySelector('#grupo__password2 .mensajeErrorRegistro').classList.add('mensajeErrorRegistro-activo');
//         campos['password2'] = false;
//       }
//       break;
//   }
// }
// const inputRegistro = document.querySelectorAll('.inputForm');
// inputRegistro.forEach((input) => {

//   input.addEventListener('keyup', () => {
/*   input.addEventListener('blur', ); */
//     console.log('funciona');
// });

// const formularioRegistro = document.getElementById('formularioRegistroUsuario');
// formularioRegistro.addEventListener('submit', (e) => {
//   e.preventDefault();

  // if (campos.email2 && campos.password2) {
  //   formularioRegistro.reset();
  //   registerUSer();

  //   } else {
  //   document.getElementById('formulario__mensajeRegistro').classList.add('registroMensaje-activo');
  //   document.querySelector('#grupo__password2 .mensajeError').classList.add('mensajeErrorRegistro-activo');
  //   document.querySelector('#grupo__email2 .mensajeError').classList.add('mensajeErrorRegistro-activo');
  //   document.getElementById('grupo__email2').classList.add('inputForm-incorrecto');
  //   document.getElementById('grupo__email2').classList.add('inputForm-incorrecto');
  //   formularioRegistro.reset();
  //   registerUSer();
  // }
// });
};
init();

/* Validaciones para los Inputs Inicio de sesión*/

const expresiones = {
  usuario: /^[a-zA-Z0-9\_\-]{6,16}$/, // Letras, numeros, guion y guion_bajo
  password: /^.{8,12}$/,// 8 a 12 digitos.
  password2:/^.{8,12}$/,// 8 a 12 digitos.
  email2: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}
/* Objetos que nos ayudan a saber si un campo es valido o no */
const campos = {
  usuario: false,
  password: false,
  password2: false,
  email: false,
  email2: false
}

const validarformularios = (e) => {
  switch (e.target.name) {
    case "email":

      if (expresiones.email.test(e.target.value)) {
        document.getElementById('validacionInicio').classList.remove('inputSesion-incorrecto');
        document.getElementById('validacionInicio').classList.add('inputSesion-correcto');
        document.querySelector('#validacionInicio .mensajeError').classList.remove('mensajeError-activo');
        campos['email'] = true;
      } else {
        document.getElementById('validacionInicio').classList.add('inputSesion-incorrecto');
        document.getElementById('validacionInicio').classList.remove('inputSesion-correcto');
        document.querySelector('#validacionInicio .mensajeError').classList.add('mensajeError-activo');
        campos['email'] = false;
      }

      break;
    case "password":
      if (expresiones.password.test(e.target.value)) {
        document.getElementById('validacionIniciopass').classList.remove('inputSesion-incorrecto');
        document.getElementById('validacionIniciopass').classList.add('inputSesion-correcto');
        document.querySelector('#validacionIniciopass .mensajeError').classList.remove('mensajeError-activo');
        campos['password'] = true;
      } else {
        document.getElementById('validacionIniciopass').classList.add('inputSesion-incorrecto');
        document.getElementById('validacionIniciopass').classList.remove('inputSesion-correcto');
        document.querySelector('#validacionIniciopass .mensajeError').classList.add('mensajeError-activo');
        campos['password'] = false;
      }
      break;
  }
}

const inputSesion = document.querySelectorAll('.inputSesion');
inputSesion.forEach((input) => {
  input.addEventListener('keyup', validarformularios);
  input.addEventListener('blur', validarformularios);
});
const formulario = document.getElementById('formularioInicioSesion');
formulario.addEventListener('submit', () => {
  if (campos.email && campos.password) {
    formulario.reset();
    loginUSer();

    } else {
    document.getElementById('formulario__mensaje').classList.add('inicioSesionmensaje-activo');
 
    document.querySelector('#validacionIniciopass .mensajeError').classList.add('mensajeError-activo');
    document.querySelector('#validacionInicio .mensajeError').classList.add('mensajeError-activo');
    document.getElementById('validacionIniciopass').classList.add('inputSesion-incorrecto');
    document.getElementById('validacionInicio').classList.add('inputSesion-incorrecto');
    formulario.reset();
    loginUSer();
       setTimeout(() => {
      
    }, 3000);
  }
});




/* Validaciones para los Inputs Registro de Usuario*/

// const validarRegistro = (e) => {
//   switch (e.target.name) {
//     case "email2":

//       if (expresiones.email.test(e.target.value)) {
//         document.getElementById('grupo__email2').classList.remove('inputForm-incorrecto');
//         document.getElementById('grupo__email2').classList.add('inputForm-correcto');
//         document.querySelector('#grupo__email2 .mensajeError').classList.remove('mensajeErrorRegistro-activo');
//         campos['email2'] = true;
//       } else {
//         document.getElementById('grupo__email2').classList.add('inputForm-incorrecto');
//         document.getElementById('grupo__email2').classList.remove('inputForm-correcto');
//         document.querySelector('#grupo__email2  .mensajeErrorRegistro').classList.add('mensajeErrorRegistro-activo');
//         campos['email2'] = false;
//       }

//       break;
//     case "password2":
//       if (expresiones.password.test(e.target.value)) {
//         document.getElementById('grupo__password2').classList.remove('inputForm-incorrecto');
//         document.getElementById('grupo__password2').classList.add('inputForm-correcto');
//         document.querySelector('#grupo__password2 .mensajeError').classList.remove('mensajeError-activo');
//         campos['password2'] = true;
//       } else {
//         document.getElementById('grupo__password2').classList.add('inputForm-incorrecto');
//         document.getElementById('grupo__password2').classList.remove('inputForm-correcto');
//         document.querySelector('#grupo__password2 .mensajeErrorRegistro').classList.add('mensajeErrorRegistro-activo');
//         campos['password2'] = false;
//       }
//       break;
//   }
// }
// const inputRegistro = document.querySelectorAll('.inputForm');
// inputRegistro.forEach((input) => {

//   input.addEventListener('keyup', () => {
/*   input.addEventListener('blur', ); */
//     console.log('funciona');
// });

// const formularioRegistro = document.getElementById('formularioRegistroUsuario');
// formularioRegistro.addEventListener('submit', (e) => {
//   e.preventDefault();

  // if (campos.email2 && campos.password2) {
  //   formularioRegistro.reset();
  //   registerUSer();

  //   } else {
  //   document.getElementById('formulario__mensajeRegistro').classList.add('registroMensaje-activo');
  //   document.querySelector('#grupo__password2 .mensajeError').classList.add('mensajeErrorRegistro-activo');
  //   document.querySelector('#grupo__email2 .mensajeError').classList.add('mensajeErrorRegistro-activo');
  //   document.getElementById('grupo__email2').classList.add('inputForm-incorrecto');
  //   document.getElementById('grupo__email2').classList.add('inputForm-incorrecto');
  //   formularioRegistro.reset();
  //   registerUSer();
  // }
// });
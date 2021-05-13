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
      <p> Regístrate con Google</p>
      <img alt="gmail" class="gmail" src="Imagenes/google.png"/>
    </div>
    <form id = "formularioRegistroUsuario">
      <input class = "inputForm" id = "emailRegistro" type ="email" placeholder = "Correo Eletrónico" required>
      <input class = "inputForm" id = "nombreYApellido" type="name" placeholder="Nombre y Apellido" required>
      <input class = "inputForm" id = "nombreDeUsuario" type ="nickname" placeholder = "Nombre de Usuario" required>
      <input class = "inputForm" id = "passwordRegistro" type ="password" placeholder ="Contraseña" required>
      <p class="registro">¿Ya tienes cuenta?<a href = "#/Inicio"> Iniciar sesión</a></p>
      <p>Para formar parte de la comunidad Beer Lovers debes aceptar que  eres mayor de edad.</p>
      <input class = "checkbox" type ="checkbox"><label for="">Soy mayor de edad</label>
      <div> <a href="#/posts" class="registrarme" type="submit"> Registrarme </a></div>
    </form>
  `;

  ladoDerecho.innerHTML = contenidoLadoDerecho;
  contenedorRegistro.appendChild(ladoDerecho);
  return contenedorRegistro;
};

export const registroUsuario = () => {
  const contenedorRegistro = document.createElement('div');
  contenedorRegistro.id = 'contenedorRegistro';

  const encabezado = document.createElement('div');
  const contenidoEncabezado = `
        <img alt="logoRegistro" class="logoRegistro" src = "Imagenes/LogoBeer.png"/>
        <h3> Conviértete en un Beer Lover's </h3>
        <div>
            <h4> Regístrate con Gmail</h4>
            <img alt="gmail" class="gmail" src="Imagenes/Gmail-Logo.png"/>
        </div>
        <p> ---------- O ---------- </p>
    `;

  const formRegistroUsuario = document.createElement('form');
  const contenidoForm = `
        <div class = "contenidoForm">
        <input class = "inputForm" id = "email" type ="email" placeholder = "Correo Eletrónico">
        <input class = "inputForm" id= "nombreYApellido" type="name" placeholder="Nombre y Apellido">
        <input class = "inputForm" id = "nombreDeUsuario" type ="nickname" placeholder = "Nombre de Usuario">
        <input class = "inputForm" id= "contraseña" type ="new-password" placeholder ="Contraseña">
        <a href = " ">¿Ya tienes cuenta? Iniciar sesión</a>
        <p>Para formar parte de la comunidad Beer Lovers debes aceptar que  eres mayor de edad.</p>
        <input class = "checkbox" type ="checkbox"><label for="">Soy mayor de edad</label>
        <button class="registrarme" type="submit"> Registrarme </button>
        </div>
    `;

  encabezado.innerHTML = contenidoEncabezado;
  formRegistroUsuario.innerHTML = contenidoForm;
  contenedorRegistro.appendChild(encabezado);
  contenedorRegistro.appendChild(formRegistroUsuario);

  return contenedorRegistro;
};

export const publicaciones = () => {
  const contenedorPublicaciones = document.createElement('div');
  contenedorPublicaciones.className = 'contenedorPublicaciones';

  const contenidoEncabezadopublicaciones = `
  <img alt="logoPublicaciones" class="logoPublicar" id="logoPublicaciones"src = "Imagenes/LogoBeer.png"/>
  
  <div class = "iconosEnlaces>
  <img alt="perfil" class="iconoPerfil" id="perfilUsuario"src = "Imagenes/hombre.png"/>
  <img alt="busqueda" class="iconoBuscar" id="buscar"src = "Imagenes/lupa.png"/>
  <img alt="home" class="iconoHome" id="home"src = "Imagenes/casa.png"/>
  <img alt="brindis" class="iconoLikes" id="likes"src = "Imagenes/salud.png"/>
  <img alt="salida" class="iconoSalir" id="salir"src = "Imagenes/salida.png"/>
  </div>
  <div id="listadoPublicaciones">
  </div>

  <footer class="footerPublicaciones">
  <img alt="brindis" class="iconoLikes" id="likes"src = "Imagenes/salud.png"/>
  <img alt="newPost" class="iconoPublicar" id="publicar"src = "Imagenes/mas.png"/>
  </footer>
  </div>
  
      
      `;
  contenedorPublicaciones.innerHTML = contenidoEncabezadopublicaciones;

  return contenedorPublicaciones;
};

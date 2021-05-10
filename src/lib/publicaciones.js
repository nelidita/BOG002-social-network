export const publicaciones = () => {
  const contenedorPublicaciones = document.createElement('div');
  contenedorPublicaciones.className = 'contenedorPublicaciones';

  const contenidoEncabezadopublicaciones = `
  <img alt="logoPublicaciones" class="logoPublicar" id="logoPublicaciones"src = "Imagenes/LogoBeer.png"/>
  
  <div class = "iconosEnlaces">
    <img alt="perfil" class="iconoPerfil" id="perfilUsuario"src = "Imagenes/hombre.png"/>
    <img alt="busqueda" class="iconoBuscar" id="buscar"src = "Imagenes/lupa.png"/>
    <img alt="home" class="iconoHome" id="home"src = "Imagenes/casa.png"/>
    <img alt="brindis" class="iconoLikes" id="likes"src = "Imagenes/salud.png"/>
    <img alt="salida" class="iconoSalir" id="salir"src = "Imagenes/salida.png"/>
  </div>
  <div id="listadoPublicaciones">
    <img alt="brindis" class="iconoLikes" id="likes"src = "Imagenes/salud.png"/>
    <img alt="comentar" class="iconoComentarios" id="comentarios"src = "Imagenes/comentario.png"/>
  </div>
  <div class="nuevoPost">
  <img alt="newPost" class="iconoPublicar" id="publicar" src = "Imagenes/mas.png"/>
  </div>
  <section id="popUpPublicación">
  <div class="overLay" id="overLay">
  <div class="popUp" id="popUp">
  <a href="#" id="cerrarPopup" class="cerrarPopup"><i class="fas fa-times"></i></a><br>
  <form action>
  <div class="inputPopup">
  <input type="text" placeholder="¿ya tomaste cerveza hoy?">
  </div>
  <input type="submit" class="submitPublicar" value="Publicar">
  </form>
  </div>
  </div>
  </div>
  </section>

      `;
  contenedorPublicaciones.innerHTML = contenidoEncabezadopublicaciones;

  return contenedorPublicaciones;
};

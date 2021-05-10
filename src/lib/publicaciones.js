export const publicaciones = () => {
  const contenedorPublicaciones = document.createElement('div');
  contenedorPublicaciones.className = 'contenedorPublicaciones';

  const contenidoEncabezadopublicaciones = `
  <div class="contenedorLogoPublicaciones">
  <img alt="logoPublicaciones" class="logoPublicar" id="logoPublicaciones"src = "Imagenes/LogoBeer.png"/>
  </div>
  <div class = "iconosEnlaces">
    <img alt="perfil" class="iconosNavegacion" id="perfilUsuario"src = "Imagenes/hombre.png"/>
    <img alt="busqueda" class="iconosNavegacion" id="buscar"src = "Imagenes/lupa.png"/>
    <img alt="home" class="iconosNavegacion" id="home"src = "Imagenes/casa.png"/>
    <img alt="brindis" class="iconosNavegacion" id="likes"src = "Imagenes/salud.png"/>
    <img alt="salida" class="iconosNavegacion" id="salir"src = "Imagenes/salida.png"/>
  </div>
   
  <div class="footerPublicaciones">
     <img alt="newPost" class="iconoPublicar" id="publicar"src = "Imagenes/mas.png"/>
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

/* 
<div id="listadoPublicaciones">
<img alt="brindis" class="iconoLikes" id="likes"src = "Imagenes/salud.png"/>
<img alt="comentar" class="iconoComentarios" id="comentarios"src = "Imagenes/comentario.png"/>
</div> */
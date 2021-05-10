export const publicaciones = () => {
  const contenedorPublicaciones = document.createElement('div');
  contenedorPublicaciones.className = 'contenedorPublicaciones';

  const contenidoEncabezadopublicaciones = `
    <div class="contenedorLogoPublicaciones">
    <img alt="logoPublicaciones" class="logoPublicar" id="logoPublicaciones"src = "Imagenes/LogoBeer.png"/>
    </div>
    <div class= "iconosEnlaces">
      <img alt="perfil" class="iconosNavegacion" id="perfilUsuario"src = "Imagenes/hombre.png"/>
      <img alt="busqueda" class="iconosNavegacion" id="buscar"src = "Imagenes/lupa.png"/>
      <img alt="home" class="iconosNavegacion" id="home"src = "Imagenes/casa.png"/>
      <img alt="brindis" class="iconosNavegacion" id="likes"src = "Imagenes/salud.png"/>
      <img alt="salida" class="iconosNavegacion" id="salir"src = "Imagenes/salida.png"/>
    </div>
    <div class="footerPublicaciones">
     <img alt="newPost" class="iconoPublicar" id="publicar"src = "Imagenes/mas.png"/>
    </div>
  `;
  contenedorPublicaciones.innerHTML = contenidoEncabezadopublicaciones;
  return contenedorPublicaciones;
};
{/* <div id="listadoPublicaciones">
      <img alt="brindis" class="iconoLikes" id="likes" src = "Imagenes/salud.png"/>
</div> */}
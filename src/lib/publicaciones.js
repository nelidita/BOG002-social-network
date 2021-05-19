export const publicaciones = () => {
  const contenedorPublicaciones = document.createElement('div');
  contenedorPublicaciones.className = 'contenedorPublicaciones';

  const contenidoEncabezadopublicaciones = `
  <div class="contenedorLogoPublicaciones">
    <img alt="logoPublicaciones" class="logoPublicar" id="logoPublicaciones"src = "Imagenes/LogoBeer.png"/>
  </div>
  <div class = "iconosEnlaces">
    <img alt="perfil" class="iconosNavegacion" id="perfilUsuario" src = "Imagenes/hombre.png"/>
    <img alt="busqueda" class="iconosNavegacion" id="buscar" src = "Imagenes/lupa.png"/>
    <a href ="#/Inicio"><img alt="home" class="iconosNavegacion" id="home" src = "Imagenes/casa.png"/></a>
    <img alt="brindis" class="iconosNavegacion" id="likes" src = "Imagenes/salud.png"/>
    <a href ="#/Inicio" ><img alt="salida" class="iconosNavegacion" id="salir" src = "Imagenes/salida.png"/></a>
  </div>
  <div id = "postsContainer"></div>
  <div class="footerPublicaciones">
    <img alt="newPost" class="iconoPublicar" id="publicar"src = "Imagenes/mas.png"/>
  </div>
  <section id="popUpPublicación">
    <div class="overLay" id="overLay">
      <div class="popUp" id="popUp">
        <a href="#" id="cerrarPopup" class="cerrarPopup"><i class="fas fa-times"></i></a><br>
        <form id="formPublicacion">
          <div class="inputPopup">
            <input id="titulo" class= 'tituloPopup' type="text" placeholder="Título de tu publicación">
            <input id="descripcion" class= 'publicacionPopup' type="text" placeholder="¿ya tomaste cerveza hoy?">
          </div>
          <input type="submit" class="submitPublicar" value="Publicar">
        </form>
      </div>
    </div>
  </section>

      `;
  contenedorPublicaciones.innerHTML = contenidoEncabezadopublicaciones;
  return contenedorPublicaciones;
};
/* justo después de form va esto enctype = 'multipart/form-data' action = 'uploader.php' method= 'POST
<input name='uploadedfile' type="file" class="cargarImagen" value="Subir imagen">
/*  */
{/* <div id="listadoPublicaciones">
<img alt="brindis" class="iconoLikes" id="likes"src = "Imagenes/salud.png"/>
<img alt="comentar" class="iconoComentarios" id="comentarios"src = "Imagenes/comentario.png"/>
</div>  */}

// export const createDivPost = (doc) => {


//     const divpublicaciones = `<div class="bodyPost">
//   <h3>${doc.data().titulo}</h3>
//   <p>${doc.data().descripcion}</p>
//   <div class="menuDesplegable">
//       <a href="#" class= "iconoMenu"><i class="fas fa-ellipsis-h"></i></a>
//       <nav>
//           <ul>
//               <li><a href="#">Editar</a></li>
//               <li><a href="#">Eliminar</a></li>
//           </ul>
//       </nav>
//   </div>
//   </div>`

//   return divpublicaciones
//   }

export const viewPost = (postData) => {

  const divPost = `<div class="bodyPost">
                      <h3>${postData.titulo}</h3>
                      <p>${postData.descripcion}</p>
                      <div class="menuDesplegable">
                        <button class= "iconoMenu" id="${postData.id}"><i class="fas fa-ellipsis-h"></i></button>
                        <ul id="nav-${postData.id}">
                          <li><a href="#">Editar</a></li>
                          <li><a href="#">Eliminar</a></li>
                        </ul>
                      </div>
                   </div>`
  return divPost;
}

export const viewListPost = (arrPost) => {

  let divListPost = "";
  arrPost.forEach(postElement => {
    divListPost += viewPost(postElement);
  });

  return divListPost;
}
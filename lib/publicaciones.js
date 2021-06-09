export const publicaciones = () => {
  const contenedorPublicaciones = document.createElement('div');
  contenedorPublicaciones.className = 'contenedorPublicaciones';
  const contenidoEncabezadopublicaciones = `
  <div class="contenedorEncabezadoPublicaciones">
    <div class="contenedorLogoPublicaciones">
      <img alt="logoPublicaciones" class="logoPublicar" id="logoPublicaciones"src = "Imagenes/LogoBeer.png"/>
    </div>
    <div class = "iconosEnlaces">
      <img alt="perfil" class="iconosNavegacion" id="perfilUsuario" src = "Imagenes/hombre.png"/>
      <img alt="busqueda" class="iconosNavegacion" id="buscar" src = "Imagenes/lupa.png"/>
      <a href ="#/Inicio"><img alt="home" class="iconosNavegacion" id="home" src = "Imagenes/casa.png"/></a>
      <img alt="brindis" class="iconosNavegacion" id="likes" src = "Imagenes/dislike.png"/>
     <img alt="salida" class="iconosNavegacion" id="salir" src = "Imagenes/salida.png"/>
    </div>
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
            <input id="descripcion" class= 'publicacionPopup' type="text" placeholder="¿ya tomaste cerveza hoy?">
            <div class='fileInput' id='fileImg'>
              <img alt="camara" class="camaraCarga" id="camaraCarga" src = "Imagenes/Camaraadjuntar.png"/>
              <label for="" class="textoFoto">Sube tu foto aqui!!!</label>
              <input id="img" class= 'imgPost' type="file">
            </div>
            </div>
          <div id="mensajeCarga"></div>
          <button class="submitPublicar" id="btnPublicar">Publicar</button>
        </form>
      </div>
    </div>
  </section>    
 `;
  contenedorPublicaciones.innerHTML = contenidoEncabezadopublicaciones;
  return contenedorPublicaciones;
};
export const viewPost = (postData) => {
  const divPost = `
    <div class="bodyPost">
    <p>${postData.email}</p>

      <div class="menuDesplegable">
        <input type="checkbox" class= "iconoMenu" id="${postData.id}">
        <label for="toggle" class:"puntos"><i class="fas fa-ellipsis-h"></i></label>
        <nav class="nav" id="nav-${postData.id}">
          <a href="#/posts" class= "btnEditar" data-id="${postData.id}">Editar</a>
          <a href="#/posts" class= "btnEliminar"  data-id="${postData.id}">Eliminar</a>
        </nav>
      </div>
      <img src="${postData.img}" class="imagenPost"/>
      <p>${postData.descripcion}</p>
      <div class='seccionLikes' id='idseccionLikes'>
        <span class = "textoLike">Likes</span>
        <div class = "divIconoLikes">
          <div id="likeDiv${postData.id}" class = "divIconoLikes">
            <img src="Imagenes/like.png" alt="likes" class="iconoLikes" data-id="${postData.id}"/>
          </div>
          <div id="dislikeDiv${postData.id}">
            <img src="Imagenes/dislike.png" alt="likes" class="iconoLikes" data-id="dislike-${postData.id}"/>
          </div>
        </div>
       <span class="contadorLikes"   data-id="spanLike-${postData.id}">${postData.likes.length}</span>
      </div>
    </div>
  `;
  return divPost;
};
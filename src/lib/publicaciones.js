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
      <img alt="brindis" class="iconosNavegacion" id="likes" src = "Imagenes/salud.png"/>
      <a href ="#/Inicio" ><img alt="salida" class="iconosNavegacion" id="salir" src = "Imagenes/salida.png"/></a>
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
            <input id="img" class= 'imgPost' type="file" placeholder="Sube tu foto aqui!!!">
          </div>
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

      <div class="menuDesplegable">

        <input type="checkbox" class= "iconoMenu" id="${postData.id}">
        <label for="toggle" class:"puntos"><i class="fas fa-ellipsis-h"></i></label>
        
        <nav class="nav" id="nav-${postData.id}">
          <a href="#/posts" class= "btnEditar" data-id="${postData.id}">Editar</a>
          <a href="#/posts" class= "btnEliminar"  data-id="${postData.id}">Eliminar</a>
        </nav>

      </div>
      <p>${postData.descripcion}</p>
      <img src="${postData.img}"/>

    </div>
  `;
  return divPost;
};
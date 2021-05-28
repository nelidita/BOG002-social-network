import { pantallaInicio } from './lib/inicio.js';
import { registroUsuario } from './lib/registroUsuario.js';
import { inicioSesion } from './lib/inicioSesion.js';
import { publicaciones, viewPost } from './lib/publicaciones.js';
import { registerUSer, loginUSer, registroGmail } from './firebaseAuth.js';

const data = firebase.firestore();

export const mostrarHome = () => {
  const rootHtml = document.getElementById('root');
  const appPantallaInicio = rootHtml.appendChild(pantallaInicio());
  return appPantallaInicio;
};

export const mostrarLogin = () => {
  const rootHtml = document.getElementById('root');
  const appPantallaLogin = rootHtml.appendChild(inicioSesion());
  const formularioInicioSesion = document.getElementById('formularioInicioSesion');
  formularioInicioSesion.addEventListener('submit', (event) => {
    const emailLogin = document.getElementById('emailLogin').value;
    const passwordLogin = document.getElementById('passwordLogin').value;
    event.preventDefault();
    loginUSer(emailLogin, passwordLogin);
  });

  // Inicio de sesion con gmail
  const contenedorGmailLogin = document.getElementById('contenedorGmailLogin');
  contenedorGmailLogin.addEventListener('click', registroGmail);
  return appPantallaLogin;
};

export const mostrarRegistro = () => {
  const rootHtml = document.getElementById('root');
  const appePantallaRegistro = rootHtml.appendChild(registroUsuario());
  appePantallaRegistro.style.display = 'flex';
  // aqui vamos a traer la información del formulario del registro.
  const formularioRegistro = document.getElementById('formularioRegistroUsuario');
  
  formularioRegistro.addEventListener('submit', (event) => {
    const emailRegistro = document.getElementById('emailRegistro').value;
    const passwordRegistro = document.getElementById('passwordRegistro').value;
    event.preventDefault();
    registerUSer(emailRegistro, passwordRegistro);
    return appePantallaRegistro;
  });

  // registro Gmail
  const contenedorclickGmail = document.getElementById('contenedorclickGmail');
  contenedorclickGmail.addEventListener('click', registroGmail);

};

// const crearPost = (descripcion,img) => {
//   data.collection('posts').doc().set({
//     descripcion,
//     img,
//   });
//   const overLay = document.getElementById('overLay'); /// AGREGADO DESPUÉS DEL PUSH DE JESSI PARA QUE SE PUBLIQUE Y EL POPUP CIERRE
//   const popUp = document.getElementById('popUp');
//   overLay.classList.remove('active');
//   popUp.classList.remove('active');
// };

const onGetPost = (callback) => data.collection('posts').onSnapshot(callback);
const deletePost = (id) => data.collection('posts').doc(id).delete();
const editPost = (id, updatedPost) => data.collection('posts').doc(id).update(updatedPost);
const getPostEditar = (id) => data.collection('posts').doc(id).get();
let editStatus = false;
let id = '';

const eliminarPost = (btnsDelete) => {

  btnsDelete.forEach((btn) =>
    btn.addEventListener("click", async (event) => {
      try { await deletePost(event.target.dataset.id); }
      catch (error) {
        console.log(error);
      }
    })
  );
}

// crear el post list parametro mostrar muro
const postList = async () => {
  await onGetPost((querySnapshot) => {

    const divListPost = document.getElementById('postsContainer');
    divListPost.innerHTML = '';

    querySnapshot.forEach((doc) => {
      const objetoPosts = ({ ...doc.data(), id: doc.id });
      divListPost.innerHTML += viewPost(objetoPosts);

    });

    const formPublicacion = document.getElementById('formPublicacion');
    const btnsEdit = document.querySelectorAll(".btnEditar");

    btnsEdit.forEach((btn) =>
      btn.addEventListener("click", async (event) => {
        try {
          const doc = await getPostEditar(event.target.dataset.id);
          const postsEdit = doc.data();
          const overLay = document.getElementById('overLay');
          const popUp = document.getElementById('popUp');
          const btnCerrarPopup = document.getElementById('cerrarPopup');

          // activamos el pop up automaticamente con el click
          overLay.classList.add('active');
          popUp.classList.add('active');

          //Hacer funcion para solo editar
          editStatus = true;
          id = doc.id;
          //Probar eliminar el input de img
          formPublicacion['img'].remove();
          formPublicacion['btnPublicar'].innerText = 'Actualizar';
          // Cerramos el pop up con la X

          btnCerrarPopup.addEventListener('click', (e) => {
            e.preventDefault();
            overLay.classList.remove('active'); //EN REALIDAD ESTE CÓDIGO NO ESTÁ HACIENDO NADA AQUÍ
            popUp.classList.remove('active');
          });
    
          formPublicacion['descripcion'].value = postsEdit.descripcion;
          // formPublicacion['img'].files[0] = postsEdit.img;
          //Funcion editar hasta aca.
        }
        catch (error) {
          console.log(error);
        }

      })
    );

    //Inicializar funcion Eliminar
    const btnsDelete = document.querySelectorAll(".btnEliminar");
    eliminarPost(btnsDelete);

  });
}

export const mostrarMuro = async () => {

  const rootHtml = document.getElementById('root');
  const appenMuro = rootHtml.appendChild(publicaciones());
  appenMuro.style.display = 'flex';
  const formPublicacion = document.getElementById('formPublicacion');

  formPublicacion.addEventListener('submit', async (e) => {
    e.preventDefault();

    //Cargando Imagenes
    const descripcion = formPublicacion['descripcion'].value;
    // const img = formPublicacion['img'].files[0];
    // const img = !editStatus ? formPublicacion['img'].files[0] :  “ ”;

    const imgName = img.name;

    const storageRef = firebase.storage().ref('imgPosts/' + imgName);
    const uploadImg = storageRef.put(img);

    try {
      if (!editStatus) {
        // await crearPost(descripcion.value, img);
        
        uploadImg.on('StatusCargaImg', (snapshot) => {

          let progreso= (snapshot.bytesTransferred/snapshot.totalBytes)*100;
          console.log("Estado de carga" + progreso)
    
        }, (error) => {console.log (error.message)},
           () => {
            uploadImg.snapshot.ref.getDownloadURL().then((downloadURL) => {
    
              data.collection('posts').doc().set({
                descripcion,
                img: downloadURL
              }, (error) => {
                if(error){
                  alert ("Error de carga de imagen");
                } else {
                  alert ("Carga Exitosa");
                }
              })
            })
            const overLay = document.getElementById('overLay'); /// AGREGADO DESPUÉS DEL PUSH DE JESSI PARA QUE SE PUBLIQUE Y EL POPUP CIERRE
            const popUp = document.getElementById('popUp');
            overLay.classList.remove('active');
            popUp.classList.remove('active');
            
          });
          
      } else {
        await editPost(id, {
          descripcion: descripcion,
          img: img
        })
        editStatus = false;
        id = '';
        formPublicacion['btnPublicar'].innerText = 'Publicar';
      }

      formPublicacion.reset();
      descripcion.focus();

    } catch (error) {
      console.log(error);
    }

  });

  await postList();
  // Popup Publicaciones
  const abrirPopup = document.getElementById('publicar');
  const overLay = document.getElementById('overLay');
  const popUp = document.getElementById('popUp');
  const btnCerrarPopup = document.getElementById('cerrarPopup');
  abrirPopup.addEventListener('click', () => {
    overLay.classList.add('active');
    popUp.classList.add('active');
  });
  btnCerrarPopup.addEventListener('click', (e) => {
    e.preventDefault();
    overLay.classList.remove('active');
    popUp.classList.remove('active');
  });

  return appenMuro;

};
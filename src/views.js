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
  const formularioRegistro = document.getElementById('formularioRegistroUsuario');

  formularioRegistro.addEventListener('submit', (event) => {
    const emailRegistro = document.getElementById('emailRegistro').value;
    const nombreUsuarioinput = document.getElementById('nombreDeUsuario').value;
    const passwordRegistro = document.getElementById('passwordRegistro').value;
    event.preventDefault();
  
    //lupe1
        //  data.collection("users").add({
        //       email: emailRegistro,
        //       nombreUsuario:nombreUsuarioinput
        //   })
        //   .then((docRef) => {
        //       console.log("Document written with ID: ", docRef.id);
        //   })
        //   .catch((error) => {
        //       console.error("Error adding document: ", error);
        //   });
    registerUSer(emailRegistro, passwordRegistro);
    return appePantallaRegistro;
  });

  // registro Gmail
  const contenedorclickGmail = document.getElementById('contenedorclickGmail');
  contenedorclickGmail.addEventListener('click', registroGmail);

};

const onGetPost = (callback) => data.collection('posts').onSnapshot(callback);
const deletePost = (id) => data.collection('posts').doc(id).delete();
const editPost = (id, updatedPost) => data.collection('posts').doc(id).update(updatedPost);
const getPostID = (id) => data.collection('posts').doc(id).get();
let editStatus = false;
let id = '';

const cerrarPopUp = (formPublicacion, btnCerrarPopup, overLay, popUp) => {
  btnCerrarPopup.addEventListener('click', (e) => {
    e.preventDefault();
    if (!editStatus) {

      overLay.classList.remove('active');
      popUp.classList.remove('active');
    } else {

      editStatus = false;
      id = '';
      // formPublicacion['img'].remove();
      formPublicacion['img'].style.display = "flex"
      formPublicacion['btnPublicar'].innerText = 'Publicar';
      formPublicacion.reset();

    }
  });
}

const abrirPopup = (btnAbrirPopUp, overLay, popUp) => {

  btnAbrirPopUp.addEventListener('click', () => {
    overLay.classList.add('active');
    popUp.classList.add('active');
  });

}

const publicarPost = (formPublicacion,user) => {
  console.log(user.uid);

  formPublicacion.addEventListener('submit', async (e) => {
    e.preventDefault();

    const descripcion = formPublicacion['descripcion'].value;

    let img = formPublicacion['img'].files[0];
    // const img = editStatus === false ? img = formPublicacion['img'].files[0] :  img="";
    if (editStatus === false) {
      img = formPublicacion['img'].files[0]
    } else {
      img = "";
    }
    const mensajeCarga = document.getElementById('mensajeCarga');
    const imgName = img.name;
    const storageRef = firebase.storage().ref('imgPosts/' + imgName);
    const uploadImg = storageRef.put(img);
    
    try {
      if (!editStatus) {

        uploadImg.on('StatusCargaImg', (snapshot) => {

          let porcentajeDeCarga = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Estado de carga" + porcentajeDeCarga);
          let textoMensajeCarga = `<progress  max="100">"${porcentajeDeCarga}"</progress>`;
          mensajeCarga.innerHTML = textoMensajeCarga;

        }, (error) => { console.log(error.message) }, () => {
          uploadImg.snapshot.ref.getDownloadURL().then((downloadURL) => {

            data.collection('posts').doc().set({
              descripcion,
              img: downloadURL, 
              likes:0,
              user: user.uid,
              email:user.email,
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),

              // email:
              // fecha:
            }, (error) => {
              if (error) {
                alert("Error de carga de imagen");
              } else {
                alert("Carga Exitosa");
              }
            })
          })

          //Cuando damos click al boton publicar con el evento submiit, se cierra inmediatamente el popUp
          mensajeCarga.innerHTML = "";
          overLay.classList.remove('active');
          popUp.classList.remove('active');
        });

      } else {

        //como no esta publicando entonces inciializamos la funcion de editar
        editPost(id, { descripcion: descripcion })

        //esto lo agregue para quitar que se abra el pop up con la edicion
        // 
        // overLay.classList.remove('active');
        // popUp.classList.remove('active');
      }

    } catch (error) {
      console.log(error);
    }
    formPublicacion.reset();
  });

}


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

const AbrirPopUpEditar = (btnsEdit, formPublicacion) => {

  btnsEdit.forEach((btn) =>
    btn.addEventListener("click", async (event) => {
      try {
        const doc = await getPostID(event.target.dataset.id);
        const postsEdit = doc.data();
        // console.log(postsEdit);
        const overLay = document.getElementById('overLay');
        const popUp = document.getElementById('popUp');
        const btnCerrarPopup = document.getElementById('cerrarPopup');

        // activamos el pop up automaticamente con el click
        overLay.classList.add('active');
        popUp.classList.add('active');

        editStatus = true;
        id = doc.id;
        // console.log(doc.likes);

        formPublicacion['descripcion'].value = postsEdit.descripcion;
        formPublicacion['img'].style.display = "none"
        formPublicacion['btnPublicar'].innerText = 'Actualizar'
        cerrarPopUp(formPublicacion, btnCerrarPopup, overLay, popUp);
      }
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

    // Aquí vamos a colocar el código para los Likes
    // Investigación Nelida
    const btnLikes = document.querySelectorAll(".iconoLikes");
    btnLikes.forEach((btn) =>
      btn.addEventListener("click", async (event) => {
        const idPost = event.target.dataset.id;
        console.log(idPost);
//lupeLikes
        const doc = await getPostID(event.target.dataset.id);
        const likes = doc.data().likes;
        console.log(likes);
        
        const idSpanLike = "spanLike-" + event.target.dataset.id;

        // let numLikes = 0;

        if (likes % 0){
          console.log("es par")
          document.querySelector("#likeDiv" + idPost).style.display = "block"
          document.querySelector("#dislikeDiv" + idPost).style.display = "none"
        } else {
          console.log("es impar")
          document.querySelector("#likeDiv" + idPost).style.display = "none"
          document.querySelector("#dislikeDiv" + idPost).style.display = "block"
        }
      

        // const likeFirebase = new Firebase (idLikeIcono)
        // likes.on('value', (snapshot) => {
          
        //   if (snapshot.val()) {
        //     document.querySelector('#' + idSpanLike).innerHTML = snapshot.val() + ' likes';
        //   } else {
        //     return false;
        //   }
        // });

      })
    );


    //Esta funcion solo habilita el popUp de editar, NO edita
    const formPublicacion = document.getElementById('formPublicacion');
    const btnsEdit = document.querySelectorAll(".btnEditar");
    AbrirPopUpEditar(btnsEdit, formPublicacion);

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
  // Popup Publicaciones
  const btnAbrirPopUp = document.getElementById('publicar');
  const overLay = document.getElementById('overLay');
  const popUp = document.getElementById('popUp');
  const btnCerrarPopup = document.getElementById('cerrarPopup');
  var user = firebase.auth().currentUser;
  publicarPost(formPublicacion,user);
  await postList();
  abrirPopup(btnAbrirPopUp, overLay, popUp)
  cerrarPopUp(formPublicacion, btnCerrarPopup, overLay, popUp)
  
  return appenMuro;

};



// firebase.auth().onAuthStateChanged(function(user) {
//   // console.log(user);
//   if (user != null) {
//     user.providerData.forEach(function (profile) {
//       // console.log("Sign-in provider: " + profile.providerId);
//       // console.log("  Provider-specific UID: " + profile.uid);
//       // console.log("  Name: " + profile.displayName);
//       console.log("  Email: " + profile.email);
//       // console.log("  Photo URL: " + profile.photoURL);
//     });
//   } else {
//     // No user is signed in.
//   }
// });




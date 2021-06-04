import { pantallaInicio } from './lib/inicio.js';
import { registroUsuario } from './lib/registroUsuario.js';
import { inicioSesion } from './lib/inicioSesion.js';
import { publicaciones, viewPost } from './lib/publicaciones.js';
import { registerUSer, loginUSer, registroGmail, cerrarSesion } from './firebaseAuth.js';

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
    loginUSer(emailLogin, passwordLogin)
      .then((userCredential) => {
        window.location.hash = '#/posts'; // Con esto si el usuario se loguea correctamente muestra el muro.

        swal({
          title: 'Muy bien!!! Eres un  Beer Lovers.',
          text: 'Bienvenido',
          icon: 'success'
        });
        return userCredential

      }).catch((error) => {
        const mensajeError = error.message
        swal({
          title: mensajeError,
          text: 'Por favor vuelve a intentarlo',
          icon: 'error'
        });
      });

  });

  // Inicio de sesion con gmail
  const contenedorGmailLogin = document.getElementById('contenedorGmailLogin');
  contenedorGmailLogin.addEventListener('click', registroGmail()
  .then((result) => {
    window.location.hash = '#/posts';
    swal({
      title: 'Ingresaste correctamente.',
      text: 'Bienvenido a Beer Lover',
      icon: 'success'
    });
    return result

  }).catch((error) => {
    const mensajeerrorGmail = error.message;
    swal({
      title: mensajeerrorGmail,
      text: 'Por favor use una cuenta válida',
      icon: 'error'
    });

  }))


  return appPantallaLogin;

};

export const mostrarRegistro = () => {
  const rootHtml = document.getElementById('root');
  const appePantallaRegistro = rootHtml.appendChild(registroUsuario());
  appePantallaRegistro.style.display = 'flex';
  const formularioRegistro = document.getElementById('formularioRegistroUsuario');

  formularioRegistro.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailRegistro = document.getElementById('emailRegistro').value;
    const passwordRegistro = document.getElementById('passwordRegistro').value;

    registerUSer(emailRegistro, passwordRegistro)

      .then((userCredential) => {
        window.location.hash = '#/posts';

        swal({
          title: 'Bienvenido a Beer Lovers.',
          text: 'Ya puedes disfrutar de nuestro contenido',
          icon: 'success'
        });

        return userCredential

      }).catch((error) => {
        const mensajeErrorRegister = error.message
        swal({
          title: mensajeErrorRegister,
          text: 'Por favor intente con una cuenta válida',
          icon: 'error'
        });

      });
  
  });

  // registro Gmail
  const contenedorclickGmail = document.getElementById('contenedorclickGmail');
  contenedorclickGmail.addEventListener('click', registroGmail()
    .then((result) => {
      window.location.hash = '#/posts';
      swal({
        title: 'Ingresaste correctamente.',
        text: 'Bienvenido a Beer Lover',
        icon: 'success'
      });
      return result

    }).catch((error) => {
      const mensajeerrorGmail = error.message;
      swal({
        title: mensajeerrorGmail,
        text: 'Por favor use una cuenta válida',
        icon: 'error'
      });

    }))

    return appePantallaRegistro;

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

const publicarPost = (formPublicacion, user) => {
  // console.log(user.uid);

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



    try {
      if (!editStatus) {
        const mensajeCarga = document.getElementById('mensajeCarga');
        const imgName = img.name;
        const storageRef = firebase.storage().ref('imgPosts/' + imgName);
        const uploadImg = storageRef.put(img);
        uploadImg.on('StatusCargaImg', (snapshot) => {

          let porcentajeDeCarga = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Estado de carga" + porcentajeDeCarga);
          let textoMensajeCarga = `<progress  max="100">"${porcentajeDeCarga}"</progress>`;
          mensajeCarga.innerHTML = textoMensajeCarga;

        }, (error) => { console.log(error.message) }, () => {

          uploadImg.snapshot.ref.getDownloadURL().then((downloadURL) => {
            // firebase.auth().onAuthStateChanged(function (user) {
            const user = firebase.auth().currentUser
            data.collection('posts').doc().set({
              descripcion,
              img: downloadURL,
              likes: [],
              userUid: user.uid,
              email: user.email,
              name: user.displayName,
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),

            });
            // }, (error) => {
            //   if (error) {
            //     alert("Error de carga de imagen");
            //   } else {
            //     alert("Carga Exitosa");
            //   }

            // })
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
    const btnLikes = document.querySelectorAll(".iconoLikes");
    btnLikes.forEach((btn) =>
      btn.addEventListener("click", async (event) => {
        const idPost = event.target.dataset.id;
        console.log(idPost)

        const doc = await getPostID(idPost);
        const userUidPost = doc.data().userUid;
        console.log(userUidPost)
        // const currentUser = firebase.auth().currentUser;
        // console.log(currentUser.uid)





        firebase.auth().onAuthStateChanged(function (user) {
          let userUidActual = user.uid
          console.log(userUidActual);

          data.collection('posts').doc(idPost).update({

            likes: firebase.firestore.FieldValue.arrayUnion(userUidActual),
            // likes: firebase.firestore.FieldValue.arrayRemove("otro"),
          });

          const arrayLikes = doc.data().likes;
          console.log(arrayLikes);
          // for(let i = 0 ; i <arrayLikes.length; i++){

          if (arrayLikes.includes(userUidActual) === true) {
            console.log("usuario logueado ya dio like")


          } else {
            console.log("no a dado like")
            // data.collection('posts').doc(idPost).update({
            //   likes: firebase.firestore.FieldValue.arrayRemove(userUidActual)
            // });
          }
          // }

          //LLevar funcion que permite que salga el menu de eliminar y editar solo al usuario que lo posteo
          // if (userUidPost === userUidActual) {
          //   console.log("usuario que postea es el mismo logueado")


          // } else {
          //   console.log("usuario que postea es DIFERENTE al logueado")
          // }

        });



        // const likes = doc.data().likes;
        // console.log(doc,doc.data());

        // const idSpanLike = "spanLike-" + idPost;
        // console.log(data);
        // doc.update({
        //   likes:firebase.firestore.FieldValue.arrayUnion("carlos"),

        // })




        // if ((likes%2)==0){
        //   console.log("es par")
        //   document.querySelector("#likeDiv" + idPost).style.display = "block"
        //   document.querySelector("#dislikeDiv" + idPost).style.display = "none"
        //   const numlikes = doc.data().likes+1;
        //   console.log(numlikes)
        // } else {
        //   console.log("es impar")
        //   document.querySelector("#likeDiv" + idPost).style.display = "none"
        //   document.querySelector("#dislikeDiv" + idPost).style.display = "block"
        //   const numlikes = doc.data().likes-1;
        //   console.log(numlikes)
        // }
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
  const user = firebase.auth().currentUser;
  publicarPost(formPublicacion, user);
  await postList();
  abrirPopup(btnAbrirPopUp, overLay, popUp)
  cerrarPopUp(formPublicacion, btnCerrarPopup, overLay, popUp)
  // cerrar sesión
  const salirSesion = document.getElementById('salir');
  salirSesion.addEventListener('click', cerrarSesion);


  return appenMuro;

};
export const registerUSer = (emailRegistro, passwordRegistro) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(emailRegistro, passwordRegistro)
    .then((userCredential) => {
      window.location.hash = '#/posts';
      swal({
        title: 'Bienvenido a Beer Lovers.',
        text: 'Ya puedes disfrutar de nuestro contenido',
        icon: 'success'
      });

    }).catch((error) => {
      swal({
        title: 'Este usuario ya existe.',
        text: 'Por favor intente con una cuenta válida',
        icon: 'error'
      });

    });

};

export const loginUSer = (emailLogin, passwordLogin) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(emailLogin, passwordLogin)
    .then((userCredential) => {

      window.location.hash = '#/posts'; // Con esto si el usuario se loguea correctamente muestra el muro.

      // swal({
      //   title: 'Muy bien!!! Eres un  Beer Lovers.',
      //   text: 'Bienvenido',
      //   icon: 'success'
      // });

    }).catch((error) => {
      // swal({
      //   title: 'Contraseña no válida.',
      //   text: 'Por favor vuelve a intentarlo',
      //   icon: 'error'
      // });

    });

};

export const registroGmail = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      window.location.hash = '#/posts';
      swal({
        title: 'Ingresaste correctamente.',
        text: 'Bienvenido a Beer Lover',
        icon: 'success'
      });

    }).catch((error) => {
      swal({
        title: 'Cuenta no válida.',
        text: 'Por favor use una cuenta válida',
        icon: 'error'
      });

    });

};

export const cerrarSesion = () => {
  firebase.auth().signOut().then(() => {

    window.location.hash = '#/Inicio';

  }).catch((error) => {

  });
}
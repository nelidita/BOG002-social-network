export const registerUSer = (emailRegistro, passwordRegistro) => {
 return firebase
    .auth()
    .createUserWithEmailAndPassword(emailRegistro, passwordRegistro)

};

export const loginUSer = (emailLogin, passwordLogin) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(emailLogin, passwordLogin)
};

export const registroGmail = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth()
    .signInWithPopup(provider)
    // .then((result) => {
    //   window.location.hash = '#/posts';
    //   swal({
    //     title: 'Ingresaste correctamente.',
    //     text: 'Bienvenido a Beer Lover',
    //     icon: 'success'
    //   });

    // }).catch((error) => {
    //   swal({
    //     title: 'Cuenta no válida.',
    //     text: 'Por favor use una cuenta válida',
    //     icon: 'error'
    //   });

    // });

};

export const cerrarSesion = () => {
  firebase.auth().signOut().then(() => {

    window.location.hash = '#/Inicio';

  }).catch((error) => {

  });
}
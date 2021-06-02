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
      // swal('Bienvenido a Beer Lovers', userCredential.user);
    })
    .catch((error) => {
      swal({
        title: 'Este usuario ya existe.',
        text: 'Por favor intente con una cuenta válida',
        icon: 'error'
      });
      // alert('Usuario ya existe. Por favor intente con una cuenta válida', error.message);
    });
};
export const loginUSer = (emailLogin, passwordLogin) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(emailLogin, passwordLogin)
    .then((userCredential) => {
      window.location.hash = '#/posts'; // Con esto si el usuario se loguea correctamente muestra el muro.

      swal({
        title: 'Muy bien!!! Eres un  Beer Lovers.',
        text: 'Bienvenido',
        icon: 'success'
      });
      // swal('Muy bien!!! Eres un Beer Lovers. Bienvenido', userCredential.user);
 
    })
    .catch((error) => {
      swal({
        title: 'Contraseña no válida.',
        text: 'Por favor vuelve a intentarlo',
        icon: 'error'
      });
      // swal('Contraseña no válida. Vuelve a intentarlo', error.message);
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
      // window.location.hash = '#/posts';
      // swal('Ingresaste correctamente. Bienvenido a Beer Lovers', result);
    })
    .catch((error) => {
      swal({
        title: 'Cuenta no válida.',
        text: 'Por favor use una cuenta válida',
        icon: 'error'
      });
      // swal('Por favor usa una cuenta válida', error);
    });
};


// lo saque de https://firebase.google.com/docs/auth/web/manage-users?hl=es-419
// firebase.auth().onAuthStateChanged(function(user) {
//  if (user != null) {
//   user.providerData.forEach(function (profile) {
//     console.log("Sign-in provider: " + profile.providerId);
//     console.log("  Provider-specific UID: " + profile.uid);
//     console.log("  Name: " + profile.displayName);
//     console.log("  Email: " + profile.email);
//     console.log("  Photo URL: " + profile.photoURL);
//   });
// }
// });


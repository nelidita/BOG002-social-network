/* import { mostrarMuro } from './main.js'; */

export const registerUSer = (emailRegistro, passwordRegistro) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(emailRegistro, passwordRegistro)
    .then((userCredential) => {
    // Signed in
      alert('Bienvenido a Beer Lovers', userCredential.user);
      // var user = userCredential.user;
    })
    .catch((error) => {
      alert('Usuario ya existe. Por favor intente con una cuenta válida', error.message);
      // var errorCode = error.code;
      // var errorMessage = error.message;
    });
};

export const loginUSer = (emailLogin, passwordLogin) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(emailLogin, passwordLogin)
    .then((userCredential) => {
      // Signed in
      alert('Muy bien!!! Eres un Beer Lovers. Bienvenido', userCredential.user);
    /*   mostrarMuro (); */
   /*  console.log(mostrarMuro()); */
     
      // var user = userCredential.user;/* 
    })
    .catch((error) => {
      alert('Contraseña no válida. Vuelve a intentarlo', error.message);

 /*    const mensajeErrorLogin = document.getElementById ('errorLogin');
    mensajeErrorLogin.innerHTML= 'Credenciales inválidas';
     */
    
      // var errorCode = error.code;
     /*  const errorMessage = error.message; */
    });
};
/* console.log(loginUSer()); */
export const registroGmail = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
    // /** @type {firebase.auth.OAuthCredential} */
    // var credential = result.credential;
      alert('Gracias por registrarte. Bienvenido a Beer Lovers', result);

      // This gives you a Google Access Token. You can use it to access the Google API.
      // var token = credential.accessToken;
    // The signed-in user info.
    // var user = result.user;
    // ...
    }).catch((error) => {
    // Handle Errors here.
    // var errorCode = error.code;
    // var errorMessage = error.message;
    // // The email of the user's account used.
    // var email = error.email;
    // // The firebase.auth.AuthCredential type that was used.
    // var credential = error.credential;
    // ...
      alert('Por favor usa una cuenta válida', error);
    });
};

/* export const  */
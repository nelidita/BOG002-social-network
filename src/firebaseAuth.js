export const registerUSer = (emailRegistro, passwordRegistro) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(emailRegistro, passwordRegistro)
    .then((userCredential) => {
      window.location.hash = '#/posts';
      alert('Bienvenido a Beer Lovers', userCredential.user);
    })
    .catch((error) => {
      alert('Usuario ya existe. Por favor intente con una cuenta válida', error.message);
    });
};
export const loginUSer = (emailLogin, passwordLogin) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(emailLogin, passwordLogin)
    .then((userCredential) => {
      window.location.hash = '#/posts'; // Con esto si el usuario se loguea correctamente muestra el muro.
      alert('Muy bien!!! Eres un Beer Lovers. Bienvenido', userCredential.user);
    })
    .catch((error) => {
      alert('Contraseña no válida. Vuelve a intentarlo', error.message);
    });
};
export const registroGmail = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      window.location.hash = '#/posts';
      alert('Ingresaste correctamente. Bienvenido a Beer Lovers', result);
    })
    .catch((error) => {
      alert('Por favor usa una cuenta válida', error);
    });
};
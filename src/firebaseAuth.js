export const registerUSer = (emailRegistro, passwordRegistro) => firebase
  .auth()
  .createUserWithEmailAndPassword(emailRegistro, passwordRegistro);

export const loginUSer = (emailLogin, passwordLogin) => firebase
  .auth()
  .signInWithEmailAndPassword(emailLogin, passwordLogin);

export const registroGmail = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth()
    .signInWithPopup(provider)

};

export const cerrarSesion = () => {
  return firebase.auth().signOut().then(() => {
    window.location.hash = '#/Inicio';
  }).catch((error) => {

  });
};

export const registerUSer = (emailRegistro, passwordRegistro) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(emailRegistro, passwordRegistro)
    .then((userCredential) => {
    // Signed in
      alert(userCredential.user);
      // var user = userCredential.user;
    })
    .catch((error) => {
      alert('error', error.message);
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
      alert(userCredential.user);
      // var user = userCredential.user;
    })
    .catch((error) => {
      alert('error', error.message);
      // var errorCode = error.code;
      // var errorMessage = error.message;
    });
};
export const registroGmail = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
    // /** @type {firebase.auth.OAuthCredential} */
    // var credential = result.credential;
      alert(result);

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
      alert(error);
    });
};

import { mostrarHome, mostrarRegistro, mostrarLogin, mostrarMuro } from './views.js';
// import { loginUSer } from './firebaseAuth.js';

// preguntar si se puede retornar de una vez o es una buena practica el break
export const showRoot = (router) => {
    location.hash = router;
    const root = document.getElementById('root');
    root.innerHTML = '';
    switch (router) {
        case "#/Login":
            mostrarLogin();
            break;
        case "#/Registro":
            mostrarRegistro();
            break;
        case "#/posts":
            // var user = firebase.auth().currentUser;
            // console.log(user)
            // if (user) {
            //     console.log("estoy en el post")
            // } else {
            //     console.log("no estoy entrando a post")
            // }
            mostrarMuro();
            break;
        default:
            mostrarHome();
            break;
    }

}





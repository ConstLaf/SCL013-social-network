import { viewFeed } from '../Views/Pages/Feed.js';
import { viewLoginError, viewSignInError, viewRedirecting } from '../Views/Components/Others.js';

// --------------FUNCIÓN ENVÍO CORREO VERIFICACIÓN--------------------------->
export const verificate = () => {
  const user = firebase.auth().currentUser;

  user.sendEmailVerification().then(() => {
    // Email sent.
    console.log('Enviando correo...');
  }).catch(() => {
    // An error happened.
  });
};

// --------------REGISTRAR CON USUARIO Y CONTRASEÑA--------------------------->
export const register = (userDetails) => {
  firebase.auth().createUserWithEmailAndPassword(userDetails.email, userDetails.password)
    .then((cred) => {
      if (cred) {
        cred.user.updateProfile({ // Usamos el mismo cred para actualizar el perfil con update
          displayName: userDetails.name, // Actualizamos name con nombre ingresado en el formulario
        }).then();
      }
      firebase.firestore().collection('Usuarios').doc(cred.user.uid).set({
        name: userDetails.name,
        district: userDetails.district,
        email: userDetails.email,
      });
    })
    .then(() => {
      console.log('nombre y comuna guardados con el registro');
      console.log('ver si se puede pushear', userDetails.name);
      verificate();
      viewRedirecting();
    })
    .catch((error) => {
      console.log(error);
      viewSignInError();
    });
};

// --------------LOGIN CON USUARIO Y CONTRASEÑA--------------------------->
export const logIn = (emailLogin, passwordLogin) => {
  firebase.auth().signInWithEmailAndPassword(emailLogin, passwordLogin)
    .catch(() => {
      viewLoginError();
    });
};

// --------------OBSERVADOR DE USUARIO LOGEADO--------------------------->
export const observer = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log('existe usuario activo');
      viewFeed(user);
      console.log('*******************');
      console.log(user.emailVerified);
      console.log('*******************');
    } else {
    //    User is signed out.
      console.log('no existe usuario activo');
    }
  });
};
observer();

// --------------FUNCIÓN CERRAR SESIÓN--------------------------->
export const closing = () => {
  firebase.auth().signOut()
    .then(() => {
      console.log('Saliendo...');
    })
    .catch((error) => {
      console.log(error);
    });
};

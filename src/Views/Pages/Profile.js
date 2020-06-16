import { viewHeaderFeed } from '../Components/Header.js';
import { viewFooter } from '../Components/Footer.js';

export const viewProfile = () => {
  const viewProfileContainer = document.getElementById('page_container');
  const user = firebase.auth().currentUser;
  viewProfileContainer.innerHTML = `
    <div id="containerPageProfile">
      <div id="containerProfile">
        <div id="containerDescriptionUsername">
            <p id="nameProfile">${user.displayName}</p>
            <label for="description"><b>Descripción:</b></label>
            <span id="profileDescription"></span>
            <div id="toAdd"></div>
            <label for="mail"><b>Mail de contacto:</b></label>
            <span class="profileMail">${user.email}</span>
            <label for="age"><b>Edad:</b></label>
            <span id="profileAge"></span>
            <div id="toAdd1"></div>
            <label for="location"><b>De donde eres:</b></label>
            <span id="profileLocation"></span>
            <div id="toAdd2"></div>
        </div>
        <div id="containerImgAndButton">
          <img id="imgProfile" scr="${user.photoURL}">
          <div class="addButton">
            <button id="editProfile">Editar perfil</button>
          </div>
        </div>
      </div>
    </div>`;
  viewHeaderFeed();
  viewFooter();

  // ----------------------------FUNCION EDITAR POST---------------------------->
  const editProfileUser = (uid) => {
    const profileDescription = document.querySelector('#profileDescription');
    // profileDescription.style.display = 'none';
    const profileAge = document.querySelector('#profileAge');
    // profileAge.style.display = 'none';
    const profileLocation = document.querySelector('profileLocation');
    // profileLocation.style.display = 'none';

    const toAdd = document.querySelector('#toAdd');
    toAdd.innerHTML = `
      <textarea id="editProfileUserr"></textarea>`;

    const addButton = document.querySelector('.addButton');
    addButton.innerHTML = `
    <button id="saveProfile">Guardar</button>`;

    addButton.onclick = () => {
      const profileRef = firebase.firestore().collection('InformacionDePerfil').doc(uid);
      return profileRef.update({
        description: profileDescription.value,
        age: profileAge.value,
        location: profileLocation.value,
      })
        .then(() => {
          console.log('Document successfully updated!');
          toAdd.style.display = 'hidden';
          addButton.style.display = 'hidden';
        })
        .catch((error) => {
          console.error('Error updating document: ', error);
        });
    };
  };

  // ----------------------------BOTÓN EDDITAR POST---------------------------->
  const editProfile = document.querySelector('#editProfile');
  editProfile.addEventListener('click', (doc) => {
    const result = window.confirm('¿Quieres editar tu perfil?');
    if (result) {
      editProfileUser(doc.id);
    }
  });
  return viewProfileContainer;
};

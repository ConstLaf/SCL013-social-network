// ---------------TOP NAV BAR BIENVENIDA, REGISTRAR E INICIAR SESION------------------->
export const viewHeader = () => {
  const headerContainer = document.getElementById('header_container');
  headerContainer.innerHTML = `
    <div id="header">
      <div id="headerLogo">
        <a href="#/">
          <img src="imagenes/Logo.png" alt="logo-lofche" id="logoHeader">
        </a>
      </div>
      <div id="divLogInButton">
        <a href="#/iniciarSesion">
          <button id="logInButton">Iniciar Sesión</button>
        </a> 
      </div>
    </div>`;

  return headerContainer;
};

// ------------TOP NAV BAR MURO---------------------->
export const viewHeaderFeed = () => {
  const headerContainer = document.getElementById('header_container');
  const user = firebase.auth().currentUser;
  headerContainer.innerHTML = `
    <div id="headerFeed">
      <div id="headerNotificationFeed">
        <a href="">
          <img src="imagenes/bluebell.png" alt="logo-lofche" id="notificationHeaderFeed">
        </a>
      </div>
      <div id="headerFriendsFeed">
        <a href="">
          <img src="imagenes/amigos.png" alt="logo-lofche" id="friendsHeaderFeed">
        </a>
      </div>  
      <div id="headerLogoFeed">
        <a href="">
          <img src="imagenes/Logo.png" alt="logo-lofche" id="logoHeaderFeed">
        </a>
      </div>
      <div id="headerInboxFeed">
        <a href="">
          <img src="imagenes/envalow.png" alt="logo-lofche" id="inboxHeaderFeed">
        </a>
      </div> 
      <div id="headerPerfilButton">
        <img type ="button" id="btnHeaderOptions" src="${user.photoURL}"></img>
          <div class="dropdownContent">
              <a href="#/profile" id="goToProfile">Ir al perfil</a>
              <a href="#/logout" id="logout">Cerrar sesión</a>  
          </div>
      </div>
    </div>`;

  return headerContainer;
};

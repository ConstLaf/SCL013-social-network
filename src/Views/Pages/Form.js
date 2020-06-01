export const viewForm = () => {
  const viewSignInContainer = document.getElementById('page_container');
  viewSignInContainer.innerHTML += `
    <form>
        <div>
          <h1>¡Únete a Lofche!</h1>
          <hr>
      
          <label for="name"><b>Nombre completo</b></label>
          <input type="text" placeholder="Lofche" name="name" required>
      
          <label for="email"><b>Correo Electrónico</b></label>
          <input type="text" placeholder="lofche@example.com" name="email" required>

          <label for="psw"><b>Contraseña</b></label>
          <input type="password" placeholder="Ingresa Contraseña" name="psw" required>
      
          <label for="psw"><b>Confirme su contraseña</b></label>
          <input type="password" placeholder="Ingresa Contraseña" name="psw" required>

          <label><b>También puedes registrarte con:</b></label>

          <a href="http://">
            <img src="" alt="" class="social-media-logo" id="google">
          </a>

          <a href="http://">
            <img src="" alt="" class="social-media-logo" id="facebook">
          </a>

          <div class="buttonNext">
            <button type="button" class="siguiente">Siguiente</button>
          </div>    
        </div>
    </form>`;
};
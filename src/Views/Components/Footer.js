export const viewFooter = () => {
  const footerContainer = document.getElementById('footer_container');
  footerContainer.innerHTML += `
    <div id="footer">
      <div id="logoFooter">
        <img src="imagenes/logo.png" alt="" id="imgFooter">
      </div>
      <div id="copyright">
        <p>© Copyright by Lofche | 2020.</p>
      </div>
      <div class="social-media">
        <img src="imagenes/facebook.png" alt="" id="socialMedia1">
      </div>
      <div class="social-media">
        <img src="imagenes/instagram.png" alt="" id="socialMedia2">
      </div>
      <div class="social-media">
        <img src="imagenes/twitter.png" alt="" id="socialMedia3">
      </div>
    </div>`;
};
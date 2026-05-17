// Función para establecer una cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  // Manejo del botón "Aceptar cookies"
  document.getElementById('accept-cookies').addEventListener('click', function() {
    // Establece una cookie para indicar la aceptación del usuario
    setCookie('cookie_accepted', true, 30); // Ejemplo con 30 días de expiración
    // Opcionalmente, oculta la ventana emergente de cookies
    document.getElementById('cookie-consent').style.display = 'none';
  });
  
  // Manejo del botón "Más información"
  document.getElementById('more-info').addEventListener('click', function() {
    // Redirige al usuario a tu página de política de cookies
    window.location.href = 'cookies.html';
  });
  
  // Verifica si la cookie de aceptación de cookies ya está establecida
  if (getCookie('cookie_accepted')) {
    // Si la cookie está establecida, oculta la ventana emergente de cookies
    document.getElementById('cookie-consent').style.display = 'none';
  }
  
  // Función para obtener una cookie
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i].trim();
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  // Function to handle reject cookies button click
document.getElementById('reject-cookies').addEventListener('click', function() {
  // Set a cookie to indicate that the user has rejected cookies
  setCookie('cookie_rejected', true, 30); // Example with 30 days of expiration
  // Optionally, hide the cookie consent popup
  document.getElementById('cookie-consent').style.display = 'none';
});
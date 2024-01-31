document.addEventListener('DOMContentLoaded', function () {
    // Check if the user has already accepted cookies
    const showConsent = document.cookie.indexOf('cookieConsent=true') === -1;
  
    if (showConsent) {
      // If not, display the cookie consent popup
      const consentPopup = document.createElement('div');
      consentPopup.id = 'cookieConsent';
      consentPopup.className = 'cookie-consent';
      consentPopup.innerHTML = `
        <p>This website uses cookies to ensure you get the best experience on our website.</p>
        <button onclick="acceptCookies()">Got it!</button>
      `;
  
      document.body.appendChild(consentPopup);
    }
  });
  
  function acceptCookies() {
    // Set a cookie to remember user's consent
    document.cookie = 'cookieConsent=true; max-age=' + 24 * 60 * 60; // 24 hours
  
    // Remove the cookie consent popup
    const consentPopup = document.getElementById('cookieConsent');
    consentPopup.parentNode.removeChild(consentPopup);
  }
  
import React, { useState } from 'react';

const CookieConsent: React.FC = () => {
  const [showConsent, setShowConsent] = useState(!localStorage.getItem('cookieConsent'));

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowConsent(false);
  };

  return (
    <>
      {showConsent && (
        <div className="cookie-consent">
          <p>Denna sian använder cookies för dess grundläggande funktionalitet.</p>
          <p>Du kan läsa mer om hur cookies hanteras i vår <a href="./cookiepolicy" style={{color: "lightblue"}}>CookiePolicy</a></p>
          <p></p>
          <button onClick={acceptCookies} className='cookieBtn'>Jag förstår!</button>
        </div>
      )}
    </>
  );
};

export default CookieConsent;

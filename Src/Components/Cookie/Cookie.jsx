import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Cookie({ onAccept, onRefuse }) {
  const [hideCookie, setHideCookie] = useState(false);

  useEffect(() => {
    if (document.cookie.split(';').some((item) => item.trim().startsWith('cookieConsent='))) {
      setHideCookie(true);
    }
  }, []);

  const handleAccept = () => {
    setHideCookie(true);
    onAccept(); 
    document.cookie = "cookieConsent=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
  };

  const handleRefuse = () => {
    setHideCookie(true);
    onRefuse(); 
    document.cookie = "cookieConsent=false; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
  };

  return (
    (hideCookie ? null : (
      <div className='border-radius' id="cookies">
        <div className="cookies__container">
          <div className="cookies__subcontainers">
            <div className="cookie">
              <p className='margin-4'>Ce site web utilise reCAPTCHA comme cookie tiers pour garantir un moyen de contact sécurisé</p> 
              <p className='margin-4'>Veuillez noter que si vous refusez les cookies, le formulaire de contact ne sera pas disponible.</p>
              <button onClick={handleAccept} className='border-radius cookie__btn margin-4 form-btn'>J'accepte</button>
              <button onClick={handleRefuse} className='border-radius cookie__btn margin-4 form-btn'>Je refuse</button>
            </div>
          </div>
        </div>
      </div>
    ))
  );
}

Cookie.propTypes = {
    onAccept: PropTypes.func,
    onRefuse: PropTypes.func,
}

export default Cookie;

import { useState, useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
import Input from "../Input/Input";
import Cookie from "../Cookie/Cookie";

function Form_contact() {
    
   const [isAccepted, setIsAccepted] = useState(false);

    useEffect(() => {
        const cookieConsent = localStorage.getItem('cookieConsent')
        if (cookieConsent === 'true') {
            setIsAccepted(true);
        }
    }, [])


    // const captchaKey = import.meta.env.VITE_CAPTCHA_KEY;
    const form = useRef();
    const [messageStatus, setMessageStatus] = useState(null);
    const [isVerified, setIsVerified] = useState(false);


    // const handleRecaptchaChange = () => {
    //     setIsVerified(true);
    // };

    const sendEmail = (e) => {
        e.preventDefault();

        // if (!isVerified) {
        //     alert("reCAPTCHA not verified");
        //     return;
        // }

        emailjs.sendForm('outlook','service_oiiiip2', e.target, 'nCRGPcDkCx3-_lmRg')
        .then(
          (response) => {
            console.log('SUCCESS!', response.status);
            setMessageStatus('success');
            setIsVerified(false);
          },
          (error) => {
            console.log('FAILED...', error.text);
            setMessageStatus('error');
            setIsVerified(false);
          },
        )
        .finally(() => {
          setTimeout(() => {
            setMessageStatus(null);
            form.current.reset();
          }, 2000);
        });
    };


    const handleAccept = () => {
        setIsAccepted(true);
        // Stocke le consentement aux cookies dans le stockage local
        localStorage.setItem('cookieConsent', 'true');
    };
    
      const handleRefuse = () => {
        setIsAccepted(false);
        // Supprime le consentement aux cookies du stockage local
        localStorage.removeItem('cookieConsent');
    };


    return (
        <>
            <section id="contact" className="article">
                <div className="contact">
                    <div className="contact__me">
                        <h2>Contactez-Moi</h2>
                        <p></p>
                    </div>
                    <div className="contact__form">
                        <h2>Formulaire de contact</h2>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="container-form">
                                <div className="input-container">
                                    <Input className="border-radius padding-8" text="Name" autoComplete="Name" name="user_name" placeholder="Votre nom" type="text" required disabled={!isAccepted} />
                                </div>
                                <div className="input-container">
                                    <Input className="border-radius padding-8" text="Email" autoComplete="Email" name="user_email" placeholder="Votre adresse mail" type="email"  required disabled={!isAccepted}/>
                                </div>
                                <div className="input-container">
                                    <Input  className="message-input border-radius padding-8" text="Message" autoComplete="Message" name="Message" placeholder="Votre message" required htmlFor="Message" textarea disabled={!isAccepted} />
                                </div>
                                <div>
                                    <button className={`border-radius margin-16 btn-width form-btn ${!isAccepted ? 'disabled' : ''}`} id="form-btn" type="submit" disabled={!isAccepted} style={{ opacity: isAccepted ? 1 : 0.5 }}>
                                        {isAccepted ? "Envoi" : "Non disponible (Acceptez les cookies)"}
                                    </button>
                                </div>
                                <div>
                                    {/* <ReCAPTCHA sitekey={captchaKey} onChange={handleRecaptchaChange} /> */}
                                </div>
                            </div>
                        </form>
                        {messageStatus === 'success' && <p className='message message__green'>Votre message à été envoyé avec succès.</p>}
                        {messageStatus === 'error' && <p className='message message__red'>Erreur dans l'envoi du message, réessayez plus tard.</p>}
                    </div>
                </div>
            </section>
            <Cookie onAccept={handleAccept} onRefuse={handleRefuse} />
        </>
    )
}

export default Form_contact
import React from 'react';

import '../styles/Contact.sass';
import Headline from '../components/Headline.js';
import headlineImage from '../images/headline-pic2.jpg';

import GithubIcon from '../images/icons/footer/github.svg';
import LinkedinIcon from '../images/icons/footer/linkedin.svg';
import EmailIcon from '../images/icons/contact/envelope.svg';
import PDFIcon from '../images/icons/contact/document-pdf.svg';
import PDFFILE from '../images/icons/contact/CV.pdf';


const ContactPage = () => {
    return (
    <div id='Contact'>
        <Headline imageSrc={headlineImage} showAdditionalDiv={false} />
        <div className="contact-page">
            <h1>Kontaktinformation</h1>
            <p>
                Tack för ditt intresse. Om du är intresserad av nyskapande webblösningar och vill diskutera framtida projekt, idéer eller bara vill säga hej, är detta rätt plats. Med en passion för teknologisk innovation och användarcentrerad design, ser jag fram emot att utforska hur vi kan samarbeta för att skapa något enastående. Jag strävar efter att svara inom en arbetsdag.
            </p>
            
            <div className="social-links">
                <a href="mailto:rafal.chorazewicz@rafaldev.se">
                    <img src={EmailIcon} alt="E-post" />
                </a>
                <a href="https://github.com/Rafalskky" target="_blank" rel="noopener noreferrer">
                    <img src={GithubIcon} alt="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/rafal-chorazewicz-050886184/" target="_blank" rel="noopener noreferrer">
                    <img src={LinkedinIcon} alt="LinkedIn" />
                </a>
            </div>

            <div className="resume-download">
                <p>
                    För en detaljerad överblick av min erfarenhet och färdigheter, vänligen se mitt CV.
                </p>
                <a href={PDFFILE} download="Mitt CV">
                    <img src={PDFIcon} alt='Ladda ner CV' />
                </a>
            </div>

            <div className="personal-pitch">
                <p>
                    I varje projekt jag tar mig an strävar jag efter att kombinera teknisk precision med kreativ frihet. Att skapa digitala upplevelser som inte bara löser problem, utan också berikar användarens vardag, är min största motivation.
                </p>
            </div>
        </div>
    </div>
    );
};

export default ContactPage;


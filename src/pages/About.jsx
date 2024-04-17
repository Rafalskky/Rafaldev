import React from 'react';
import KUTE from 'kute.js';


import Headline from '../components/Headline';
import ME from '../images/me.jpg';
import headlineImage from '../images/headline-pic3.jpg'; 


//images
import nextjs from '../images/icons/next.js.svg';
import react from '../images/icons/react.svg';
import html5 from '../images/icons/html.svg';
import css3 from '../images/icons/css.svg';
import webpack from '../images/icons/webpack.svg';
import nodejs from '../images/icons/nodejs.svg';
import sass from '../images/icons/sass.svg';
import typescript from '../images/icons/typescript.svg';
import prisma from '../images/icons/prisma.svg';


import '../styles/About.sass';



const nextjsRef = React.useRef(null);
const reactRef = React.useRef(null);
const htmlRef = React.useRef(null);
const cssRef = React.useRef(null);
const webpackRef = React.useRef(null);
const nodejsRef = React.useRef(null);
const sassRef = React.useRef(null);
const typescriptRef = React.useRef(null);
const prismaRef = React.useRef(null);

const AboutPage = () => (
  React.useEffect(() => {
    // Array of all refs
    const icons = [nextjsRef, reactRef, htmlRef, cssRef, webpackRef, nodejsRef, sassRef, typescriptRef, prismaRef];
  
    icons.forEach((icon, index) => {
      KUTE.fromTo(
        icon.current, 
        { path: '0% 0%' }, 
        { path: '100% 100%' },
        { duration: 1000, delay: index * 100 }
      ).start();
    });
  }, []),
  

  
  <div id='About'>
    <Headline imageSrc={headlineImage} showAdditionalDiv={false} />
    
    <section className="intro-section">
      <div className="intro-content">
        <img src={ME} alt="Your Picture" />
        <p>
          Som en passionerad front-end utvecklare specialiserar jag mig på att skapa dynamiska och effektiva React-applikationer, förbättrade med Next.js för överlägsen SEO och snabbare laddningstider. Min resa inom teknik omfattar flera domäner, inklusive webbutveckling, animation, samt UI och UX-design, där jag har byggt många projekt. Utöver kodning finner jag balans i meditation, läsning och att hålla mig aktiv. Med filosofin “Ett sund själ i en sund kropp” kombinerar jag teknisk skicklighet med en helhetssyn på livet.
        </p>
      </div>
    </section>


    {/* Tech Stack Section */}
    <section className="tech-stack-section">
      <ul className="tech-stack-list">
        <li><img ref={nextjsRef} src={nextjs} alt='Next.js' /></li>
        <li><img ref={reactRef} src={react} alt="React" /></li>
        <li><img ref={htmlRef} src={html5} alt="HTML5" /></li>
        <li><img ref={cssRef} src={css3} alt="CSS3" /></li>
        <li><img ref={webpackRef} src={webpack} alt="Webpack" /></li>
        <li><img ref={nodejsRef} src={nodejs} alt="Node.js" /></li>
        <li><img ref={sassRef} src={sass} alt="Sass" /></li>
        <li><img ref={typescriptRef} src={typescript} alt="TypeScript" /></li>
        <li><img ref={prismaRef} src={prisma} alt="Prisma" /></li>
      </ul>

    </section>


    {/* Education Section */}
    <section className="education-section">
      <h2>Utbildning</h2>
      <div className="education-info">
        <p>Teknikprogrammet, IT-gymnasiet, Uppsala - Dec 2015 till Jun 2018</p>
        <p>Spelprogrammering, BTH Karlskrona - Aug 2018 till Maj 2021</p>
      </div>
    </section>


    {/* Work Experience Section */}
    <section className="work-experience-section">
      <h2>Arbetslivserfarenheter</h2>
      <div className="job-entry">
        <h3>Frontend utvecklare</h3>
        <p>Brixo - Maj 2020 till December 2021</p>
        <p>Arbetade med front-end utveckling och bidrog till att förbättra användarupplevelsen.</p>
      </div>
      <div className="job-entry">
        <h3>Lärare inom teknik</h3>
        <p>Klara Södra - December 2021 till Maj 2023</p>
        <p>Undervisade i teknikrelaterade ämnen och bidrog till elevers tekniska kunskapsutveckling.</p>
      </div>
      <div className="job-entry">
        <h3>Frilans webbutvecklare</h3>
        <p>Frilans - December 2021 till Oktober 2023</p>
        <p>Utförde projektbaserad webbutveckling för diverse klienter.</p>
      </div>
      <div className="job-entry">
        <h3>Frontend utvecklare</h3>
        <p>Marknadsinformation - Oktober 2023 till Pågående</p>
        <p>Ansvarig för front-end utveckling och förbättring av webbapplikationer.</p>
      </div>
    </section>

  </div>
);

export default AboutPage;

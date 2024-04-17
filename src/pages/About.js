import React from 'react';
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

import schoolImage from '../images/school/BTH.jpeg';
import schoolLogo from '../images/school/school-logo.png'


import '../styles/About.sass';

const preloadedImages = [
  new Image(),
  new Image(),
  new Image(),
  new Image(),
  new Image(),
  new Image(),
  new Image(),
  new Image(),
  new Image(),
  new Image(),
  new Image(),
  new Image(),
];

// Set the src for each image
preloadedImages[0].src = ME;
preloadedImages[1].src = headlineImage;
preloadedImages[2].src = nextjs;
preloadedImages[3].src = react;
preloadedImages[4].src = html5;
preloadedImages[5].src = css3;
preloadedImages[6].src = webpack;
preloadedImages[7].src = nodejs;
preloadedImages[8].src = sass;
preloadedImages[9].src = typescript;
preloadedImages[10].src = prisma;
preloadedImages[11].src = schoolImage;

const AboutPage = () => (
  
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
        <li><img src={nextjs} alt='Next.js' /></li>
        <li><img src={react} alt="React" /></li>
        <li><img src={html5} alt="HTML5" /></li>
        <li><img src={css3} alt="CSS3" /></li>
        <li><img src={webpack} alt="Webpack" /></li>
        <li><img src={nodejs} alt="Node.js" /></li>
        <li><img src={sass} alt="Sass" /></li>
        <li><img src={typescript} alt="TypeScript" /></li>
        <li><img src={prisma} alt="Prisma" /></li>
      </ul>
    </section>


    <section className="education-section">
      <h2>Utbildning</h2>
      <h3>Spelprogrammering</h3>
      <p>Blekinge Tekniska Högskola</p>
        <div className="logo-container">
        </div>
      <div className="education-info">
        <div className="school-info">
          <img src={schoolLogo} alt="Logo" className="logo" />
          <img src={schoolImage} alt="School" className="school-image" />
        </div>
      </div>
    </section>

    {/* Work Experience Section */}
    <section className="work-experience-section">
      <h2>Arbetslivserfarenheter</h2>
      <div className="job-entry">
        <h3>Frontend utvecklare</h3>
        <p>Brixo - Maj 2020 till December 2021</p>
        <p>Arbete med front-end utveckling och bidrog till att förbättra användarupplevelsen.</p>
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

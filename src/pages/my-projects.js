import React from 'react';
import Headline from '../components/Headline.js';
import Showcase from '../components/ProjectShowcase.js';

import headlineImage from '../images/headline-pic4.jpg';

import perfomancePic1 from '../images/myprojects/perfomance.png';
import rafaldev from '../images/myprojects/rafaldev.png';

import KDEperformance from '../images/myprojects/KDE-performance.png';
import KDEside from '../images/myprojects/krystiansdigitaleducation.png';


import marknadsinformationperformance from '../images/myprojects/marknadsinformation-performence.png';
import marknadsinformation from '../images/myprojects/marknadsinformation.png';
 

import '../styles/My-projects.sass';

const MyProjects = () => {
    return (
        <div id='MyProject'>
            <Headline imageSrc={headlineImage} showAdditionalDiv={false} />
            <h1>Några projekt jag har byggt</h1>
            <Showcase
                title="RafalDev"
                description="Jag har självständigt utvecklat UI och UX för detta projekt, vilket är byggt med React, Babel och Webpack. Detta säkerställer enastående stabilitet och snabba laddningstider."
                imageSrc={rafaldev}
                performancePic={perfomancePic1}
                stack={["React", "Babel", "Webpack", "Sass"]}
            />
            {/* Repeat for other projects */}
            <Showcase
                title="Krystians Digital Education"
                description="Projekt där jag hade några dagar på mig att skapa både designen och sedan skapa sidorna. De starkaste delarna av detta projekt kanske inte är prestandan, men snabbheten och strukturen i projektet."
                imageSrc={KDEside}
                performancePic={KDEperformance}
                stack={["HTML", "CSS", "JavaScript"]}
            />
            <Showcase
                title="Marknadsinformation"
                description="Detta är ett projekt som jag utförde på min tidigare anställning. Jag arbetade i nära samarbete med en designer som ansvarade för utformningen, medan min roll var att utveckla och bygga webbsidorna."
                imageSrc={marknadsinformation}
                performancePic={marknadsinformationperformance}
                stack={["HTML", "CSS", "JavaScript"]}
            />
            <div className='test-description'>
                <p>
                    Alla tester utfördes med Chrome DevTool Extention: Lighthouse.
                </p>
            </div>
        </div>
    );
};

export default MyProjects;

import React from 'react';

import TechItem from '../components/Techitem.js';
import Headline from '../components/Headline.js';
import FormSubmission from '../components/Form-Subbmission.js';
import headlineImage from '../images/headline-pic1.jpg';

import '../styles/HomePage.sass';

const HomePage = () => {
    return (
        <div>
            <Headline imageSrc={headlineImage} showAdditionalDiv={true} />
            <div id="quotes-wrapper">
                <h1>Vad Säger Folk</h1>
            </div>
            <div id="quotes-container">
                <div className="quotes">
                    <p>
                        Rafals expertis inom webbutveckling är imponerande. Hans innovativa lösningar har bidragit väsentligt till framgången för våra projekt.
                    </p>
                </div>
                <div className="quotes">
                    <p>
                        Rafals kunskap inom webbutveckling är beundransvärd. Han har med sina nyskapande lösningar spelat en stor roll i våra projekts framgång.
                    </p>
                </div>
                <div className="quotes">
                    <p>Att arbeta med Rafal var inspirerande. Han tillförde kreativitet, entusiasm och effektivitet till vårt projekt</p>
                </div>
                <div className="quotes">
                    <p>
                        Rafals engagemang och färdigheter inom front-end utveckling har varit värdefulla för vårt team. Hans känsla för detaljer är imponerande.
                    </p>
                </div>
            </div>
            <TechItem />
            <FormSubmission />
        </div>
    );
};

export default HomePage;

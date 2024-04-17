import React, { useState, useEffect, useRef } from 'react';
import KUTE from 'kute.js';
import '../styles/TechItem.sass';


import iconNode from '../images/icons/nodejs.svg'; 
import iconJavascript from '../images/icons/javascript.svg';
import iconReact from '../images/icons/react.svg';
import iconWebpack from '../images/icons/webpack.svg';
import iconBabel from '../images/icons/babel.svg';
import iconSass from '../images/icons/sass.svg';

const TechItem = ({ icon, title, description }) => {
    const [isHovered, setIsHovered] = useState(false);
    const titleRef = useRef(null);

    // KUTE.js text animation effect
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const textEffect = KUTE.fromTo(
                        titleRef.current,
                        { text: '' },
                        { text: title },
                        { duration: 1500, easing: 'easingCubicOut' }
                    );
                    textEffect.start();
                    observer.disconnect(); // Stop observing after the animation
                }
            },
            { threshold: 0.1 } // Trigger when at least 10% of the item is visible
        );

        if (titleRef.current) {
            observer.observe(titleRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [title]);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <div className="tech-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={icon} alt={`${title} logotyp`} className="tech-icon" />
            <h3 ref={titleRef}>{title}</h3>
            <p className={`description ${isHovered ? 'expanded' : ''}`}>{description}</p>
        </div>
    );
};


// TechInfo Component
const TechInfo = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef(null);
    const itemRefs = Array.from({ length: 6 }, () => useRef(null));

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const index = itemRefs.findIndex(ref => ref.current === entry.target);
                        console.log(`Item index: ${index}, is intersecting: ${entry.isIntersecting}`);
                        setActiveIndex(index);
                    }
                });
            },
            { 
                root: containerRef.current, 
                threshold: 0.5, 
                rootMargin: '-70px' // Adjust as needed
            }
        );

        itemRefs.forEach(ref => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, [itemRefs]);

    const scrollToItem = (index) => {
        const container = containerRef.current;
        let scrollTarget;

        
        const containerRect = container.getBoundingClientRect();
        const itemRect = itemRefs[index].current.getBoundingClientRect();
        scrollTarget = itemRect.left + container.scrollLeft - containerRect.left - containerRect.width / 2 + itemRect.width / 2;
    
    
        container.scroll({
            left: scrollTarget,
            behavior: 'smooth'
        });
    
        setActiveIndex(index);
    };
    
    
    

    const techItems = [
        { icon: iconJavascript, title: 'JavaScript', description: 'Kärnprogrammeringsspråket som används i denna applikation. Det är högnivå, ofta kompilerat i realtid, och följer ECMAScript-specifikationen. JavaScript är en av de grundläggande teknologierna på World Wide Web och används av majoriteten av webbplatserna.' },
        { icon: iconReact, title: 'React', description: '(inklusive React DOM): Ett JavaScript-bibliotek för att skapa användargränssnitt genom komponenter. Gör det möjligt att effektivt bygga och hantera komplexa UI-strukturer.' },
        { icon: iconWebpack, title: 'Webpack', description: 'En statisk modulpaket för moderna JavaScript-applikationer. Det bygger ett beroendegraf från en eller flera startpunkter och kombinerar sedan varje modul som ditt projekt behöver till en eller flera buntar.' },
        { icon: iconBabel, title: 'Babel', description: 'En JavaScript-kompilator som låter dig använda nästa generations JavaScript idag. Det omvandlar nya JavaScript-språkfunktioner till en äldre version som webbläsare kan förstå.' },
        { icon: iconNode, title: 'Node.js', description: 'En server-sida körning som exekverar JavaScript utanför webbläsare, med hjälp av Chromes V8-motor. Det möjliggör backend-utveckling med JavaScript, känt för effektivitet och skalbarhet i webbapplikationer.' },
        { icon: iconSass, title: 'Sass', description: 'Ett förbehandlingskriptspråk som tolkas eller kompileras till CSS. Det utökar funktionerna hos CSS, vilket gör stilmallar mer underhållbara, temabaserade och utbyggbara.' }
    ];


    const preloadedImages = [
        new Image(),
        new Image(),
        new Image(),
        new Image(),
        new Image(),
        new Image(),
    ];
    
    // Set the src for each image
    preloadedImages[0].src = iconJavascript;
    preloadedImages[1].src = iconReact;
    preloadedImages[2].src = iconWebpack;
    preloadedImages[3].src = iconBabel;
    preloadedImages[4].src = iconNode;
    preloadedImages[5].src = iconSass;
    
    useEffect(() => {
        // Preload the images
        preloadedImages.forEach(image => {
            image.onload = () => {
                // The image has been loaded and cached by the browser
            };
        });
    }, []);
    


    return (
        <div className="tech-info">
            <h1>Denna webbplats byggdes med hjälp av:</h1>
            <div className="tech-container" ref={containerRef}>
                {techItems.map((item, index) => (
                    <div key={index} className="tech-item-container" ref={itemRefs[index]}>
                        <TechItem
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                        />
                    </div>
                ))}
            </div>
            <div className="dot-indicators">
                    {techItems.map((_, idx) => (
                        <span
                            key={idx}
                            className={`dot ${idx === activeIndex ? 'active' : ''}`}
                            onClick={() => scrollToItem(idx)}
                        ></span>
                    ))}
                </div>
        </div>
    );
};

export default TechInfo;
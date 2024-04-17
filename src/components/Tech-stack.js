import React from 'react';
import '../styles/TechStack.sass';

import iconNode from '../images/icons/nodejs.svg'; 
import iconJavascript from '../images/icons/javascript.svg';
import iconReact from '../images/icons/react.svg';
import iconWebpack from '../images/icons/webpack.svg';
import iconBabel from '../images/icons/babel.svg';
import iconSass from '../images/icons/sass.svg';

const TechStack = () => (
    <div className="tech-info">
    <h1>This website was built using:</h1>
    <div className="tech-container">
        <div className="tech-item">
            <img src={iconJavascript} alt="JavaScript logo" className="tech-icon" />
            <p>JavaScript: The core programming language used in this application. It's high-level, often just-in-time compiled, and conforms to the ECMAScript specification. JavaScript is one of the core technologies of the World Wide Web and is used by the majority of websites.</p>
        </div>
        <div className="tech-item">
            <img src={iconReact} alt="React logo" className="tech-icon" />
            <p>React (including React DOM): A declarative, efficient, and flexible JavaScript library for building user interfaces. It allows the composition of complex UIs from small and isolated pieces of code called “components”. React DOM provides methods for interacting with the DOM, making it an essential part of using React in web applications.</p>
        </div>
        <div className="tech-item">
            <img src={iconWebpack} alt="Webpack logo" className="tech-icon" />
            <p>Webpack: A static module bundler for modern JavaScript applications. It builds a dependency graph from one or more entry points and then combines every module your project needs into one or more bundles, which are static assets to serve your content from.</p>
        </div>
        <div className="tech-item">
            <img src={iconBabel} alt="Babel logo" className="tech-icon" />
            <p>Babel: A JavaScript compiler that lets you use next generation JavaScript today. It transforms new JavaScript language features into an older version that browsers can understand.</p>
        </div>
        <div className="tech-item">
            <img src={iconNode} alt="Node logo" className="tech-icon" />
            <p>Node.js is a server-side runtime that executes JavaScript outside browsers, using Chrome's V8 engine. It enables backend development with JavaScript, known for efficiency and scalability in web applications.</p>
        </div>
        <div className="tech-item">
            <img src={iconSass} alt="Sass logo" className="tech-icon" />
            <p>Sass: A pre-processor scripting language interpreted or compiled into CSS. It extends the capabilities of CSS, making stylesheets more maintainable, themable, and extendable.</p>
        </div>
    </div>
</div>    
);
  

export default TechStack;

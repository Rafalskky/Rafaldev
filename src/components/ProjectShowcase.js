import React, { useState } from 'react';

const ProjectShowcase = ({ imageSrc, title, description, performancePic, stack }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="ProjectShowcase">
            <div className="project-image"
                 onMouseEnter={() => setIsHovered(true)}
                 onMouseLeave={() => setIsHovered(false)}>
                <img src={imageSrc} alt={title} loading='lazy' />
            </div>
            <div className={`project-info ${isHovered ? 'hovered' : ''}`}>
                <h2 className="project-title">{title}</h2>
                <p className="project-description">{description}</p>
                <div className="performance">
                    <img src={performancePic} alt="performance" />
                </div>
                <div className="stack">
                    <ul>
                        {stack.map(item => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default ProjectShowcase;

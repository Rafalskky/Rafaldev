import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const WaveAnimation = () => {
  const wavePath1Ref = useRef(null);
  const wavePath2Ref = useRef(null);
  const wavePath3Ref = useRef(null);

  useEffect(() => {
    const waveAnimation = (path, amplitude, frequency) => {
      const length = path.getTotalLength();
      const points = [];

      // Create points along the path
      for (let i = 0; i < length; i++) {
        const point = path.getPointAtLength(i);
        points.push({ x: point.x, y: point.y, originY: point.y });
      }

      gsap.to(points, {
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        modifiers: {
          y: function(y, target) {
            const index = points.indexOf(target);
            // Adjust this formula to achieve the desired wave effect
            return target.originY + Math.sin((index / frequency) + gsap.globalTimeline.time()) * amplitude;
          }
        },
        onUpdate: function() {
          let newPath = "M";
          points.forEach((point, index) => {
            newPath += (index === 0 ? '' : 'L') + point.x + ',' + point.y;
          });
          path.setAttribute('d', newPath);
        }
      });
    };

    if (wavePath1Ref.current && wavePath2Ref.current && wavePath3Ref.current) {
      waveAnimation(wavePath1Ref.current, 20, 100); // Adjust amplitude and frequency
      waveAnimation(wavePath2Ref.current, 15, 100);
      waveAnimation(wavePath3Ref.current, 10, 100);
    }
  }, []);

  return (
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <defs>
        <linearGradient id="purpleGradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stop-color="rgb(130, 60, 200)" stop-opacity="1" />
          <stop offset="100%" stop-color="rgb(255, 130, 170)" stop-opacity="1" />
        </linearGradient>
        <linearGradient id="aquaGradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stop-color="rgb(20, 200, 210)" stop-opacity="1" />
          <stop offset="100%" stop-color="rgb(80, 240, 190)" stop-opacity="1" />
        </linearGradient>
      </defs>
      <path ref={wavePath1Ref} fill="url(#purpleGradient)" opacity="0.25" d="M0,0V46.29..."></path>
      <path ref={wavePath2Ref} fill="url(#aquaGradient)" opacity="0.5" d="M0,0V15.81..."></path>
      <path ref={wavePath3Ref} fill="url(#purpleGradient)" opacity="0.95" d="M0,0V5.63..."></path>
    </svg>
  );
};

export default WaveAnimation;

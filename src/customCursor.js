import React, { useEffect, useRef } from 'react';
import { TweenMax } from 'gsap';
import './customCursor.css';

const CustomCursor = () => {
  const bigBallRef = useRef(null);
  const smallBallRef = useRef(null);

  useEffect(() => {
    const onMouseMove = (e) => {
      TweenMax.to(bigBallRef.current, 0.4, {
        x: e.clientX - 5,
        y: e.clientY - 5,
      });

      TweenMax.to(smallBallRef.current, 0.1, {
        x: e.clientX - 5,
        y: e.clientY - 7,
      });
    };

    const onMouseHover = () => {
      TweenMax.to(bigBallRef.current, 0.3, {
        scale: 1.7,
      });
    };

    const onMouseHoverOut = () => {
      TweenMax.to(bigBallRef.current, 0.3, {
        scale: 1,
      });
    };

    const hoverables = document.querySelectorAll('a');
    document.body.addEventListener('mousemove', onMouseMove);

    for (let i = 0; i < hoverables.length; i++) {
      hoverables[i].addEventListener('mouseenter', onMouseHover);
      hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
    }

    return () => {
      document.body.removeEventListener('mousemove', onMouseMove);

      for (let i = 0; i < hoverables.length; i++) {
        hoverables[i].removeEventListener('mouseenter', onMouseHover);
        hoverables[i].removeEventListener('mouseleave', onMouseHoverOut);
      }
    };
  }, []);

  return (
    <div className="cursor">
      <div className="cursor__ball cursor__ball--big" ref={bigBallRef}>
        <svg height="40" width="40">
          <circle cx="20" cy="20" r="20" strokeWidth="0"></circle>
        </svg>
      </div>
      <div className="cursor__ball cursor__ball--small" ref={smallBallRef}>
        <svg height="10" width="10">
          <circle cx="5" cy="5" r="4" strokeWidth="0"></circle>
        </svg>
      </div>
    </div>
  );
};

export default CustomCursor;

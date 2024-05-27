import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

function AutoTypingText() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developer",'Frontent Developer', 'React Developer'],
      typeSpeed: 50, 
      backSpeed: 25, 
      backDelay: 1000, 
      startDelay: 500, 
      loop: true, 
      showCursor: true, 
      cursorChar: '|', 
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return  <span ref={el} style={{color:"red"}}/>
}

export default AutoTypingText;

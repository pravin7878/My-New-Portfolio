// src/components/AnimatedComputer.js
import React from 'react';
import Lottie from 'react-lottie';
import animationData from './computerAnimation.json';

export const AnimatedComputer = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

// export default AnimatedComputer;

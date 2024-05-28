import { Text } from '@chakra-ui/react';
import React from 'react';
import { FaHandPaper } from 'react-icons/fa';

function WavingHand() {
  return (
    <div className="waving-hand" style={{ fontSize: '50px',color:"Yellow" }}>
      {/* <FaHandPaper  style={{ animation: 'wave 2s infinite' }} /> */}
      <Text  style={{ animation: 'wave 2s infinite'}}>👋🏼</Text>
      <style>
        {`
          @keyframes wave {
            0% { transform: rotate(0deg); }
            10% { transform: rotate(-10deg); }
            20% { transform: rotate(12deg); }
            30% { transform: rotate(-10deg); }
            40% { transform: rotate(9deg); }
            50% { transform: rotate(0deg); }
            100% { transform: rotate(0deg); }
          }
          .waving-hand {
            display: inline-block;
            transform-origin: 70% 70%;
          }
        `}
      </style>
    </div>
  );
}

export default WavingHand;

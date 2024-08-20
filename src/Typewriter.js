import React, { useState, useEffect } from 'react';

function TypewriterEffect() {
  const [text, setText] = useState('');
  const message = 'WE ARE SAE';
  const typingSpeed = 150; // milliseconds

  useEffect(() => {
    let index = 0;

    const type = () => {
      if (index < message.length) {
        setText((prev) => prev + message[index]);
        index++;
        setTimeout(type, typingSpeed);
      }
    };

    type();

    // Cleanup function to reset the text state when the component unmounts
    return () => setText('');
  }, []);

  return <h1 style={{ color: 'red', fontSize: '48px' }}>{text}</h1>;
}

export default TypewriterEffect;


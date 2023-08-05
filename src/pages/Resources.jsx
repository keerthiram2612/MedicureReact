import React from 'react'
import { useState } from 'react';


export default function Resources() {
  const [isListening, setIsListening] = useState(false);
  const [recognizedText, setRecognizedText] = useState('');
  const handleStartListening = () => {
    setIsListening(true);

    const recognition = new window.webkitSpeechRecognition(); // Use the Web Speech API
    recognition.continuous = true;
    recognition.onresult = (event) => {
      const transcript = event.results[event.results.length - 1][0].transcript;
      setRecognizedText(transcript);
    };

    recognition.start();
  };

  const handleStopListening = () => {
    setIsListening(false);
  };

  return (
    <div>
       <div>
        <button onClick={handleStartListening} disabled={isListening}>
          Start Listening
        </button>
        <button onClick={handleStopListening} disabled={!isListening}>
          Stop Listening
        </button>
      </div>
      <div>
        <p>Listening: {isListening ? 'ON' : 'OFF'}</p>
        <p>Recognized Text: {recognizedText}</p>
      </div>
    </div>
  )
}


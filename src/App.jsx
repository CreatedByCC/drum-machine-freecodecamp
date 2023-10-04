import React,{ useEffect, useState} from 'react';

import { sounds } from './assets/sounds';

import './App.css';



function App() {    
  const [activeSound, setActiveSound] = useState('');
  
  useEffect(() => {   // to play a sound when a key on the keyboard is pressed
    document.addEventListener('keydown', (e) => {
      const clip = sounds.find((clip) => clip.key === e.key.toUpperCase())    // find the sound with the key that matches our keyboard press 
      playSound(clip)   //pass playSound an object that was saved to clips
    })
  }, [activeSound.key])
  
  function playSound(selector) {    //pass it a sound object
    const audio = document.getElementById(selector.key);  // select the sound based on the key
    audio.play();   // to play a sound when the btn is clicked
    setActiveSound(selector);   // to display the description we need to assign the obj to state

  }

    return (
    <div className='container'>
      <h1>Beat Da Drum!</h1>
      <div id='drum-machine'>
        <div id="drum-pads">
          {sounds.map((sound) => (
            <button className='drum-pad' key={sound.key} id={sound.description} onClick={() => playSound(sound)}>
              {sound.key}
              <audio className='clip' id={sound.key} src={sound.url}></audio>
            </button>
          ))}
        </div>
        <div id='display'>{activeSound.description}</div>
      </div>
    </div>
  )
}

export default App

import React, { useState } from 'react';
import Catalog from './Catalog';
import Friends from './Friends';
import Friend from './Friend';
function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null);
  const [isLooping, setIsLooping] =useState(false);

  const toggleAudio = () => {
    const audio = document.getElementById('backgroundAudio') as HTMLAudioElement;
    if (audio.paused) {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.error('Failed to start audio playback:', error);
      });
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };
  
  const toggleLoop = () => {  
    const audio = document.getElementById('backgroundAudio') as HTMLAudioElement;
    audio.loop = !isLooping; // Toggle the loop attribute
    setIsLooping(!isLooping);
    };
 
  
  
  const playSelectedTrack = (src: string, title:string) => {
    const audio = document.getElementById('backgroundAudio') as HTMLAudioElement;
    audio.src = src;
    audio.play();
    setIsPlaying(true);
    setSelectedTrack(title);
  };

  const NowPlaying =(title:string) => {
    const audio= document.getElementById('backgroundAudio') as HTMLAudioElement;
    audio.title = title;
  };

  const [isFriendClicked, setIsFriendClicked] = useState(true);

    
    const toggleFriendPage = () => {
      setIsFriendClicked(prevState => !prevState);
  };

  return (
   <>
   <div className='MusicContainer'>
      <div className='Catalog'>
      <Catalog onTrackSelect={playSelectedTrack}/>

      </div>
      <div className='Friends' id='Friends' onClick={toggleFriendPage}>{isFriendClicked ?<Friends/>:<Friend/>}</div>
        
      
   
  
    <div className='Player'>
      <div className='UserPlaying'>
        <p>User Image</p>
        <h1>Collins Munene</h1>
      </div>
      <div className="PlayerImg" onClick={toggleAudio}>
        <img src="/a0dca7bc21d8768ed011f00d5da1857d.gif" alt='xo'/>
        </div>
        <p>{selectedTrack}</p>
    <div className='Playing'>

    
      <button>{"<<<"}</button>
      <button onClick={toggleAudio}>{isPlaying ? 'II' : 'i>'}</button>
      <button>{">>>"}</button>
      <button onClick={toggleLoop}>{isLooping? '!L' : 'L'}</button>
    
      <audio id="backgroundAudio" autoPlay loop={true}>
        <source  type="audio/mpeg"  />
        <p>Your browser does not support the audio element.</p>
      </audio>
      
  
    </div>
    </div>
    </div>
    </>

  );
}

export default BackgroundMusic;

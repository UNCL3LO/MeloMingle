import React from 'react';
import useAudioPlayer from './useAudioPlayer';

interface PlayerProps {
    isPlaying: boolean;
    toggleAudio: () => void;
    isLooping: boolean;
    toggleLoop: () => void;
    selectedTrack: { title: string } | null;
    setCurrentlyPlayingTitle: (title: string) => void;
}

function Player({ isPlaying, toggleAudio, isLooping, toggleLoop, selectedTrack, setCurrentlyPlayingTitle }:PlayerProps) {
    return (
        <div className='Player'>
            <div className="PlayerImg" onClick={toggleAudio}>
                <img src="/a0dca7bc21d8768ed011f00d5da1857d.gif" alt='xo'/>
            </div>
            {selectedTrack && (
                <div className="NowPlaying">
                    <p>{selectedTrack.title}</p>
                </div>
            )}
            <div className='Playing'>
                <button>{"<<<"}</button>
                <button onClick={toggleAudio}>{isPlaying ? 'II' : 'i>'}</button>
                <button>{">>>"}</button>
                <button onClick={toggleLoop}>{isLooping ? '!L' : 'L'}</button>
            </div>
        </div>
    );
}

export default Player;


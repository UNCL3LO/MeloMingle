import { useState } from 'react';

function useAudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [selectedTrack, setSelectedTrack] = useState(null);
    const [isLooping, setIsLooping] = useState(false);

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

    const playSelectedTrack = (src: string) => {
        const audio = document.getElementById('backgroundAudio') as HTMLAudioElement;
        audio.src = src;
        audio.play();
        setIsPlaying(true);
    };

    const setCurrentlyPlayingTitle = (title: string) => {
        const audio = document.getElementById('backgroundAudio') as HTMLAudioElement;
        audio.title = title;
    };

    return {
        isPlaying,
        toggleAudio,
        isLooping,
        toggleLoop,
        selectedTrack,
        playSelectedTrack,
        setCurrentlyPlayingTitle,
    };
}

export default useAudioPlayer;

import { useState } from 'react';
interface Track {
    title: string;
    src: string;
}

function Catalog({ onTrackSelect }: { onTrackSelect: (src: string, title: string) => void }) {
    const musicTracks : Track[]=[
        
        { title: "Track 1", src: "/no-copyright-for-her-chill-upbeat-summel-travel-vlog-and-ig-music-202298.mp3"},
        { title: "Track 2", src: "/better-day-186374.mp3"},
        { title: "Track 3", src: "/no-copyright-for-her-chill-upbeat-summel-travel-vlog-and-ig-music-202298.mp3"},
        { title: "Track 4", src: "/better-day-186374.mp3"},
        { title: "Track 5", src: "/no-copyright-for-her-chill-upbeat-summel-travel-vlog-and-ig-music-202298.mp3"},
        { title: "Track 6", src: "/no-copyright-for-her-chill-upbeat-summel-travel-vlog-and-ig-music-202298.mp3"},
        { title: "Track 7", src: "/no-copyright-for-her-chill-upbeat-summel-travel-vlog-and-ig-music-202298.mp3"},
        { title: "Track 8", src: "/no-copyright-for-her-chill-upbeat-summel-travel-vlog-and-ig-music-202298.mp3"},
        { title: "Track 9", src: "/no-copyright-for-her-chill-upbeat-summel-travel-vlog-and-ig-music-202298.mp3"},
        { title: "Track 10", src: "/no-copyright-for-her-chill-upbeat-summel-travel-vlog-and-ig-music-202298.mp3"},
        { title: "Track 11", src: "/no-copyright-for-her-chill-upbeat-summel-travel-vlog-and-ig-music-202298.mp3"},
        { title: "Track 12", src: "/no-copyright-for-her-chill-upbeat-summel-travel-vlog-and-ig-music-202298.mp3"},
        { title: "Track 13", src: "/no-copyright-for-her-chill-upbeat-summel-travel-vlog-and-ig-music-202298.mp3"},
        { title: "Track 14", src: "/no-copyright-for-her-chill-upbeat-summel-travel-vlog-and-ig-music-202298.mp3"},

]

const [currentTrackIndex, setCurrentTrackIndex] = useState<number | null>(null);

const playTrack = (index: number) => {
    setCurrentTrackIndex(index);
    // Logic to play the track at index
};

const handleTrackSelect = (src: string,title: string) => {
    onTrackSelect(src,title);
  };

return (
    <>
   
    <div className="Catalog">
    <div className='PlaylistTitle'><h2>Your Playlist</h2></div>
        {musicTracks.map((track: Track, index: number) => (
            <div key={index}>
            
                <button onClick={() => handleTrackSelect(track.src, track.title)}><div>{track.title}</div></button>
            </div>
        ))}
    </div>
    </>
);
}

export default Catalog;
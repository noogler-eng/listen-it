import { useState, useRef, useEffect } from "react";
import { Play } from 'lucide-react';
import { Pause } from 'lucide-react';



export default function Tracks({track, currentTrack, setCurrentTrack}: any){

    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);
    
    const handlePlayPause = () => {
        if (isPlaying && currentTrack === track.name) {
          setIsPlaying(false);
          audioRef.current?.pause();
          setCurrentTrack("");
        } else {
            if (currentTrack !== track.name) {
                setCurrentTrack(track.name);
            }
            setIsPlaying(true);
            audioRef.current?.play();
        }
    };

    useEffect(() => {
        if (currentTrack !== track.name && isPlaying) {
            setIsPlaying(false);
            audioRef.current?.pause();
        }
    }, [currentTrack]);

    return <div className="flex bg-[#1db954] p-4 rounded-3xl text-white gap-4 bg-gradient-to-r from-[#1db954] via-[#191414] to-[#191414]">
        <img src={track.album.images[0].url || track.album.images[0].url || track.album.images[0].url } className="h-max-36 w-36 rounded-xl"/>
        <div className="flex w-full justify-between">
            <div className="">
                <div className="font-extrabold text-white underline">{track.name}</div>
                <div className="flex justify-between">
                    <div>{track.popularity}</div>
                </div>
                <div className="flex flex-col justify-between">
                    <div>album: {track.album.name}</div>
                    <div>released: {track.album.release_date}</div>
                    <div>total tracks: {track.album.total_tracks}</div>
                </div>
            </div>
            <div className="place-self-end">
                <audio ref={audioRef} src={track.preview_url}/>
                <button onClick={handlePlayPause} >
                    {isPlaying ? <Play /> : <Pause/>}
                </button>
            </div>
        </div>
    </div>
}
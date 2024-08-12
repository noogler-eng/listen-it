import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LayoutDashboard } from "lucide-react";
import Tracks from "../components/Tracks";

export default function Playlist() {
  
    const [error, setError] = useState(null);
    const [data, setData]: any = useState(null);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();
    const [currentTrack, setCurrentTrack] = useState("");


  
    useEffect(() => {
        setLoading(true);
        axios.get(`${import.meta.env.VITE_URL}/me/playlists`, {
            headers: {
            authorization: localStorage.getItem("access_token"),
            },
        })
        .then((res) => {
            const incomingData = res.data.msg;
            setData(incomingData);
            setLoading(false);
        })
        .catch((error) => {
            setError(error);
            return { error: error, data: null };
        });
    }, []);

    if (error) {
        console.log(error);
        return <div>error</div>;
    }

    if (loading) {
        return <div>loading...</div>;
    }

    const playlistData = data?.map((playlist: any, index: any)=>{
        return <div key={index} className=" flex flex-col gap-8 items-center">
            <div>
                <p className="text-3xl items-center">{playlist.name}</p>
            </div>
            <div className="flex gap-2 justify-center flex-wrap w-full">
                {console.log(playlist)};
                {playlist.tracks.items.length > 0 ? playlist.tracks.items.map((track: any, index: any) => {
                    return (<Tracks track={track.track} currentTrack={currentTrack} setCurrentTrack={setCurrentTrack} key={index}/>)}): null}
            </div>
        </div>
    })

    return <div className="flex flex-col p-12 items-center">
         <button
        className="px-4 border-2 rounded-xl py-1 text-sm flex gap-1 items-center"
        onClick={() => {
            navigate("/dashboard");
        }}><LayoutDashboard size={16}/>/dashboard</button>
        <h2 className="my-12 text-3xl font-mono">My Playlists</h2>
        <div className=" flex flex-col gap-8 font-extrabold w-5/6">
            {playlistData}
        </div>
    </div>;
}

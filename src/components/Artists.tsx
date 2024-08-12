import { useState, useEffect } from "react"
import axios from "axios";
// import Avtaar from "./Avtaar";

export default function Artists(){
    
    const [data, setData]: any = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios.get(`${import.meta.env.VITE_URL}/me/artists`, {
            headers: {
                authorization: localStorage.getItem("access_token"),
            },
        })
        .then((res) => {
            const artists = res.data.msg;
            setData(artists);
            setLoading(false);
        })
        .catch((error) => {
            setError(error);
            return { error: error, data: null };
        });
    }, []);

    if(error || data == null){
        return <div> error in followers fetching... </div>
    }

    if(isLoading){
        return <div>loading in followers side....</div>
    }

    const artists = data?.items.map((artist: any, index: any)=>{
        const colors = ['#1b263b', '#8e7dbe', '#0a9396', '#ffa69e', '#84a98c'];
        var color = colors[Math.floor(Math.random()*colors.length)];
        return <img src={artist.images[0].url} height={100} width={100} key={index} className="rounded-full" style={{boxShadow: `5px 5px 1px ${color}`}}/>
    })

    return <div className="h-full p-12 flex flex-col items-center"> 
        <h2 className="text-2xl mb-5 font-extrabold">My Top {20} Artists</h2>
        <div className="flex flex-wrap gap-5 w-4/6">
            {artists}
        </div>
    </div>
}
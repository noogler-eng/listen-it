import { useState, useEffect } from "react"
import axios from "axios";
import Avtaar from "./Avtaar";

export default function MyFollowers(){
    
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios.get("http://localhost:8080/me/follower", {
            headers: {
                authorization: localStorage.getItem("access_token"),
            },
        })
        .then((res) => {
            const followers = res.data.msg;
            setData(followers);
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

    console.log(data);
    const follower = data.artists.items.map((artist: any, index: any)=>{
        return <Avtaar data={artist} key={index}/>
    })

    return <div className="h-full p-12 flex flex-col items-center"> 
        <h2 className="my-12 text-3xl font-mono">My favourite artists</h2>
        <div className="flex gap-3 flex-col items-center w-full">
            {follower}
        </div>
    </div>
}
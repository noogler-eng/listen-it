import axios from "axios";
import { useEffect, useState } from "react";

export default function Playlist() {
  
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        setLoading(true);
        axios.get("http://localhost:8080/me/playlists", {
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

    console.log(data);

    return <div>playlist incomming</div>;
}

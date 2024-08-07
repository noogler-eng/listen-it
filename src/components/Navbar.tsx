import { useEffect, useState } from "react";
import axios from "axios";
import Login from "./Login";


export default function Navbar(){

    const [data, setData] = useState({
        img: '',
        height: 0,
        width: 0,
        username: '',
        email: ''
    });

    // sending body in the get request is bad approach
    useEffect(()=>{
        const access_token = localStorage.getItem('access_token');
        axios.get('http://localhost:8080/me', {
            headers: {
                authorization: access_token
            }
        }).then((res)=>{
            const incomingData = res.data.msg;
            setData({
                img: incomingData?.images[0].url,
                height: incomingData?.images[0].height,
                width: incomingData?.images[0].width,
                username: incomingData?.display_name,
                email: incomingData?.email
            })
        }).catch((error)=>{
            console.log(error);
        })
    }, [])

    console.log(data);


    return <div className="p-4 flex justify-between items-center font-mono">
        <div className="text-4xl">listen-it</div>
        <div className="flex gap-2 p-2 rounded-lg text-sm">
            { data.username ? <img src={data?.img} height={60} width={60} className="rounded-full border p-1"/> : null }
            { data.username ? <div>
                <h3>{data.username}</h3>
                <p>{data.email}</p>
            </div> : null}
        </div>
        <Login/>
    </div>
}
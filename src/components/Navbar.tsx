import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userAtom } from "../store/atoms/userAtom";
import axios from "axios";
import Login from "./Login";


export default function Navbar(){

    const [value, setvalue] = useRecoilState(userAtom);

    // sending body in the get request is bad approach
    useEffect(()=>{
        const access_token = localStorage.getItem('access_token');
        axios.get(`${import.meta.env.VITE_URL}/me`, {
            headers: {
                authorization: access_token
            }
        }).then((res)=>{
            const incomingData = res.data.msg;
            console.log(incomingData);
            setvalue({
                profilepic: incomingData?.images[0]?.url,
                username: incomingData?.display_name,
                email: incomingData?.email
            })
        }).catch((error)=>{
            console.log(error);
        })
    }, [])


    return <div className="p-4 flex justify-between items-center font-mono">
        <div className="text-4xl">listen-it</div>
        <div className="flex gap-2 items-center">
            <div className="flex gap-2 rounded-lg text-sm bg-gray-200 rounded-xl">
                { value.username ? <img src={value?.profilepic} height={60} width={60} className="rounded-full border p-1"/> : null }
            </div>
            <Login/>
        </div>
    </div>
}
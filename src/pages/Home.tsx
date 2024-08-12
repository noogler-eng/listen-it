import Login from "../components/Login"
import { useRecoilState } from "recoil"
import { userAtom } from "../store/atoms/userAtom";
import { useNavigate } from "react-router-dom";
import { LayoutDashboard } from 'lucide-react';

export default function Home(){
        
    const [value, setValue] = useRecoilState(userAtom);
    const naviagte = useNavigate();
    
    
    return <div className="font-mono h-full w-full flex flex-col items-center justify-center p-12 gap-8">
        <h2 className="text-6xl bg-gradient-to-r from-green-500 to-black bg-clip-text text-transparent font-bold">my-spotify</h2>
        <p className="text-center text-sm w-4/6">this is let's connect which is connected to actual spotifi's and my backend api's 
            for realtime data. all the changes in my spotify application is continously replicating here.
            i have done this using spoitfy web api's and some my backend skills (noob skills 👀). backend was deployed
            on render while this frontend was deployed on vercel.
        </p>
        <div className="flex flex-col gap-3">
            <p className="text-2xl">some features 🚀🚀</p>
            <ul className="list-disc text-sm">
                <li>get my top followed artists</li>
                <li>get my top listened tracks</li>
                <li>get my top litened artists</li>
                <li>search and listen any song of any artist</li>
            </ul>
        </div>
        <div className="border-2 border-gray-200 h-1 w-4/6"></div>
        <div className="flex flex-col gap-2">
            {value.username ? <button className="px-4 border-2 rounded-xl py-1 text-sm" onClick={()=>{
                localStorage.removeItem('access_token');
                setValue({
                    profilepic: "",
                    username: "",
                    email: ""
                })
            }}>logout</button> : <Login/>}
            {value.username ? <div>
                <button className="px-4 border-2 rounded-xl py-1 text-sm flex gap-1 items-center" onClick={()=>{
                    naviagte('/dashboard');
                }}><LayoutDashboard size={16}/>/dashboard</button>
            </div> : null}
        </div>
        <div className="border-2 border-gray-200 h-1 w-4/6"></div>
        <p className="text-center text-sm w-4/6">
            this is my tech stack i used in this is recoil for state managment, react for framework, typescript for highly typed language, 
            lucid-icons for icons, spotifi web api's, cUR's, postman, tailwindcss for styling, express, nodejs etc.
        </p>
    </div>
}
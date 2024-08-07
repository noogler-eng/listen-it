import { useRecoilValue } from "recoil"
import { userAtom } from "../store/atoms/userAtom"
import { useNavigate } from "react-router-dom";
import { Search } from 'lucide-react';
import Artists from "../components/Artists";


export default function Dashboard(){
    
    const value = useRecoilValue(userAtom);
    const navigate = useNavigate();

    if(value.email === ''){
        navigate('/');
    }
    


    return <div className="font-mono h-full w-full flex flex-col items-center justify-center p-12 gap-8">
        <p className="text-center">spotify is not just only for listening, its also sharing our <br/><span className="text-green-600 font-extrabold underline text-xl font-mono"><i>taste</i></span></p>
        <div className="border-2 border-gray-200 h-1 w-4/6"></div>
        <div className="flex flex-col gap-2">
            <button className="px-4 border-2 rounded-xl py-1 text-sm" onClick={()=>{
                navigate('/topfollowers')
            }}>my-top-followers</button>
            <button className="px-4 border-2 rounded-xl py-1 text-sm" onClick={()=>{
                navigate('/topListen')
            }}>my-top-listen</button>
            <button className="px-4 border-2 rounded-xl py-1 text-sm" onClick={()=>{
                navigate('/playlist')
            }}>my-playlist</button>
            <button className="px-4 border-2 rounded-xl py-1 text-sm flex gap-1 items-center" onClick={()=>{
                navigate('/searchArtistSong')
            }}><Search size={15}/> search-any-artist-song</button>
        </div>
        <div className="border-2 border-gray-200 h-1 w-4/6"></div>
        <div>
            <Artists/>
        </div>
    </div>
}
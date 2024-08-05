import { useEffect } from "react";


export default function User(){


    const getAccessToken = async()=>{
        
    }

    const getProfile = async() => {
        let accessToken = localStorage.getItem('access_token') || "";
        const response = await fetch('https://api.spotify.com/v1/me', {
          headers: {
            Authorization: 'Bearer ' + accessToken
          }
        });
        const data = await response.json();
        console.log(data);
    }


    useEffect(()=>{
        getAccessToken();
    }, [])
      
    
    getProfile();
    
    return <div>
        user..
    </div>
}
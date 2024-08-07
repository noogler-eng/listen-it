import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userAtom } from "../store/atoms/userAtom";
import { useSetRecoilState } from "recoil";

export default function Login() {
  
  const navigate = useNavigate();
  const setValue = useSetRecoilState(userAtom);

  useEffect(() => {
    if(!localStorage.getItem('access_token')){
      const urlParams = new URLSearchParams(window.location.search);
      const accessToken = urlParams.get("access_token");

      if (accessToken) {
        localStorage.setItem("access_token", accessToken);
        navigate("/"); 
      }
    }
  }, [navigate]);

  return (
    <div>
      {localStorage.getItem("access_token") ? (
        <button
          onClick={() => {
            localStorage.removeItem("access_token");
            setValue({
              profilepic: '',
              username: '',
              email: ''
            })
            navigate('/');
          }} className="px-4 border-2 rounded-xl py-1 text-sm">Logout</button>) : (
        <button
          onClick={() => {
            window.location.href = "http://localhost:8080/login";
          }} className="px-4 border-2 rounded-xl py-1 text-sm">Login</button>
      )}
    </div>
  );
}

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

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
            navigate("/") }} className="border-2 rounded-xl p-1">
          Logout
        </button>
      ) : (
        <button
          onClick={() => {
            window.location.href = "http://localhost:8080/login";
          }} className="border-2 rounded-xl p-1">Login</button>
      )}
    </div>
  );
}

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import User from "./pages/User";
import Login from "./components/Login";
import "./index.css";

function App() {
  return (
    <div className="w-sceen text-white bg-[#191414] min-h-screen">
      <BrowserRouter>
        <div>
          <Login/>
        </div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

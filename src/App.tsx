import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Landing from "./pages/Landing";
import User from "./pages/User";
import Navbar from "./components/Navbar";
import "./index.css";
import MyFollowers from "./components/MyFollowers";

function App() {
  return (
    <div className="w-sceen text-white bg-[#191414] min-h-screen">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<MyFollowers />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

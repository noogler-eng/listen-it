import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import TopTracks from "./pages/TopTracks";
import MyFollowers from "./pages/MyFollowers";
import Playlist from "./pages/Playlist";
import Home from "./pages/Home";
import "./index.css";

function App() {
  return (
    <div className="w-sceen min-h-screen">
      <RecoilRoot>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/topListen" element={<TopTracks/>} />
            <Route path="/topfollowers" element={<MyFollowers/>} />
            <Route path="/playlist" element={<Playlist/>} />

          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;

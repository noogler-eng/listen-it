import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import TopTracks from "./pages/TopTracks";
import MyFollowers from "./pages/MyFollowers";
import Playlist from "./pages/Playlist";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import "./index.css";

function App() {
  return (
    <div className="w-sceen min-h-screen bg-[#191414] text-white">
      <RecoilRoot>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/topListen" element={<TopTracks/>} />
            <Route path="/topfollowers" element={<MyFollowers/>} />
            <Route path="/playlist" element={<Playlist/>} />
            <Route path="/searchArtistSong" element={<Landing/>} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;

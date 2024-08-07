import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
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
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;

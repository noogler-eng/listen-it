import { useState, useEffect } from "react";
import Tracks from "../components/Tracks";
import { useNavigate } from "react-router-dom";
import { LayoutDashboard } from "lucide-react";
import axios from "axios";

export default function TopTracks() {
  const [data, setData]: any = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [currentTrack, setCurrentTrack] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_URL}/me/tracks`, {
        headers: {
          authorization: localStorage.getItem("access_token"),
        },
      })
      .then((res) => {
        const tracks = res.data.msg;
        setData(tracks.items);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        return { error: error, data: null };
      });
  }, []);

  if (error || data == null) {
    return <div> error in followers fetching... </div>;
  }

  if (isLoading) {
    return <div>loading in followers side....</div>;
  }

  const TopTracks =
    data.length > 0
      ? data.map((track: any, index: any) => {
          return (
            <Tracks
              track={track}
              currentTrack={currentTrack}
              setCurrentTrack={setCurrentTrack}
              key={index}
            />
          );
        })
      : null;

  return (
    <div className="h-full p-12 flex flex-col items-center gap-8">
      <button
        className="px-4 border-2 rounded-xl py-1 text-sm flex gap-1 items-center"
        onClick={() => {
            navigate("/dashboard");
        }}><LayoutDashboard size={16}/>/dashboard</button>
        <h2 className="text-2xl mb-5 font-extrabold">
            My Top {20} listened songs
        </h2>
      <div className="flex flex-col gap-2 w-4/6">{TopTracks}</div>
    </div>
  );
}

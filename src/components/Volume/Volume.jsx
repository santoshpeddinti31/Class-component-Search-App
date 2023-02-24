import axios from "axios";
import React from "react";
import { useStateProvider } from "../../utils/StateProvider";
import "../Volume/Volume.css";
export default function Volume() {
  const [{ token }] = useStateProvider();
  const setVolume = async (e) => {
    await axios.put(
      "https://api.spotify.com/v1/me/player/volume",
      {},
      {
        params: {
          volume_percent: parseInt(e.target.value),
        },
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );
  };
  return (
    <div className="volume_cont">
      <input type="range" onMouseUp={(e) => setVolume(e)} min={0} max={100} />
    </div>
  );
}

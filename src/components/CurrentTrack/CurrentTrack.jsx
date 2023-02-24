import React, { useEffect } from "react";
import "../CurrentTrack/CurrentTrack.css";
import axios from "axios";
import { useStateProvider } from "../../utils/StateProvider";
import { reducerCases } from "../../utils/Constants";
export default function CurrentTrack() {
  const [{ token, currentPlaying }, dispatch] = useStateProvider();
  useEffect(() => {
    const getCurrentTrack = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      if (response.data !== "") {
        const currentPlaying = {
          id: response.data.item.id,
          name: response.data.item.name,
          artists: response.data.item.artists.map((artist) => artist.name),
          image: response.data.item.album.images[2].url,
        };
        dispatch({ type: reducerCases.SET_PLAYING, currentPlaying });
      } else {
        dispatch({ type: reducerCases.SET_PLAYING, currentPlaying: null });
      }
    };
    getCurrentTrack();
  }, [token, dispatch]);
  return (
    <div>
      {currentPlaying && (
        <div className="track">
          <div className="track_image">
            <img src={currentPlaying.image} alt="currentPlaying" />
          </div>
          <div className="track_info">
            <h4 className="track_name">{currentPlaying.name}</h4>
            <h6 className="track_artists">
              {currentPlaying.artists.join(", ")}
            </h6>
          </div>
        </div>
      )}
    </div>
  );
}

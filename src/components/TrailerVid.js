import { useState, useEffect, useRef } from "react";
import YouTube from "react-youtube";

const TrailerVid = ({ getMovieName }) => {
  const [movieName, setMovieName] = useState("Barbie trailer");
  const [youtubeVidId, setYoutubeVidId] = useState("");
  const [videoFound, setVideoFound] = useState(false);

  const ytDataApiKey = "AIzaSyCub0hwMI2hUOwQRLlWb_E0bqvcaPe3oTY";

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${ytDataApiKey}&q=${getMovieName}%20trailer&part=snippet&maxResults=1&type=video`
    )
      .then((res) => {
        if (!res.ok) {
          throw Error("Request failed");
        }
        return res.json();
      })
      .then((data) => {
        const videoId = data.items[0].id.videoId;
        if (videoId) {
          setYoutubeVidId(videoId);
          setVideoFound(true);
        }
      });
  }, []);

  // Youtube video player
  const [playYtVideo, setPlayYtVideo] = useState(0);
  const opts = {
    playerVars: {
      // Add any player options here
      autoplay: 1, // Auto-play the video
    },
  };

  return (
    <div className="trailer-video">
      <YouTube videoId={youtubeVidId} opts={opts} />
    </div>
  );
};

export default TrailerVid;

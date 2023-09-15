import { useState, useEffect, useRef } from "react";
import YouTube from "react-youtube";

const TrailerVid = ({getMovieName}) => {
  const [movieName, setMovieName] = useState("Barbie trailer");
  const [youtubeVidId, setYoutubeVidId] = useState("");
  const [videoFound, setVideoFound] = useState(false)

  const ytDataApiKey = "AIzaSyAnLj4wGAFKnLbx4zkHOGZqLv44Q9SriOs";

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${ytDataApiKey}&q=${movieName}%20trailer&part=snippet&maxResults=1&type=video`
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
          setYoutubeVidId(videoId) 
          setVideoFound(true)
        };
      });
  }, []);

    // Youtube video player
    const [playYtVideo, setPlayYtVideo] = useState(0)
    const opts = {
      playerVars: {
        // Add any player options here
        autoplay: playYtVideo, // Auto-play the video
      }
    }

  const [clickBanner, setClickBanner] = useState(false);
  const thumbnailElement = useRef();
  const handleThumbnailClick = () => {
    setClickBanner(true);
    thumbnailElement.current.style.display = "none";
    setPlayYtVideo(1)
  };

  return (
    <div className="trailer-video">
      {
        !clickBanner ? (
          <div className="thumbnailElement" onClick={handleThumbnailClick} ref={thumbnailElement}>
          <p>Test</p>
          {/* <img
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt="Video Thumbnail"
            className="thumbnail-image"
          /> */}
        </div>
        ) : (<YouTube videoId={youtubeVidId} opts={opts} />)
      }
    </div>
  );
};

export default TrailerVid;

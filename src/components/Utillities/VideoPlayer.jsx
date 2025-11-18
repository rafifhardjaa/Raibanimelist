"use client";
import Youtube from "react-youtube";
import { useState } from "react";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoPlay = () => {
    setIsOpen(prev => !prev);
  };

  const opts = {
    width: "300",
    height: "250"
  };

  const Player = () => {
    if (!youtubeId) {
      return (
        <div className="fixed bottom-5 right-12 bg-color-primary/80 text-color-light p-4 rounded">
          <button
            className="text-color-light float-right bg-color-accent/80 px-3 mb-2 rounded hover:bg-color-accent transition-all hover:text-color-dark"
            onClick={handleVideoPlay}
          >
            X
          </button>
          <p>Sorry, trailer is not available.</p>
        </div>
      );
    }

    return (
      <div className="fixed bottom-5 right-12">
        <button
          className="text-color-light float-right bg-color-primary/80 px-5 mb-2 rounded hover:bg-color-accent transition-all hover:text-color-dark"
          onClick={handleVideoPlay}
        >
          X
        </button>

        <Youtube
          videoId={youtubeId}
          opts={opts}
          onReady={(e) => e.target.pauseVideo()}
          onError={() => alert("Upss!, Terjadi kesalahan saat memuat video.")}
        />
      </div>
    );
  };

  const ButtonOpenTrailer = () => (
    <button
      className="fixed bottom-5 right-5 bg-color-primary/80 text-color-light px-5 py-3 text-xl rounded hover:bg-color-accent hover:text-color-dark transition-all"
      onClick={handleVideoPlay}
    >
      Lihat Trailer
    </button>
  );

  return isOpen ? <Player /> : <ButtonOpenTrailer />;
};

export default VideoPlayer;

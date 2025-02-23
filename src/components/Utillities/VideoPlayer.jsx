"use client";
import Youtube from "react-youtube";
import { useState } from "react";


const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoPlay = () => {
    setIsOpen(prevState => !prevState);
  }
  const option = {
    width: "300",
    height: "250"
  }
  const Player = () => {
    return (
      <div className="fixed bottom-5 right-12">
        <button className="text-color-light float-right bg-color-primary/80 px-5 mb-2 rounded hover:bg-color-accent transition-all hover:text-color-dark" onClick={handleVideoPlay}>X</button>
        <Youtube videoId={youtubeId} onReady={(event) => event.target.pauseVideo()}
          opts={option}
          onError={() => alert("Uppss!!, Video is broken, try another one!")} />
      </div>
    );
  }

  const ButtonOpenTrailer = () => {
    return (
      <button className="fixed bottom-5 right-5 bg-color-primary/80 text-color-light px-5 py-3 text-xl rounded hover:bg-color-accent hover:text-color-dark transition-all" onClick={handleVideoPlay}>Lihat Trailer</button>
    )
  }
  return isOpen ? <Player /> : <ButtonOpenTrailer />
}

export default VideoPlayer;
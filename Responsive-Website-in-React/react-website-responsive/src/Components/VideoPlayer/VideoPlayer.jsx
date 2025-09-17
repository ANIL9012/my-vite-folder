import React, { useRef } from "react";
import "./VideoPlayer.css";

import University_video from "../../assets/University-video.mp4";



function VideoPlayer({playState, setPlayState}) {

  const player = useRef()

  const closePlayer = (e) => {
    if(e.target === player.current){
      setPlayState(false);
    }
  }

  return (
    <>
      <div className={`video-player ${playState?'':'hide'}`} ref={player}
      onClick={closePlayer}>
        <video src={University_video} autoPlay muted controls></video>
      </div>
    </>
  );
}

export default VideoPlayer;

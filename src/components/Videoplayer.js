import React, { useRef } from 'react'
import ReactPlayer from 'react-player'
import '../styles/videoPlayer.css'
const VIDEO_PATH = '../video/video.MP4';
function Videoplayer() {
    const playerRef = useRef(null);
    return (
        <div className='videoPlayerWrapper'>
        <div className='videoPlayer'>
          <ReactPlayer
            ref={playerRef}
            autoplay
            url='/videos/video.MP4'
            width='100%'
            height='100%'
            controls={true}
          />
        </div>
      </div>
    )
}

export default Videoplayer
import React, { useState, useRef } from 'react';
import { useTheme } from '@mui/material/styles';

import deepuVid from './Asserts/Deepuupanayanam.mp4';
import FullscreenIcon from '@mui/icons-material/Fullscreen';

export default function CardInv() {
    const theme = useTheme();
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);



    const togglePlayPause = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };


    const toggleFullScreen = () => {
        if (videoRef.current) {
            if (videoRef.current.requestFullscreen) {
                videoRef.current.requestFullscreen();
            } else if (videoRef.current.mozRequestFullScreen) {
                videoRef.current.mozRequestFullScreen();
            } else if (videoRef.current.webkitRequestFullscreen) {
                videoRef.current.webkitRequestFullscreen();
            } else if (videoRef.current.msRequestFullscreen) {
                videoRef.current.msRequestFullscreen();
            }
        }
    };
    return (
        <div style={{ backgroundColor: "#12181E" }}><button className=' btn btn-danger ms-auto  d-flex btn-lg' onClick={toggleFullScreen} style={{ backgroundColor: "#12181E", border: "none" }}><FullscreenIcon /></button>

            <div style={{
                height: '100%', overflow: 'hidden', backgroundColor: "#12181E",
                display: 'flex',
                justifyContent: 'start',
                alignItems: "start"
            }}>






                <video ref={videoRef} width="100%" height="100%" controls={false} autoPlay muted onClick={togglePlayPause}>
                    <source src={deepuVid} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div></div>
    );
}

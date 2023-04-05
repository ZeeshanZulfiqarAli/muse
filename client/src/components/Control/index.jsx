import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import { ReactComponent as VolumeHighSVG } from '../../icons/volume-high-solid.svg';
import { ReactComponent as VolumeXMark } from '../../icons/volume-xmark-solid.svg';

const Control = ({ showOverlayOnStart }) => {
    const [startStream, setStartStream] = useState(false);
    const [overlayClosed, setOverlayClosed] = useState(false);
    const hls = useRef();
    const videoRef = useRef();

    useEffect(() => {
        const url = `${process.env.REACT_APP_API_URL}/stream/playlist.m3u8`;

        if (startStream) {
            if (Hls.isSupported()) {
                hls.current = new Hls();
                hls.current.loadSource(url);
                hls.current.attachMedia(videoRef.current);
                videoRef.current.play();
            }
        } else if (hls.current) {
            hls.current.destroy();
        }
    }, [startStream]);

    const toggleStream = () => {
        setStartStream((s) => !s);
    };

    const startRadio = () => {
        toggleStream();
        closeOverlay();
    };

    const closeOverlay = () => {
        setOverlayClosed(true);
    };

    return (
        <>
            <button onClick={toggleStream} className="stream-play">
                {startStream ? <VolumeHighSVG /> : <VolumeXMark />}
            </button>
            <video id="video" autoPlay ref={videoRef} />
            {showOverlayOnStart && !overlayClosed && (
                <div className="overlay">
                    <h4 onClick={startRadio}>Click to start radio</h4>
                    <h5 onClick={closeOverlay}>No thanks</h5>
                </div>
            )}
        </>
    );
};

export default Control;

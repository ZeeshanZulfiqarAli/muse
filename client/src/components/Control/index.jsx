import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';

const Control = () => {
    const [startStream, setStartStream] = useState(false);
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

    return (
        <>
            <button onClick={toggleStream}>{startStream ? 'Stop' : 'Start'}</button>
            <video id="video" autoPlay ref={videoRef} />
        </>
    );
};

export default Control;

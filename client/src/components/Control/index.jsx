import React, {useEffect, useRef} from 'react';
import Hls from 'hls.js';

const Control = () => {
    const videoRef = useRef();
    // TODO: add button and support for stopping and resuming music
    // const [startStream, setStartStream] = React.useState(false);

    // const triggerChange = () => {
    //   setStartStream((_isStarted) => !_isStarted);
    // };

    useEffect(() => {
        const url = "http://0.0.0.0:5000/stream/playlist.m3u8"
        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(url);
            hls.attachMedia(videoRef.current);
        }
    }, []);

    return (
        <>
            {/* <button onClick={triggerChange}>{startStream ? 'Stop' : 'Start'}</button> */}
            <video id="video" controls autoPlay ref={videoRef} />
            {/* <video controls autoPlay name="test">
                <source src="http://0.0.0.0:5000/stream" type="audio/mpeg" />
            </video> */}
        </>
    );
};

export default Control;

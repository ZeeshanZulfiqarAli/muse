import React from 'react';

const Control = () => {
    // TODO: add button and support for stopping and resuming music
    // const [startStream, setStartStream] = React.useState(false);

    // const triggerChange = () => {
    //   setStartStream((_isStarted) => !_isStarted);
    // };

    return (
        <>
            {/* <button onClick={triggerChange}>{startStream ? 'Stop' : 'Start'}</button> */}
            <video controls autoPlay name="test">
                <source src="http://0.0.0.0:5000/stream" type="audio/mpeg" />
            </video>
        </>
    );
};

export default Control;

import { Suspense, useEffect, useState, useContext } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Model from '../Model';
import { SocketContext } from '../../contexts/SocketProvider';

export default function CanvasWrapper() {
    // const [lightStatus, setLightStatus] = useState(true);

    // const socket = useContext(SocketContext);

    // const handleLightChange = (isOn) => {
    //     socket.emit('light', isOn);
    //     setLightStatus(isOn);
    // };

    // useEffect(() => {
    //     socket.on('light', (isOn) => {
    //         setLightStatus(isOn);
    //     });

    //     return () => {
    //         // socket.emit('stop-stream');
    //     };
    // }, [socket]);

    return (
        <Model />
    );
}

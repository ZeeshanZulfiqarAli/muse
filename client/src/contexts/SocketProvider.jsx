import React from 'react';
// import { io } from 'socket.io-client';

export const SocketContext = React.createContext({});

const SocketProvider = ({ children }) => {
    // const socket = io('localhost:5000');
    const socket = {};

    return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
};

export default SocketProvider;

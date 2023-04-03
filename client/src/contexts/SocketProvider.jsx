import React from 'react';
// import { io } from 'socket.io-client';

export const SocketContext = React.createContext({});

const SocketProvider = ({ children }) => {
    // const socket = io(process.env.REACT_APP_API_URL);
    const socket = {};

    return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
};

export default SocketProvider;

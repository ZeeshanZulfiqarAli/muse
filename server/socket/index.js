import { Server } from 'socket.io';
import config from '../config.js';
import ioEvents from './events.js';

/**
 * Initialize Socket.io
 */
const init = (httpServer) => {
    const io = new Server(httpServer, {
        cors: {
            origin: config.clientOrigins[config.nodeEnv],
        },
    });

    // Define all Events
    ioEvents(io);

    return io;
};

export default init;

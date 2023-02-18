import { Server } from 'socket.io';
import config from '../config';
import ioEvents from './events';

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
};

export default init;

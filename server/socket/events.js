/**
 * Encapsulates all code for emitting and listening to socket events
 *
 */
const ioEvents = (io) => {
    io.on('connection', (socket) => {
        socket.on('light', (isOn) => {
            socket.broadcast.timeout(10000).emit('light', isOn, (err, res) => {});
        });
    });
};

export default ioEvents;

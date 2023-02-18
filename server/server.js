const express = require('express');
const cors = require('cors');
const { createServer } = require('http');
const Fs = require('fs');
const Path = require('path');
const Throttle = require('throttle');
const { ffprobeSync } = require('@dropb/ffprobe');
const { Server } = require('socket.io');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(cors());

const httpServer = createServer(app);

if (process.env.NODE_ENV === 'production') {
    // Have Node serve the files for our built React app
    app.use(express.static(path.resolve(__dirname, '../client/build')));
}

const io = new Server(httpServer, {
    cors: {
        // origin: 'http://localhost:5000'
        origin: '*',
    },
});

let sinks = new Map();

io.on('connection', (socket) => {
    socket.on('light', (isOn) => {
        socket.broadcast.timeout(10000).emit('light', isOn, (err, res) => {});
    });
});

const _getBitRate = (song) => {
    try {
        const bitRate = ffprobeSync(Path.join(process.cwd(), song)).format.bit_rate;
        return parseInt(bitRate);
    } catch (err) {
        console.error(err);
        return 320000; // reasonable default
    }
};

const MUSIC_DIRECTORY = './media';
const _getFilesList = () => {
    let files = fs.readdirSync(startPath);

    let filteredFiles = [];
    files.forEach((filename) => {
        const filestat = fs.lstatSync(filename);
        if (filestat.isDirectory() || filename.endswith('.mp3')) {
            filteredFiles.push(path.join(MUSIC_DIRECTORY, filename));
        }
    });

    return filteredFiles;
};

function startStreaming() {
    console.log('start');
    const songList = _getFilesList();
    let songIdx = 0;
    const _currentSong = songList[songIdx];

    const bitRate = _getBitRate(_currentSong);
    console.log('bitrate', bitRate);
    const songReadable = Fs.createReadStream(_currentSong);

    const throttleTransformable = new Throttle(bitRate / 8);
    throttleTransformable.on('data', (chunk) => _broadcastToEverySink(chunk));
    throttleTransformable.on('end', () => {
        console.log('stream data ended');
        startStreaming();
    });

    songReadable.pipe(throttleTransformable);
}

function _broadcastToEverySink(chunk) {
    for (const [, sink] of sinks) {
        sink.write(chunk);
    }
}

// app.get("/stream", function (req, res) {
//   const id = uuidv4();

//   const headers = {
//     "Cache-Control": "no-cache, no-store",
//     "Content-Type": "audio/mpeg",
//   };

//   res.writeHead(200, headers);
//   sinks.set(id, res);

//   req.on("close", () => {
//     sinks.delete(id);
//   });
// });

const port = process.env.PORT || 5000;
const server_host = process.env.YOUR_HOST || '0.0.0.0';

httpServer.listen(port, server_host, () => {
    // startStreaming();
    console.log(`Server running on ${server_host}:${port}`);
});

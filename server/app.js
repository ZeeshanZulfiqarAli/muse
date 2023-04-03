import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { createServer } from 'http';
import morgan from 'morgan';
import config from './config.js';
import errorHandler from './middleware/errorHandler.js';
import fourOhFour from './middleware/404.js';
import stream from './routes/stream.js';
// import initSocket from './socket/index.js';

const app = express();

const httpServer = createServer(app);
// const io = initSocket(httpServer);

// Apply most middleware first
// app.use(express.json())
// app.use(express.urlencoded({extended: true}))
app.use(
    cors({
        origin: config.clientOrigins[config.nodeEnv],
    }),
);
app.use(helmet());
app.use(morgan('tiny'));

// Apply routes before error handling
app.use('/stream', stream);

app.get('/hello', (req, res) => res.send('hello there'));

// Apply error handling last
app.use(fourOhFour);
app.use(errorHandler);

export default httpServer;

import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { createServer } from 'http';
import morgan from 'morgan';
import config from './config';
import errorHandler from './middleware/errorHandler';
import fourOhFour from './middleware/404';
import root from './routes/root';
import initSocket from './socket';

const app = express();

const httpServer = createServer();
initSocket(httpServer);

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
app.use('/', root);

// Apply error handling last
app.use(fourOhFour);
app.use(errorHandler);

export default app;

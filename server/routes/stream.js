import express from 'express';
import getStream from '../controllers/stream/getStream.js';
import compression from 'compression';

const stream = express.Router()

stream.use(compression());
stream.get('/playlist.m3u8', getStream)

export default stream
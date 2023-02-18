import app from './app';
import config from './config';

app.listen(config.port, config.host, () => {
    // startStreaming();
    console.log(`Server running on ${config.host}:${config.port}`);
});

import app from './app.js';
import config from './config.js';

app.listen(config.port, config.host, () => {
    // startStreaming();
    console.log(`Server running on ${config.host}:${config.port}`);
});

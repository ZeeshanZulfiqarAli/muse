import app from './app.js';
import config from './config.js';
import { startManifestGeneration } from './services/manifest.js';

app.listen(config.port, config.host, () => {
    // startStreaming();
    startManifestGeneration();
    console.log(`Server running on ${config.host}:${config.port}`);
});

import getManifest from '../../services/manifest.js';

const getStream = (req, res) => {

    const manifest = getManifest();

    res.setHeader('Content-Type', 'application/vnd.apple.mpegurl')
        .status(200)
        .send(manifest);
};

export default getStream;

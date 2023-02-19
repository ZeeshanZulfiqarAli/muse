import generateManifest from '../../services/manifest.js';

const getStream = (req, res) => {
    console.log('getstream');

    const manifest = generateManifest();

    res.setHeader('Content-Type', 'application/vnd.apple.mpegurl')
        .status(200)
        .send(manifest);
};

export default getStream;

import { getRandomMedia } from './db.js';

let manifest = '';
let CHUNK_DURATION = 10; // seconds
let FIRST_CHUNK_COUNT = 0;
let BUFFER = 15;
let mediaChunksData = [];
let currentMedia;
let interval;
let currentDate = new Date();

// TODO: cleanup this file
const generateManifest = async () => {
    let manifestArr = [
        '#EXTM3U',
        '#EXT-X-VERSION:3',
        `#EXT-X-TARGETDURATION:${CHUNK_DURATION}`
    ];

    if (mediaChunksData.length < BUFFER) {
        currentMedia = await getRandomMedia(currentMedia);
        
        // adding all the media chunks at once, we know that the chunk will start from 0.
        let i = 0;
        for (const duration of currentMedia.duration) {
            let segmentManifest = []
            if (i===0) {
                segmentManifest.push(`#EXT-X-DISCONTINUITY`);
            }
            currentDate = new Date(Number(currentDate) + Number(duration)*1000);
            const dateString = currentDate.toISOString().slice(0,-1)+'+00:00';
            segmentManifest.push(
                `#EXT-X-PROGRAM-DATE-TIME:${dateString}`,
                `#EXTINF:${duration},`,
                `${process.env.CHUNK_URL}/${currentMedia.name}${i}.ts`
            );
            mediaChunksData.push(segmentManifest);
            i++;
        }
    }
    FIRST_CHUNK_COUNT++;
    manifestArr.push(
        `#EXT-X-MEDIA-SEQUENCE:${FIRST_CHUNK_COUNT}`
    );

    for (let i = 0; i<Math.min(mediaChunksData.length,10); i++) {
        manifestArr.push(...mediaChunksData[i]);
    }
    
    mediaChunksData.splice(0, 1);

    manifest = manifestArr.join('\n');
};

export const startManifestGeneration = async () => {
    await generateManifest();

    interval = setInterval(() => {
        generateManifest()
    }, CHUNK_DURATION * 1000 * 0.9);
};

const getManifest = () => {
    return manifest;
};

export default getManifest;

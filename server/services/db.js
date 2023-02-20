import { MongoClient } from 'mongodb';
import config from '../config.js';

const client = new MongoClient(config.db.uri);

export const getRandomMedia = async (currentMedia) => {
    try {
        const database = client.db(config.db.name);
        const media = database.collection('media');
        const query = [
            {
                $match: {
                    $expr: {
                        $ne: ['$name', currentMedia?.name || ''],
                    },
                },
            },
            {
                $sample: {
                    size: 1,
                },
            },
        ];

        const randomMediaCursor = media.aggregate(query);
        const randomMedia = await randomMediaCursor.toArray();

        // TODO: check if we need await here as well
        return await randomMedia[0];
    } catch (e) {
        await client.close();
    }
};

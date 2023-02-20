import dotenv from 'dotenv';
dotenv.config();

/**
 * Pattern for config is:
 * key: process.env['KEY'] ?? default
 */
const config = {
    nodeEnv: process.env['NODE_ENV'] ?? 'development',
    port: process.env['PORT'] ?? 5000,
    host: process.env['HOST'] ?? '0.0.0.0',

    clientOrigins: {
        development: process.env['DEV_ORIGIN'] ?? '*',
        production: process.env['PROD_ORIGIN'] ?? 'none',
    },

    db: {
        name: process.env['DB_NAME'],
        uri: process.env['MONGO_CONNECTION']
    }
};

export default config;

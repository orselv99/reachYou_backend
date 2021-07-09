import express from 'express';
import config from './config';
import logger from './loaders/logger';

async function startServer() {
    const app = express();

    // loaders 실행
    await require('./loaders').default(app);

    // listening
    app.listen(config.port, () => {
        logger.info(`🔊 Server is listening on port: ${config.port}`);
    }).on('error', (error) => {
        logger.error(`${error}`);
        process.exit(1);
    });
};

startServer();
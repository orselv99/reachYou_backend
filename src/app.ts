import express from 'express';
import config from './config';
import Logger from './loaders/logger';

async function startServer() {
    const app = express();

    // loaders 실행
    await require('./loaders').default(app);

    // listening
    app.listen(config.port, () => {
        Logger.info(`🔊 Server is listening on port: ${config.port}`);
    })
    .on('error', (error) => {
        Logger.error(`${error}`);
        process.exit(1);
    });
};

startServer();
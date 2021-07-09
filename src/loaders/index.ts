import logger from './logger';
import dBConnectionLoader from './db';
import dependencyInjectorLoader from './dependencyInjector';
import expressLoader from './express'

export default async (app) => {
    // db connection
    const dbConnection = await dBConnectionLoader();
    logger.info('🔊 DB connected.');

    // dependency injector
    await dependencyInjectorLoader(dbConnection);
    logger.info('🔊 Dependency Injector loaded.');

    // express 설정
    await expressLoader(app);
    logger.info('🔊 Express loaded.');
}
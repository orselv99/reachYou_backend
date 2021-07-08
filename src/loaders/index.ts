import Logger from './logger';
import DBConnectionLoader from './db';
import DependencyInjectorLoader from './dependencyInjector';
import ExpressLoader from './express'

export default async (app) => {
    // db connection
    const dbConnection = await DBConnectionLoader();
    Logger.info('🔊 DB connected.');

    // dependency injector
    await DependencyInjectorLoader(dbConnection);
    Logger.info('🔊 Dependency Injector loaded.');

    // express 설정
    await ExpressLoader(app);
    Logger.info('🔊 Express loaded.');
}
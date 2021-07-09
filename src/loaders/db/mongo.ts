import { Db } from "mongodb";
import mongoose from "mongoose";
import config from '../../config'
import logger from '../../loaders/logger';

export default async (): Promise<Db> => {
    const uri = `${config.db.protocol}://${config.db.host}:${config.db.port}`;
    logger.info(uri);
    const result = await mongoose.connect(
        uri,
        {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        }
    );

    return result.connection.db;
}
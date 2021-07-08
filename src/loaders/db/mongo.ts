import { Db } from "mongodb";
import mongoose from "mongoose";
import config from '../../config'

export default async (): Promise<Db> => {
    const result = await mongoose.connect(
        config.db.uri, 
        {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        }
    );

    return result.connection.db;
}
import { createLogger, format, transports } from 'winston';  // https://github.com/winstonjs/winston
const { combine, timestamp, prettyPrint } = format;
import moment from 'moment';
import config from '../config';

const setTransports = (env: string) => {
    let result = [];
    if (env !== 'development') {
        result.push(new transports.Console());
    }
    else {
        result.push(new transports.Console());
        result.push(new transports.File({
            filename: `./log/${moment().format('YYYY-MM-DD')}`,
            level: 'warn',
        }));
    }

    return result;
}

const getOptions = (env) => {
    let result = {
        level: config.logs.level,
        format: combine(
            timestamp({
                format: 'YYYY-MM-DD HH:mm:ss',
            }),
            prettyPrint()
        ),
        transports: setTransports(process.env.NODE_ENV),
    }

    return result;
}

export default createLogger(getOptions(process.env.NODE_ENV));
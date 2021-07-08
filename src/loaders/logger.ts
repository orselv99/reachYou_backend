// https://github.com/winstonjs/winston
import { createLogger, format, transports } from 'winston';
const { combine, timestamp, prettyPrint } = format;
import moment from 'moment';
import config from '../config';

export default createLogger({
    // error > warn > info > http > verbose > debug > silly
    level: config.logs.level,
    format: combine(
        timestamp({
            format: 'YYYY-MM-DD HH:mm:ss',
        }),
        prettyPrint()
    ),
    transports: (config.run.mode === 'development') ? 
    // 개발
    [
        new transports.Console(),
    ] 
    : 
    // 운영
    [
        new transports.File({
            filename: `./log/${moment().format('YYYY-MM-DD')}.log`,
            level: 'warn',
        }),
    ]
});
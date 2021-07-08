// https://github.com/winstonjs/winston
import { createLogger, format, transports } from 'winston';
const { combine, timestamp, prettyPrint } = format;
import moment from 'moment';

export default createLogger({
    // error > warn > info > http > verbose > debug > silly
    level: 'debug',
    format: combine(
        timestamp({
            format: 'YYYY-MM-DD HH:mm:ss',
        }),
        prettyPrint()
    ),
    // TODO: process.env.NODE_ENV 없는경우 개발과 운영 구분할 것
    transports: (true) ? 
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
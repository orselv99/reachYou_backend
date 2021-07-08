import winston from 'winston';  // https://github.com/winstonjs/winston

let transports = [];
if (process.env.NODE_ENV !== 'development') {
    transports.push(new winston.transports.Console());
}
else {
    transports.push(new winston.transports.Console({
        format: winston.format.combine(
            winston.format.cli(),
            winston.format.splat(),
        ),
    }));
}

const LoggerInstance = winston.createLogger({
    level: '',
    levels: winston.config.npm.levels,
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss',
        }),
        winston.format.errors({
            stack: true,
        }),
        winston.format.splat(),
        winston.format.json()
    ),
    transports,
});

export default LoggerInstance;
// Bulletproof node.js project architecture 🛡️
// https://softwareontheroad.com/ideal-nodejs-project-structure/


import dotenv from 'dotenv';

const error = dotenv.config();
if (error.error) {
    throw new Error("⚠️ Couldn't find '.env' file");
}

export default {
    run: {
        mode: process.env.RUN_MODE,
    },
    port: parseInt(process.env.PORT, 10),
    logs: {
        // 로그레벨: { 'error', 'warn', 'info', 'http', 'verbose', 'debug', 'silly' }
        level: process.env.LOG_LEVEL,
    },
    db: {
        protocol: process.env.DB_PROTOCOL,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        connectionLimit: process.env.DB_CONNECTION_LIMIT,
    }
}
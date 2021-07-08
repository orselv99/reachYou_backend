import dotenv from 'dotenv';

const error = dotenv.config();
if (error.error) {
    throw new Error("⚠️ Couldn't find '.env' file");
}

export default {
    port: parseInt(process.env.PORT, 10),
    logs: {
        // 로그레벨: { 'error', 'warn', 'info', 'http', 'verbose', 'debug', 'silly' }
        level: process.env.LOG_LEVEL,
    }
}
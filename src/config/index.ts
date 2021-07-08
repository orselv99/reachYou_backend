import dotenv from 'dotenv';

const error = dotenv.config();
if (error.error) {
    throw new Error("⚠️ Couldn't find.env file");
}

export default {
    port: parseInt(process.env.PORT, 10),

}
import { config } from "dotenv";

config();

export const {
    PORT,
    MONGODB_URL,
    JWT_SECRET,
    PASSWORD,
    EMAIL,
    HOST
} = process.env;
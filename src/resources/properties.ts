import dotenv from "dotenv";

dotenv.config();

const DATABASE_USERNAME = process.env.DATABASE_USERNAME || "";
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || "";
const DATABASE_URL = `mongodb+srv://${DATABASE_USERNAME}:${DATABASE_PASSWORD}@aniichan.9j7vycp.mongodb.net/`;

const SERVER_PORT = process.env.SERVER_PORT
  ? Number(process.env.SERVER_PORT)
  : 8000;

export const properties = {
  database: {
    url: DATABASE_URL,
  },
  server: {
    port: SERVER_PORT,
  },
};

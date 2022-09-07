import mongoose from "mongoose";
import { properties } from "../resources/properties";
import { logger } from "../utils/logger";

export const connectToDB = () => {
  mongoose
    .connect(properties.database.url, { retryWrites: true, w: "majority" })
    .then(() => logger.info("Connected to DB"))
    .catch(error => console.log(error));
};

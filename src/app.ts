import express from "express";
import { connectToDB } from "./db/connectionToDB";
import { properties } from "./resources/properties";
import { logger } from "./utils/logger";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(properties.server.port, () => {
  logger.info(`Server's listening at port ${properties.server.port}`);
});

// Connect to Database
connectToDB();

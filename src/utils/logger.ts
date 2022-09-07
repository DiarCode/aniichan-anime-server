import { format, createLogger, transports } from "winston";

const { combine, timestamp, label, printf } = format;
const CATEGORY = "INFO";

//Using the printf format.
const customFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

export const logger = createLogger({
  level: "debug",
  format: combine(
    label({ label: CATEGORY }),
    timestamp({ format: "MM-DD-YYYY HH:MM:SS" }),
    customFormat
  ),
  transports: [new transports.Console()],
});

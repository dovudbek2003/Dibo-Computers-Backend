import * as dotenv from 'dotenv';
import { IConfig } from '../interfaces/index';

// Initialize env variable
dotenv.config();

export const config: IConfig = {
  serverPort: Number(process.env.SERVER_PORT),
  dbPort: Number(process.env.DB_PORT),
  dbName: process.env.DB_NAME,
  dbHost: process.env.DB_HOST,
  dbPassword: process.env.DB_PASSWORD,
  dbUsername: process.env.DB_USERNAME,
  jwtSecretKey: process.env.JWT_SECRET_KEY,
  jwtExpiredIn: process.env.JWT_EXPIRED_IN,
};

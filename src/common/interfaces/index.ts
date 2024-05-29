export interface IConfig {
  serverPort: number;
  dbPort: number;
  dbName: string;
  dbHost: string;
  dbPassword: string;
  dbUsername: string;
  jwtSecretKey: string;
  jwtExpiredIn: string;
}

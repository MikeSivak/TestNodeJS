import { Sequelize, Dialect } from "sequelize";
import * as dotenv from "dotenv";

dotenv.config();

const dbHost = process.env.HOST;
const dbUser = process.env.USER as string;
const dbPassword = process.env.PASSWORD;
const dbName = process.env.DB as string;
const dbDialect = process.env.DIALECT as Dialect;

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: dbDialect,
});

export default sequelizeConnection;
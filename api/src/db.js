import Sequelize from "sequelize";

import dotenv from "dotenv";

dotenv.config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_ROUTE, API_KEY } =
  process.env;

export const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_ROUTE}?apikey=${API_KEY}`,
  { logging: false }
);

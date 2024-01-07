import express from "express";
import dogsRoutes from './routes/server.routes.js'
import cors from 'cors'

const server = express();
server.options("*", cors());
server.use(express.json());
server.use(
  cors()
);

server.use(dogsRoutes)

export default server;
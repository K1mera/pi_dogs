import express from "express";
import dogsRoutes from './routes/server.routes.js'
import cors from 'cors'

const server = express();

server.use(express.json());
server.use(
  cors({
    origin: ["https://dogs-api-isdv.onrender.com"],
    methods: ["GET", "POST"],
  })
);

server.use(dogsRoutes)

export default server;
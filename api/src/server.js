import express from "express";
import dogsRoutes from './routes/server.routes.js'
import cors from 'cors'

const server = express();
server.options("*", cors());
server.use(express.json());
server.use(
  cors({
    origin: [
      "https://dogs-api-isdv.onrender.com",
      "http://localhost:5173",
      "https://65987dca3f31ad5d0a1d970f--eclectic-monstera-e53b46.netlify.app",
    ],
    methods: ["GET", "POST"],
  })
);

server.use(dogsRoutes)

export default server;
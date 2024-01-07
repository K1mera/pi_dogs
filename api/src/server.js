import express from "express";
import dogsRoutes from './routes/server.routes.js'
import cors from 'cors'

const server = express();
server.options("*", cors());
server.use(express.json());
server.use(
  cors(
  //   {
  //   origin: [
  //     "https://dogs-api-isdv.onrender.com",
  //     "http://localhost:5173",
  //     "https://659882d91b14f060e1b8dace--eclectic-monstera-e53b46.netlify.app",
  //     "https://659882d91b14f060e1b8dace--eclectic-monstera-e53b46.netlify.app/home",
  //   ],
  //   methods: ["GET", "POST"],
  // }
  )
);

server.use(dogsRoutes)

export default server;
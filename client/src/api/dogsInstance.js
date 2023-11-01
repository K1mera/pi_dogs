import axios from "axios";

export const dogIns = axios.create({
  baseURL: "http://localhost:3001",
});

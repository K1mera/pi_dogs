import axios from "axios";

export const dogIns = axios.create({
  baseURL: "https://dogs-api-isdv.onrender.com",
});

import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://site-backend-3-tins.onrender.com/api",
});

export default api;

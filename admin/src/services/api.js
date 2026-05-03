import axios from "axios";

export const BASE_URL = "https://biterush-food-delivery.onrender.com"; // 🔥 replace this

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
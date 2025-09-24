import axios from "axios";

const http = axios.create({
  baseURL: "https://loginapi-z1y5.onrender.com",
});

http.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default http;
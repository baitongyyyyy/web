import axios from "axios";

const http = axios.create({
  baseURL: "https://localhost:7207",
});

http.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
//   console.log('token:', token);
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default http;
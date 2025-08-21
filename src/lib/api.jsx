import axios from "axios";

const API_URL =
  import.meta.env.CCHIVE_API_URL || "https://localhost:3000/api/v1";

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access-token");
  const client = localStorage.getItem("client");
  const uid = localStorage.getItem("uid");

  if (token && client && uid) {
    config.headers["access-token"] = token;
    config.headers["client"] = client;
    config.headers["uid"] = uid;
  }
  return config;
});

api.interceptors.response.use(
  (response) => {
    const token = response.headers["access-token"];
    if (token) {
      localStorage.setItem("access-token", token);
      localStorage.setItem("client", response.headers["client"]);
      localStorage.setItem("uid", response.headers["uid"]);
    }
    return response;
  },
  (error) => Promise.reject(error),
);

export default api;

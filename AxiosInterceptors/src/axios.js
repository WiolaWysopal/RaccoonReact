import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// Request Interceptor - adds header
api.interceptors.request.use(
  (config) => {
    config.headers["X-Custom-Header"] = "MyCustomHeaderValue";
    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status >= 400) {
      console.error(`API error: ${error.response.status}:`, error.message);
    } else {
      console.error("Unexpected error:", error.message);
    }
    return Promise.reject(error);
  },
);

export default api;

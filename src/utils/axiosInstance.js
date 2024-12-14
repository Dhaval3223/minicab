// src/api.js
import axios from "axios";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: "https://minicab.124124.site/public/api", // Replace with your API base URL
  timeout: 10000, // Set a timeout for requests
  headers: {
    "Content-Type": "application/json",
    // Add other common headers if needed
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Modify request here (e.g., add auth token)
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Handle successful response
    return response;
  },
  (error) => {
    // Handle response errors
    console.error("API error:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;

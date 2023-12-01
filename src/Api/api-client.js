import axios from "axios";
import { API_URL } from "../Utils/constants";

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;

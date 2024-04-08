import axios from "axios";

const instance = axios.create({
  // .. congigure axios baseURL
  baseURL:  "https://my-zen-student-dashboard-backend.onrender.com"
});

export default instance;
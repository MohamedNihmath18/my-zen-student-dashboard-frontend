import axios from "axios";

const instance = axios.create({
  // .. congigure axios baseURL
  baseURL:  "http://localhost:3001"
});

export default instance;
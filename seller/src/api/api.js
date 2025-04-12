import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api"}); // replace with your backend URL if deployed headers: { "Content-Type": "application/json", }, });

export default API;
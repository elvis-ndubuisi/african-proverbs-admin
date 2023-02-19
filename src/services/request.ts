import axios from "axios";

// const API = "https://africanproverbs.onrender.com/";
const API = "http://localhost:4000/";
export default axios.create({ baseURL: API });

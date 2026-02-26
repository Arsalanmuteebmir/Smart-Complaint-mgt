import axios from "axios";

export default axios.create({
  // Hardcoding /api here ensures it works even if Vercel variables are stuck
  baseURL: "https://smart-complaint-mgt.onrender.com/api"
});
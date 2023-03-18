import axios from "axios";
import { API_URL } from "./base";

async function getTrendingMovies(page) {
  const resp = await axios.get(`${API_URL}/trending`, { params: { page } });
  return resp.data;
}

export default getTrendingMovies;

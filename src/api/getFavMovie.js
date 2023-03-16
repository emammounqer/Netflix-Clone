import axios from "axios";
import { API_URL } from "./base";

async function getTrendingMovies() {
  const resp = await axios.get(`${API_URL}/movies`);
  return resp.data;
}

export default getTrendingMovies;

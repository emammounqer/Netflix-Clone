import axios from "axios";
import { API_URL } from "./base";

async function getFavMovie() {
  const resp = await axios.get(`${API_URL}/movies`);
  return resp.data;
}

export default getFavMovie;

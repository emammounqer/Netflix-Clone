import { API_URL } from "./base";
import axios from "axios";

async function addMovie(movie) {
  const resp = await axios.post(`${API_URL}/movies`, movie);
  return resp.data;
}

export default addMovie;

import axios from "axios";
import { API_URL } from "./base";

async function deleteMovie(id) {
  const resp = await axios.delete(`${API_URL}/movies/${id}`);
  return resp.data;
}

export default deleteMovie;

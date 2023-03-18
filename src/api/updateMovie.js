import axios from "axios";
import { API_URL } from "./base";

async function updateMovie(id, updatedData) {
  const resp = await axios.put(`${API_URL}/movies/${id}`, updatedData);
  return resp.data;
}

export default updateMovie;

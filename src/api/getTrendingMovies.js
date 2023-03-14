import { API_URL } from "./base";

async function getTrendingMovies(page = 1) {
  const resp = await fetch(`${API_URL}/trending?page=${page}`);

  const data = await resp.json();
  if (resp.ok === false) throw data;

  return data;
}

export default getTrendingMovies;

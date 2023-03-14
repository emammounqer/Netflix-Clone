import { API_URL } from "./base";

async function addMovie(movie) {
  const body = JSON.stringify(movie);

  const resp = await fetch(`${API_URL}/movies`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    cors: "*",
    body: body,
  });

  const data = await resp.json();
  if (resp.ok === false) throw data;
  return data;
}

export default addMovie;

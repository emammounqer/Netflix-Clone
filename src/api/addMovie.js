async function addMovie(movie) {
  const body = JSON.stringify(movie);

  const resp = await fetch(
    "https://movies-library-production-919c.up.railway.app/movies",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cors: "*",
      body: body,
    }
  );

  const data = await resp.json();
  if (resp.ok === false) throw data;
  return data;
}

export default addMovie;

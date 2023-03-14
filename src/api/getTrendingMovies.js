async function getTrendingMovies() {
  const resp = await fetch(
    "https://movies-library-production-919c.up.railway.app/trending"
  );

  const data = await resp.json();
  if (resp.ok === false) throw data;

  return data;
}

export default getTrendingMovies;

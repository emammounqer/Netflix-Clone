import { useEffect, useState } from "react";
import getTrendingMovies from "../../api/getTrendingMovies";
import MovieList from "../MovieList/MovieList";

function Home() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const movieListData = await getTrendingMovies();
        setMovieList(movieListData.results);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <MovieList movieList={movieList} />
    </div>
  );
}
export default Home;

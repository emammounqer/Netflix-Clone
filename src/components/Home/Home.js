import { useEffect, useState } from "react";
import getTrendingMovies from "../../api/getTrendingMovies";
import MovieList from "../MovieList/MovieList";
import Spinner from "react-bootstrap/Spinner";
import { PageNavigation } from "./PageNavigation";
import { AllModals } from "../ModalMovie";

function Home() {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [totalNumOfPages, setTotalNumOfPages] = useState(1);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const movieListData = await getTrendingMovies(page);
        setMovieList(movieListData.results);
        setTotalNumOfPages(movieListData.total_pages);
      } catch (error) {
        setError(error.response.data || error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [page]);

  const moveToNextPage = () => {
    if (page < totalNumOfPages) {
      setPage(page + 1);
    }
  };

  const moveToPrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  if (error)
    return (
      <pre className="text-danger px-2">
        Error: {JSON.stringify(error, undefined, 2)}
      </pre>
    );

  return (
    <main>
      {loading ? (
        <Spinner animation="border" />
      ) : (
        <MovieList movieList={movieList} modals={[AllModals.AddToFav]} />
      )}

      <PageNavigation
        page={page}
        totalNumOfPages={totalNumOfPages}
        moveToNextPage={moveToNextPage}
        moveToPrevPage={moveToPrevPage}
      ></PageNavigation>
    </main>
  );
}
export default Home;

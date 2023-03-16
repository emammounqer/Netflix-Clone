import { useState } from "react";
import getTrendingMovies from "../../api/getTrendingMovies";
import MovieList from "../MovieList/MovieList";
import Spinner from "react-bootstrap/Spinner";
import { PageNavigation } from "./PageNavigation";
import useApiFetch from "../../hooks/useApiFetch";

function Home() {
  const [page, setPage] = useState(1);

  const { data, loading, error } = useApiFetch(() => getTrendingMovies(page), {
    defValue: {
      results: [],
      total_pages: 1,
    },
    dependanceArray: [page],
  });

  const moveToNextPage = () => {
    if (page < data.total_pages) {
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
        <MovieList movieList={data.results} />
      )}

      <PageNavigation
        page={page}
        totalNumOfPages={data.total_pages}
        moveToNextPage={moveToNextPage}
        moveToPrevPage={moveToPrevPage}
      />
    </main>
  );
}
export default Home;

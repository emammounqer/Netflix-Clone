import { useState, useEffect } from "react";
import MovieList from "../MovieList/MovieList";
import getFavMovie from "../../api/getFavMovie";
import Spinner from "react-bootstrap/Spinner";
import { AllModals } from "../ModalMovie/index";

function FavList() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [favMovies, setFavMovies] = useState([]);

  useEffect(() => {
    fetchFavMovies();
  }, []);

  const fetchFavMovies = async () => {
    setLoading(true);

    try {
      const favMovies = await getFavMovie();
      setFavMovies(favMovies);
    } catch (error) {
      setError(error.response.data || error.message);
    }

    setLoading(false);
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
        <MovieList
          movieList={favMovies}
          refetchMovies={fetchFavMovies}
          modals={[AllModals.MoreInfo, AllModals.Update, AllModals.Delete]}
        />
      )}
    </main>
  );
}
export default FavList;

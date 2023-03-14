import { useState } from "react";
import Movie from "../Movie/Movie";
import ModalMovie from "../ModalMovie/ModalMovie";

function MovieList({ movieList }) {
  const [showModal, setShowModal] = useState(false);
  const [clickedMovie, setCurrMovie] = useState({});

  const openModal = (movie) => {
    setCurrMovie(movie);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {movieList.map((movie) => (
        <Movie key={movie.id} movie={movie} openModal={openModal} />
      ))}

      <ModalMovie
        movie={clickedMovie}
        show={showModal}
        closeModal={closeModal}
      />
    </>
  );
}
export default MovieList;

import { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Movie from "../Movie/Movie";

function MovieList({ movieList, refetchMovies, modals }) {
  const [activeModal, setActiveModal] = useState(null);
  const [clickedMovie, setClickedMovie] = useState({});

  const handleActiveModal = (modal, movie) => {
    setActiveModal(modal);
    setClickedMovie(movie);
  };

  const closeActiveModal = () => setActiveModal(null);

  return (
    <section className="container">
      <Row xs={1} md={2} lg={3} xl={4} className="g-4 p-4">
        {movieList.map((movie) => (
          <Col key={movie.id}>
            <Movie
              movie={movie}
              handleActiveModal={handleActiveModal}
              modals={modals}
            />
          </Col>
        ))}
      </Row>

      {modals?.map((modal) => (
        <modal.ModalComponent
          key={modal.id}
          movie={clickedMovie}
          show={activeModal === modal}
          closeModal={closeActiveModal}
          refetchMovies={refetchMovies}
        />
      ))}
    </section>
  );
}
export default MovieList;

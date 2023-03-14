import { useState } from "react";
import Movie from "../Movie/Movie";
import ModalMovie from "../ModalMovie/ModalMovie";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

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
    <section className="container">
      <Row xs={1} md={2} lg={3} xl={4} className="g-4 p-4">
        {movieList.map((movie) => (
          <Col key={movie.id}>
            <Movie movie={movie} openModal={openModal} />
          </Col>
        ))}
      </Row>

      <ModalMovie
        movie={clickedMovie}
        show={showModal}
        closeModal={closeModal}
      />
    </section>
  );
}
export default MovieList;

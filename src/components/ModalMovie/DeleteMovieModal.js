import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import deleteMovie from "../../api/deleteMovie";
import { useState } from "react";

function DeleteMovieModal(props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDeleteMovie = async () => {
    setError(null);
    setLoading(true);
    try {
      await deleteMovie(props.movie.id);
      props.refetchMovies();
      handleCloseModal();
    } catch (error) {
      setError(error.response.data || error.message);
    }
  };

  const handleCloseModal = () => {
    setError(null);
    props.closeModal();
  };

  return (
    <Modal show={props.show} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are You Sure You Want To Delete Movie {props.movie.title} with Id{" "}
        {props.movie.id}?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
        <Button variant="danger" onClick={handleDeleteMovie} disabled={loading}>
          {loading ? "Deleting..." : "Delete"}
        </Button>

        {error && (
          <pre className="text-danger px-2">
            Error: {JSON.stringify(error, undefined, 2)}
          </pre>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteMovieModal;

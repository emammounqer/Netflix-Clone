import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import updateMovie from "../../api/updateMovie";
import { useState } from "react";

function UpdateMovieModal({ movie, show, closeModal, refetchMovies }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const updatedMovie = {
      title: e.target.title.value,
      overview: e.target.overview.value,
      poster_path: e.target.poster_path.value,
      comment: e.target.comment.value,
    };
    console.log(updatedMovie);
    try {
      await updateMovie(movie.id, updatedMovie);
      refetchMovies();
      handleCloseModal();
    } catch (error) {
      setError(error.response.data || error.message);
    }

    setLoading(false);
  };

  const handleCloseModal = () => {
    closeModal();
    setError(null);
  };

  return (
    <Modal show={show} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" name="title" defaultValue={movie.title} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Overview</Form.Label>
            <Form.Control
              as="textarea"
              name="overview"
              aria-label="With textarea"
              defaultValue={movie.overview}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Poster Path</Form.Label>
            <Form.Control
              type="text"
              name="poster_path"
              defaultValue={movie.poster_path}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Comment</Form.Label>
            <Form.Control
              as="textarea"
              aria-label="With textarea"
              defaultValue={movie.comment}
              name="comment"
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>

          <Button variant="primary" type="submit" disabled={loading}>
            {loading ? "Updating ..." : "Update"}
          </Button>

          {error && (
            <pre className="text-danger px-2">
              Error: {JSON.stringify(error, undefined, 2)}
            </pre>
          )}
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default UpdateMovieModal;

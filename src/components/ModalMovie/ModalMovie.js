import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";

import addMovie from "../../api/addMovie";

function ModalMovie({ movie, show, closeModal }) {
  const [formData, setFormData] = useState({ comment: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCloseBtn = () => {
    closeModal();
    setFormData({ comment: "" });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await addMovie({
        ...movie,
        comment: formData.comment,
      });
      closeModal();
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      show={show}
      onHide={handleCloseBtn}
      backdrop="static"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{movie.title}</Modal.Title>
      </Modal.Header>

      <Row xs={1} md={2} className="g-4">
        <Col>
          <Image
            className="px-2"
            src={
              "https://image.tmdb.org/t/p/w600_and_h900_bestv2" +
              movie.poster_path
            }
            width="100%"
          />
        </Col>

        <Col>
          <Modal.Body>{movie.overview}</Modal.Body>
        </Col>

        <Col md={12}>
          <Modal.Footer>
            <InputGroup>
              <InputGroup.Text>Comment</InputGroup.Text>
              <Form.Control
                as="textarea"
                aria-label="With textarea"
                value={formData.comment}
                name="comment"
                onChange={handleFormData}
              />
            </InputGroup>
            <Button variant="secondary" onClick={handleCloseBtn}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit} disabled={loading}>
              Add To Fav
              {loading && <Spinner animation="border" size="sm" />}
            </Button>
          </Modal.Footer>
          {error && (
            <pre className="text-danger px-2">
              Error: {JSON.stringify(error, undefined, 2)}
            </pre>
          )}
        </Col>
      </Row>
    </Modal>
  );
}
export default ModalMovie;

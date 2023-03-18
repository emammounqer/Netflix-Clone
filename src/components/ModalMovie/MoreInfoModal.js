import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";

function MoreInfoModal({ movie, show, closeModal }) {
  return (
    <Modal
      show={show}
      onHide={closeModal}
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
          <Modal.Body>
            <p>{movie.overview}</p>

            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Comment</Accordion.Header>
                <Accordion.Body>{movie.comment || "No comment"}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Modal.Body>
        </Col>
        <Col md={12}>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Col>
      </Row>
    </Modal>
  );
}
export default MoreInfoModal;

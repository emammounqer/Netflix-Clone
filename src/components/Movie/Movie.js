import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { AllModals } from "../ModalMovie/index";

function Movie({ movie, handleActiveModal, modals }) {
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={
          "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + movie.poster_path
        }
      />
      <Card.Body className="d-flex flex-column justify-content-between align-items-center">
        <Card.Title>{movie.title} &nbsp;</Card.Title>

        {modals?.map((modal) => {
          let variant;
          if (modal === AllModals.Delete) variant = "danger";
          else if (modal === AllModals.Update) variant = "success";

          return (
            <Button
              key={modal.id}
              variant={variant}
              onClick={() => handleActiveModal(modal, movie)}
            >
              {modal.rep}
            </Button>
          );
        })}
      </Card.Body>
    </Card>
  );
}
export default Movie;

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Movie({ movie, openModal }) {
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
        {/* <Card.Text>{movie.overview}</Card.Text> */}
        <Button onClick={() => openModal(movie)}>Add To Favorite</Button>
      </Card.Body>
    </Card>
  );
}
export default Movie;

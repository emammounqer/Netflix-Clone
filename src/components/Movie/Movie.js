function Movie({ movie, openModal }) {
  return (
    <div>
      {movie.id}
      <button onClick={() => openModal(movie)}>Add To Favorite</button>
    </div>
  );
}
export default Movie;

import { useState } from "react";
import addMovie from "../../api/addMovie";

function ModalMovie({ movie, show, closeModal }) {
  const [formData, setFormData] = useState({ comment: "" });

  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCloseBtn = () => {
    closeModal();
    setFormData({ comment: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addMovie({
        ...movie,
        comment: formData.comment,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div hidden={!show}>
      <form onSubmit={handleSubmit}>
        {movie.id}

        <label htmlFor="comment">Comment</label>
        <input
          type="text"
          name="comment"
          id="comment"
          value={formData.comment}
          onChange={handleFormData}
        />

        <input type="submit" value="Add To Fav" />
      </form>
      <button onClick={handleCloseBtn}>x</button>
    </div>
  );
}
export default ModalMovie;

import ModalMovie from "./ModalMovie";
import MoreInfoModal from "./MoreInfoModal";
import UpdateMovieModal from "./UpdateMovieModal";
import DeleteMovieModal from "./DeleteMovieModal";

export const AllModals = {
  AddToFav: { id: "1", ModalComponent: ModalMovie, rep: "Add To Fav" },
  MoreInfo: { id: "2", ModalComponent: MoreInfoModal, rep: "More Info" },
  Update: { id: "3", ModalComponent: UpdateMovieModal, rep: "Update" },
  Delete: { id: "4", ModalComponent: DeleteMovieModal, rep: "Delete" },
};

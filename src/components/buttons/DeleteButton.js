import { deleteMovie } from "../../store/actions"
import { useDispatch } from "react-redux";
// Styling
import { DeleteButtonStyled1 } from "../../styles";
const DeleteButton = (props) => {
  const dispatch = useDispatch();
  return (
    <DeleteButtonStyled1 onClick={() => dispatch(deleteMovie(props.movieId))}>
      Delete
    </DeleteButtonStyled1>
  );
};

export default DeleteButton;

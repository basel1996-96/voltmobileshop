import { useDispatch } from "react-redux";
import { updatedMovie } from "../../store/actions";
import { UnwatchedButtonStyled } from "../../styles";

const UnwatchedButton = (props) => {
  const dispatch = useDispatch();

  return (
    <UnwatchedButtonStyled onClick={() => dispatch(updatedMovie(props.movie))}>
      Unread
    </UnwatchedButtonStyled>
  );
};

export default UnwatchedButton;

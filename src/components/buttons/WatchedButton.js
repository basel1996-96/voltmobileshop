import { useDispatch } from "react-redux";
import { updatedMovie } from "../../store/actions";
import { WatchedButtonStyled } from "../../styles";

const WatchedButton = (props) => {
  const dispatch = useDispatch();

  return (
    <WatchedButtonStyled onClick={() => dispatch(updatedMovie(props.movie))}>
     Read
    </WatchedButtonStyled>
  );
};

export default WatchedButton;

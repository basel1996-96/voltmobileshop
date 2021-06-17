import { FlexStyleVer, CardStyle, DeleteButton } from "../styles";
import { useDispatch } from "react-redux";
import { returnBook } from "../store/actions";

const CurrentlyBorrowedBooks = (props) => {
  const dispatch = useDispatch();

  return (
    <CardStyle>
      <FlexStyleVer>
        <p>{props.book.title}</p>
        <div>
          <DeleteButton
            onClick={() => dispatch(returnBook(props.book.id, props.product))}
          >
            {" "}
            Return{" "}
          </DeleteButton>
        </div>
      </FlexStyleVer>
    </CardStyle>
  );
};

export default CurrentlyBorrowedBooks;

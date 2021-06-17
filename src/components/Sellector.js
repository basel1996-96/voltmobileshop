import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { borrowBook } from "../store/actions";
import { FlexStyle } from "../styles";

const Sellector = (props) => {
  const [sellector, setSellectoe] = useState("");
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  let x = [];

  let list = props.product.currentlyBorrowedBooks.map((book) =>
    books.forEach((_book) => {
      if (book !== +_book.id) if (!x.includes(_book)) x.push(_book);
    })
  );
  list = x
    .filter((book) => book.available === true)
    .map((book) => {
      return <option value={book.title}>{[book.title]}</option>;
    });

  return (
    <FlexStyle>
      <select
        onChange={(event) => setSellectoe(event.target.value)}
        name="Book List"
        id="Book List"
      >
        <option disabled selected value>
          {" "}
          -- select a Book --{" "}
        </option>
        {list}
      </select>

      <button onClick={() => dispatch(borrowBook(sellector, props.product))}>
        Borrow
      </button>
    </FlexStyle>
  );
};

export default Sellector;

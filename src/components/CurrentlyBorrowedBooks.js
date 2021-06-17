import { useSelector } from "react-redux";
import BookCard from "./BookCard";
import { FlexStyleVer, ListStyle } from "../styles";

const CurrentlyBorrowedBooks = (props) => {
  const books = useSelector((state) => state.books);

  let x = [];

  let list = props.product.currentlyBorrowedBooks.map((book) =>
    books.forEach((_book) => {
      if (book === +_book.id) x.push(_book);
    })
  );

  list = x.map((book) => {
    return <BookCard key={book.id} book={book} product={props.product} />;
  });

  return (
    <ListStyle>
      <FlexStyleVer>
        {list.length === 0 ? "No Books Borrowed" : list}
      </FlexStyleVer>
    </ListStyle>
  );
};

export default CurrentlyBorrowedBooks;

import { useState } from "react";
import "../App.css";
import SearchBar1 from "./SearchBar1";
import { useSelector } from "react-redux";
import BookIteam from "./BookIteam";

const BookList = () => {
  const [query, setQuery] = useState("");
  const books = useSelector((state) => state.books);

  const filteredList = books
    .filter(
      (book) =>
        book.title.toUpperCase().includes(query.toUpperCase()) ||
        book.genre
          .map((g) =>
            g.toUpperCase().includes(query.toUpperCase()) ? true : false
          )
          .includes(true)
    )
    .map((book) => <BookIteam key={book.id} book={book} />);

  return (
    <div>
      <SearchBar1 setQuery={setQuery} />

      <div>{filteredList}</div>
    </div>
  );
};

export default BookList;

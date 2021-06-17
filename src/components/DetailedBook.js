//components
import DeleteButton2 from "../components/DeleteButton2";
import BookBbrrowedBy from "./BookBbrrowedBy";
//
import { useSelector } from "react-redux";
import { StyledButton, ButtonLink } from "../styles";
import { Delilas } from "../styles";
import { Redirect, useParams } from "react-router-dom";

const DetailedBook = () => {
  const books = useSelector((state) => state.books);

  let bookSlug = useParams().bookSlug;
  const book = books.find((book) => book.slug === bookSlug);
  if (typeof book === "undefined") return <Redirect to="/books" />;

  return (
    <div>
      <Delilas src={book.image} />

      <p>Title :{book.title}</p>
      <p>Author : {book.author} </p>
      <p>
        Genre :{" "}
        {book.genre.map((g) =>
          book.genre.length - 1 === book.genre.indexOf(g) ? ` ${g}` : ` ${g} ,`
        )}{" "}
      </p>
      <p>
        Availabilty : {book.available === true ? "Availabale" : "Not Available"}
      </p>
      <p>Borrow History : </p>

      <BookBbrrowedBy book={book} />

      <DeleteButton2 variant="outline-primary" bookID={book.id} />
      <ButtonLink to={`/books/${book.slug}/edit`}>
        {" "}
        <StyledButton>Edit Member</StyledButton>
      </ButtonLink>
    </div>
  );
};
export default DetailedBook;

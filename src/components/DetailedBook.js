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

      <p className="ba">Title :{book.title}</p>
      <p className="ba">Author : {book.author} </p>
      <p className="ba">
        Genre :{" "}
        {book.genre.map((g) =>
          book.genre.length - 1 === book.genre.indexOf(g) ? ` ${g}` : ` ${g} ,`
        )}{" "}
      </p>
      <p className="ba">
        Availabilty : {book.available === true ? "Availabale" : "Not Available"}
      </p><br></br>
      <p className="ba">Borrow History  </p>

      <BookBbrrowedBy book={book} />

      <DeleteButton2 variant="outline-primary" bookID={book.id} />
      <ButtonLink to={`/books/${book.slug}/edit`}>
        {" "}
        <StyledButton className="ba">Edit Member</StyledButton>
      </ButtonLink>
    </div>
  );
};
export default DetailedBook;

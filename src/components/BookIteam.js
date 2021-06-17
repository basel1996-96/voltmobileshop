//components
import DeleteButton2 from "../components/DeleteButton2";
//
import { Delilas } from "../styles";
import { Link } from "react-router-dom";

const BookIteam = (props) => {
  const book = props.book;

  return (
    <div>
      <Link to={`/books/${book.slug}`}>
        <Delilas src={book.image} />
      </Link>
      <p>Title :{book.title}</p>
      <p>Author : {book.author} </p>
      <p>
        Genre :{" "}
        {book.genre.map((g) =>
          book.genre.length - 1 === book.genre.indexOf(g) ? ` ${g}` : ` ${g} ,`
        )}{" "}
      </p>
      <DeleteButton2 variant="outline-primary" bookID={book.id} />{" "}
    </div>
  );
};
export default BookIteam;

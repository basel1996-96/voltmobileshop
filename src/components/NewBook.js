import { FlexStyleVer } from "../styles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createBook, updateBook } from "../store/actions";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const NewBook = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  let bookSlug = useParams().bookSlug;
  const books = useSelector((state) => state.books);

  const newBook = {
    
    title: "",
    slug: "",
    id: "",
    image: "",
    author: "",
    available: "true",

  };

  const editedBook = books.find(
    (book) => book.slug === bookSlug
  );

  const [book, setBook] = useState(
    editedBook ? editedBook : newBook
  );

  const resetForm = () => {
    setBook({
        title: "",
        slug: "",
        id: "",
        image: "",
        author: "",
        available: "true",
    });
  };

  const handleChange = (event) => {
    setBook({ ...book, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    editedBook
      ? dispatch(updateBook(book))
      : dispatch(createBook(book));

    resetForm();
    history.push("/books");
  };

  return (
    <form onSubmit={handleSubmit}>
      <FlexStyleVer >
        <label class="st">
       Title:
          <input
            type="text"
            name="title"
            value={book.title}
            onChange={handleChange}
          />
        </label>
        <label class="st">
        Author:
          <input
            type="text"
            name="author"
            value={book.author}
            onChange={handleChange}
          />
        </label>

        <label class="st">
          Image URL:
          <input
            type="text"
            name="image"
            value={book.image}
            onChange={handleChange}
          />
        </label>

        

        <label class="st">
        Genre :
          <input
            type={Array}
            name="genre"
            value={book.genre}
            onChange={handleChange}
          />
        </label>

        <input type="submit" value="ADD" />
      </FlexStyleVer>
    </form>
  );
};

export default NewBook;




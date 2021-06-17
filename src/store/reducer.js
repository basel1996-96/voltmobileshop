import products from "../products";
import books from "../books"
import movies from "../movies";
// import {} from "module";
import { DELETE_PRODUCT } from "./actions";
import { CREATE_PRODUCT } from "./actions";
import { UPDATE_PRODUCT } from "./actions";
import { DELETE_BOOK } from "./actions";
import { CREATE_BOOK } from "./actions";
import { UPDATE_BOOK } from "./actions";
import { RETURN_BOOK } from "./actions";
import { BORROW_BOOK } from "./actions";

import slugify from "slugify";

const initialState = {
    // initiate all state and its initial value
    products: products,
    books:books,
    movies: movies,
  }; 




  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case DELETE_PRODUCT:

        const productToKeep = state.products.filter(
          (product) => product.id !== action.payload.productId
        );
  
        return {
          ...state,
          products: productToKeep,
        };
  
      case CREATE_PRODUCT:
        let fullname =`${action.payload.newProduct.firstName} ${action.payload.newProduct.lastName}`
        action.payload.newProduct.id =
          state.products[state.products.length - 1].id + 1;
        action.payload.newProduct.slug = slugify(fullname);
        console.log(action.payload.newProduct.slug )
        return {
          ...state,
          products: [...state.products, action.payload.newProduct],
        };
  
      case UPDATE_PRODUCT:
        let fullname1 =`${action.payload.updatedProduct.firstName} ${action.payload.updatedProduct.lastName}`
        action.payload.updatedProduct.slug = slugify(fullname1);
  
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload.updatedProduct.id
              ? action.payload.updatedProduct
              : product
          ),
        };
        case DELETE_BOOK:

          const booksToKeep = state.books.filter(
            (book) => book.id !== action.payload.bookId
          );
    
          return {
            ...state,
            books: booksToKeep,
          };
    
        case CREATE_BOOK:
          let fullname3 =`${action.payload.newbook.title}`
          action.payload.newbook.id =
            state.books[state.books.length - 1].id + 1;
          action.payload.newbook.slug = slugify(fullname3);
          console.log(action.payload.newbook)
          return {
            ...state,
            books: [...state.books, action.payload.newbook],
          };
    
        case UPDATE_BOOK:
          let fullname4 =`${action.payload.updatedbook.title} `
          action.payload.updatedbook.slug = slugify(fullname4);
    
          return {
            ...state,
            books: state.books.map((book) =>
              book.id === action.payload.updatedbook.id
                ? action.payload.updatedbook
                : book
            ),
          };
         
            
              case "DELETE_MOVIE":
                return {
                  ...state,
                  movies: state.movies.filter(
                    (movie) => movie.id !== action.payload.movieId
                  ),
                };
          
              case "ADD_MOVIE":
                const { newMovie } = action.payload;
                newMovie.slug = slugify(newMovie.name, { lower: true });
                newMovie.id = state.movies[state.movies.length - 1].id + 1;
                newMovie.watch = false;
                return {
                  ...state,
                  movies: [...state.movies, newMovie],
                };
          
              case "UPDATE_MOVIE":
                const { updatedMovie } = action.payload;
                updatedMovie.watch = !updatedMovie.watch;
                return {
                  ...state,
                  movies: state.movies.map((movie) =>
                    updatedMovie.id === movie.id ? updatedMovie : movie
                  ),
                };
                case RETURN_BOOK:
      const currentBooks = action.payload.product.currentlyBorrowedBooks.filter(
        (bookID) => parseInt(bookID) !== parseInt(action.payload.bookId)
      );
      let newProduct = {
        ...action.payload.product,
        currentlyBorrowedBooks: currentBooks,
      };

      let newBook = state.books.find(
        (book) => parseInt(book.id) === parseInt(action.payload.bookId)
      );

      newBook.available = true;

      return {
        ...state,
        products: state.products.map((product) =>
          product === action.payload.product ? newProduct : product
        ),
        books: state.books.map((book) =>
          book.id === parseInt(action.payload.bookId) ? newBook : book
        ),
      };

    case BORROW_BOOK:
      let borrowedBook = state.books.find(
        (book) => book.title === action.payload.bookTitle
      );

      let borrower = action.payload.product;
      if (borrowedBook) {
        borrower.currentlyBorrowedBooks.push(borrowedBook.id);

        borrowedBook.available = false;
        borrowedBook.borrowedBy.push(borrower.id);
      }

      return {
        ...state,
        products: state.products.map((product) =>
          product === action.payload.product ? borrower : product
        ),
        books: state.books.map((book) =>
          book.title === action.payload.bookTitle ? borrowedBook : book
        ),
      };

  
      default:
        return state;
    }
  };
  
  export default reducer;
import products from "../products";
import books from "../books"
// import {} from "module";
import { DELETE_PRODUCT } from "./actions";
import { CREATE_PRODUCT } from "./actions";
import { UPDATE_PRODUCT } from "./actions";
import { DELETE_BOOK } from "./actions";
import { CREATE_BOOK } from "./actions";
import { UPDATE_BOOK } from "./actions";

import slugify from "slugify";

const initialState = {
    // initiate all state and its initial value
    products: products,
    books:books,
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
  
      default:
        return state;
    }
  };
  
  export default reducer;
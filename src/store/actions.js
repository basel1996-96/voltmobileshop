export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const DELETE_BOOK = "DELETE_BOOK";
export const CREATE_BOOK = "CREATE_BOOK";
export const UPDATE_BOOK = "UPDATE_BOOK";
export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";
export const UPDATE_MOVIE = "UPDATE_MOVIE";
export const RETURN_BOOK = "RETURN_BOOK";
export const BORROW_BOOK = "BORROW_BOOK";


export const deleteProduct = (productId) => {
  return {
    type: DELETE_PRODUCT,
    payload: {
      productId: productId,
    },
  };
};

export const createProduct = (newProduct) => {
  return {
    type: CREATE_PRODUCT,
    payload: {
      newProduct: newProduct,
    },
  };
};

export const updateProduct = (updatedProduct) => {
  return {
    type: UPDATE_PRODUCT,
    payload: {
      updatedProduct: updatedProduct,
    },
  };
};
export const deleteBook= (bookId) => {
  return {
    type: DELETE_BOOK,
    payload: {
      bookId: bookId,
    },
  };
};

export const createBook = (newbook) => {
  return {
    type: CREATE_BOOK,
    payload: {
      newbook: newbook,
    },
  };
};

export const updateBook = (updatedbook) => {
  return {
    type: UPDATE_BOOK,
    payload: {
      updatedbook: updatedbook,
    },
  };
};
export const deleteMovie = (movieId) => ({
  type: DELETE_MOVIE,
  payload: { movieId: movieId },
});

export const addMovie = (newMovie) => ({
  type: ADD_MOVIE,
  payload: { newMovie },
});

export const updatedMovie = (updatedMovie) => {
  return {
    type: UPDATE_MOVIE,
    payload: { updatedMovie },
  };
};
export const returnBook = (bookId, product) => {
  return {
    type: RETURN_BOOK,
    payload: {
      bookId: bookId,
      product: product,
    },
  };
};

export const borrowBook = (bookTitle, product) => {
  return {
    type: BORROW_BOOK,
    payload: {
      bookTitle: bookTitle,
      product: product,
    },
  };
};
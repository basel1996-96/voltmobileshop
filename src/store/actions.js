export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const DELETE_BOOK = "DELETE_BOOK";
export const CREATE_BOOK = "CREATE_BOOK";
export const UPDATE_BOOK = "UPDATE_BOOK";

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
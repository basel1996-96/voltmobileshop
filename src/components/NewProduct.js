import { FlexStyleVer } from "../styles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct, updateProduct } from "../store/actions";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const NewProduct = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  let productSlug = useParams().productSlug;
  const products = useSelector((state) => state.products);

  const newProduct = {
    firstName: "",
    lastName: "",
    slug: "",
    id: "",
    image: "",
    membership: "",
    currentlyBorrowedBooks: [""],
  };

  const editedProduct = products.find(
    (product) => product.slug === productSlug
  );

  const [product, setProduct] = useState(
    editedProduct ? editedProduct : newProduct
  );

  const resetForm = () => {
    setProduct({
      firstName: "",
      lastName: "",
      slug: "",
      id: "",
      image: "",
      membership: "",
      currentlyBorrowedBooks: "",
    });
  };

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    editedProduct
      ? dispatch(updateProduct(product))
      : dispatch(createProduct(product));

    resetForm();
    history.push("/members");
  };

  return (
    <form onSubmit={handleSubmit}>
      <FlexStyleVer>
        <label class="st">
          first Name:
          <input
            type="text"
            name="firstName"
            value={product.firstName}
            onChange={handleChange}
          />
        </label>
        <label class="st">
          Last Name:
          <input
            type="text"
            name="lastName"
            value={product.lastName}
            onChange={handleChange}
          />
        </label>

        <label class="st">
          Image URL:
          <input
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
          />
        </label>

        <label class="st">
          Membership:
          <input
            type="text"
            name="membership"
            value={product.membership}
            onChange={handleChange}
          />
        </label>

        <input type="submit" value="ADD" />
      </FlexStyleVer>
    </form>
  );
};

export default NewProduct;

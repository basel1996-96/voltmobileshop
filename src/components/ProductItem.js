import DeleteButton from "../components/DeleteButton";
//import products from "../products";
import { Delilas } from "../styles";
import { Link } from "react-router-dom";
const ProductItem = (props) => {
  const product = props.product;
  return (
    <div>
      <Link to={`/members/${product.slug}`}>
        <Delilas src={product.image} />
      </Link>
      <p>
        {" "}
        Name:{product.firstName} {product.lastName}
      </p>
      <p>Membership : {product.membership} </p>
      <DeleteButton variant="outline-primary" productID={product.id} />{" "}
    </div>
  );
};
export default ProductItem;

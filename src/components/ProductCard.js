import { FlexStyleVer, CardStyle } from "../styles";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  return (
    <CardStyle>
      <FlexStyleVer>
        <Link to={`/members/${props.product.slug}`}>
          <p>{`${props.product.firstName} ${props.product.lastName}`}</p>
        </Link>
      </FlexStyleVer>
    </CardStyle>
  );
};

export default ProductCard;

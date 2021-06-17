import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { FlexStyleVer, ListStyle } from "../styles";

const BookBbrrowedBy = (props) => {
  const products = useSelector((state) => state.products);

  let x = [];

  let list = props.book.borrowedBy.map((memberID) =>
    products.forEach((_product) => {
      if (memberID === +_product.id) x.push(_product);
    })
  );

  list = x.map((product) => {
    return <ProductCard key={product.id} product={product} />;
  });

  return (
    <ListStyle>
      <FlexStyleVer>
        {list.length === 0 ? "Never Been Borrowed before" : list}
      </FlexStyleVer>
    </ListStyle>
  );
};

export default BookBbrrowedBy;

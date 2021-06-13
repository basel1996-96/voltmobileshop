import DeleteButton from "../components/DeleteButton"
//import products from "../products";
import { Delilas} from "../styles";
import {Link} from "react-router-dom"
const ProductItem= (props) => {
    const product = props.product
return(
    <div >  
        <Link to = {`/products/${product.id}`}> 
   <Delilas  src = {product.image} />
   </Link> 
            <p> {product.name} </p>
            <p> {product.price} JD </p>
            <DeleteButton variant="outline-primary" deleteProduct= {props.deleteProduct} productID={product.id}/>{' '}
            </div>
);
}
export default ProductItem
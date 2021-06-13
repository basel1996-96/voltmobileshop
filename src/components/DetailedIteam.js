import {Delilas} from "../styles";
import { Redirect, useParams } from "react-router-dom";
import DeleteButton from "../components/DeleteButton"
import { useSelector } from "react-redux";


const DetailedIteam = (props) => {
    const products = useSelector((state) => state.products);

    let productID =useParams().productID
    const product=products.find(product=>product.id === +productID)
    if(!product) return <Redirect to ="/"/>
return(
    <div>

 
   <Delilas  src = {product.image} /> 
      
            <p> {product.name} </p>
            <p> {product.discription}</p>
            <p> {product.price} JD </p>
            <DeleteButton variant="outline-primary"  productID={product.id}/> 
            </div>
)
}
export default DetailedIteam;
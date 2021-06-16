import {Delilas} from "../styles";
import { Redirect, useParams } from "react-router-dom";
import DeleteButton from "../components/DeleteButton"
import { useSelector } from "react-redux";
import {StyledButton, ButtonLink } from "../styles";


const DetailedIteam = () => {
    const products = useSelector((state) => state.products);

    let productSlug =useParams().productSlug
    const product=products.find(product=>product.slug === productSlug)
    if (typeof product === "undefined") return <Redirect to="/products" />;

    // const currentBooks = ()=>{

    //     return product.currentlyBorrowedBooks.map(book=>`"${book}" ` )
        
    // }
 
return(
    <div>

 
   <Delilas  src = {product.image} /> 
      
            <p>  name : {product.firstName} {product.lastName} </p>
            <p> Membership : {product.membership}</p>
            <p> Currently Borrowed Books:{product.currentlyBorrowedBooks} </p>
            <DeleteButton variant="outline-primary"  productID={product.id}/> 
            <ButtonLink to={`/products/${product.slug}/edit`}>  <StyledButton>Edit Member</StyledButton>
        
        </ButtonLink>
            </div>
)
}
export default DetailedIteam;
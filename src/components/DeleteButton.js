import { DeleteButtonStyled } from "../styles"
import { useDispatch } from "react-redux";
import { deleteProduct } from "../store/actions";



const DeleteButton = (props)=>{
    const dispatch = useDispatch();

return <DeleteButtonStyled onClick={()=> dispatch(deleteProduct (props.productID))}> Delete</DeleteButtonStyled>

}
export default DeleteButton
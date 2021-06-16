import { DeleteButtonStyled } from "../styles"
import { useDispatch } from "react-redux";
import { deleteBook } from "../store/actions";



const DeleteButton2 = (props)=>{
    const dispatch = useDispatch();

return <DeleteButtonStyled onClick={()=> dispatch(deleteBook (props.bookID))}> Delete</DeleteButtonStyled>

}
export default DeleteButton2
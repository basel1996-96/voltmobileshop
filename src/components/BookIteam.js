import DeleteButton2 from "../components/DeleteButton2"
//import products from "../products";
import { Delilas} from "../styles";
import {Link} from "react-router-dom"
const BookIteam= (props) => {
    const book = props.book
return(
    <div >  
        <Link to = {`/books/${book.slug}`}> 
   <Delilas  src = {book.image} />
   </Link> 
            <p>Title :{book.title}</p>
            <p>Author : {book.author} </p>
            <p>Genre : {book.genre} </p>
            <DeleteButton2 variant="outline-primary"  bookID={book.id}/>{' '}
            </div>
);
}
export default BookIteam
import {Delilas} from "../styles";
import { Redirect, useParams } from "react-router-dom";
import DeleteButton2 from "../components/DeleteButton2"
import { useSelector } from "react-redux";
import {StyledButton, ButtonLink } from "../styles";


const DetailedBook = () => {
    const books = useSelector((state) => state.books);

    let bookSlug =useParams().bookSlug
    const book=books.find(book=>book.slug === bookSlug)
    if (typeof book === "undefined") return <Redirect to="/books" />;

    // const currentBooks = ()=>{

    //     return book.currentlyBorrowedBooks.map(book=>`"${book}" ` )
        
    // }
 
return(
    <div>

 
   <Delilas  src = {book.image} /> 
      
             <p>Title :{book.title}</p>
            <p>Author : {book.author} </p>
            <p>Genre : {book.genre} </p>
            <p>Availabilty :{book.available} </p>
            <p>Borrowed by :{book.borrowedBy}  </p>

            <DeleteButton2 variant="outline-primary"  bookID={book.id}/> 
            <ButtonLink to={`/books/${book.slug}/edit`}>  <StyledButton>Edit Member</StyledButton>
        
        </ButtonLink>
            </div>
)
}
export default DetailedBook ;
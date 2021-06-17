import {Title,Basel,Discription,Photo,Logo} from "../styles"


const Home = () =>
{
    return(
        <Title>
    <Basel> Die Bibliothek </Basel> <br></br>
    <Discription>Feeding The Mind </Discription>
    <br></br>
    <Photo  src = {`https://sunscrapers.com/blog/wp-content/uploads/2020/02/UI-component-library-in-React-project.jpeg`} /> <br></br>
    <Logo to="/books-Employee">Employee</Logo > <br></br>

    <Photo to="/books" src = {`https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/asian-lady-student-read-a-text-book-for-prepare-to-examination-on-the-bedroom-anek-suwannaphoom.jpg`} /> <br></br>
    <Logo to="/books-Reader">Reader</Logo > 
    </Title> 
       
    )
}
export default Home
import { useSelector } from "react-redux";
import { useState } from "react";
import SearchBar3 from "./SearchBar3";
import DeleteButton from "./buttons/DeleteButton";
import WatchedButton from "./buttons/WatchedButton";
import { StyledImage } from "../styles";



 const WatchList = () => {
     const [query, setQuery] = useState("");
  
    const movies = useSelector((state) => state.movies);
  
    const watchedList = movies
      .filter(
        (movie) =>
          !movie.watch &&
          movie.name.toLowerCase().includes(query.toLowerCase())
      )
      .map((movie) => (
        <div>
         <div movie={movie} key={movie.id}>
            <p>{movie.name}</p>
            <StyledImage src={movie.image}/>
          </div>
          <div>
            <WatchedButton movie={movie}>Read</WatchedButton>
            <DeleteButton movieId={movie.id}>Delete</DeleteButton>
          </div>
        </div>
      ));
  
    return (
      <div>
        <h2>{`Read List -- ${watchedList.length}`}</h2>
        <SearchBar3 setQuery={setQuery}></SearchBar3>
  
        <div>{watchedList.length === 0 ? "No Books to show!" : watchedList}</div>
      </div>
    );
  };
  
 
  export default WatchList
  
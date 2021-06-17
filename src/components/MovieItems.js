import { useSelector } from "react-redux";
import { useState } from "react";
import SearchBar3 from "./SearchBar3";
import DeleteButton from "./buttons/DeleteButton";

import { StyledImage } from "../styles";
import UnwatchedButton from "./buttons/UnwatchedButton";





 const Watched = () => {
    const [query, setQuery] = useState("");
    const movies = useSelector((state) => state.movies);
    const unwatchedList = movies
      .filter(
        (movie) =>
          movie.watch && //no need to write === when it is true 
          movie.name.toLowerCase().includes(query.toLowerCase())
      )
      .map((movie) => (
        <div>
          <div movie={movie} key={movie.id}>
            <p>{movie.name}</p>
            <StyledImage src={movie.image}/>
          </div>
          <div>
            <UnwatchedButton movie={movie}>Unraed</UnwatchedButton>
            <DeleteButton movieId={movie.id}>Delete</DeleteButton>
          </div>
        </div>
      ));
    return (
      <div>
        <h2>{`Unread List -- ${unwatchedList.length}`} </h2>
        <SearchBar3 setQuery={setQuery}></SearchBar3>
        {unwatchedList}
      </div>
    );
  };
  
  export default Watched
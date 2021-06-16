import React from "react";
import { Link } from "react-router-dom";
// Styling
import { SearchBarStyled } from "../styles";
import { FlexStyle } from "../styles";


const SearchBar1 = (props) => {
  return (
    
      <FlexStyle>
    <SearchBarStyled
      placeholder="Search for a book name"
      onChange={(event) => props.setQuery(event.target.value)}
    />
        
 <Link to="/new-book">
        <button class = "st">Add New Book</button>
      </Link>
    
      </FlexStyle>


  );
};

export default SearchBar1;
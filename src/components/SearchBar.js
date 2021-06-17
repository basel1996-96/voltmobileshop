import React from "react";
import { Link } from "react-router-dom";
// Styling
import { SearchBarStyled } from "../styles";
import { FlexStyle } from "../styles";

const SearchBar = (props) => {
  return (
    <FlexStyle>
      <SearchBarStyled
        placeholder="Search for a member name"
        onChange={(event) => props.setQuery(event.target.value)}
      />

      <Link to="/new-member">
        <button class="st">Add New Member</button>
      </Link>
    </FlexStyle>
  );
};

export default SearchBar;

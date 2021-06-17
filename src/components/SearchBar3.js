import { SearchBarStyled1 } from "../styles";

const SearchBar3 = (props) => {
    return (
      <SearchBarStyled1
        onChange={(event) => props.setQuery(event.target.value)}
        placeholder="Search for a book name"
      />
    );
  };
  
  export default SearchBar3;
  
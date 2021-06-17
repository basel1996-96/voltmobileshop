import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../store/actions";
import { InputFormStyled } from "../styles";

import AddButton from "./buttons/AddButton";

const InputForm = () => {
  const [movie, setMovie] = useState({
    name: "",
  });

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setMovie({ ...movie, [event.target.name]: event.target.value });
  };

  const restForm = () => {
    setMovie({
      name: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addMovie(movie));
    restForm();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <InputFormStyled
            name="name"
            value={movie.name}
            type="text"
            placeholder="Enter the Book name"
            onChange={handleChange}
          ></InputFormStyled>
         
        </label>
        <br></br>
        <label >
         
        <InputFormStyled
            type="text"
            name="image"
            value={movie.image}
            onChange={handleChange}
            placeholder="Book Link"
          />
        </label>
        <AddButton type="submit" value="Submit"></AddButton>
      
      </form>
    </div>
  );
};

export default InputForm;

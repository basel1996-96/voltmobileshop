import { NavB } from "../styles";
import { Logo, Logo1 } from "../styles";

const NavBar = () => {
  return (
    <NavB>
      <Logo1 to="/">
        <img
          class="discrption3"
          alt="mobile"
          src="https://i.pinimg.com/originals/dd/64/da/dd64da585bc57cb05e5fd4d8ce873f57.png"
        />
      </Logo1>
      <Logo to="/members">Memeber List</Logo>
      <Logo to="/books">Book List</Logo>
    </NavB>
  );
};

export default NavBar;

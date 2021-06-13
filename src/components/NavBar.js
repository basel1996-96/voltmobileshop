
import { NavB} from "../styles"
import {Logo,Logo1 } from "../styles"

const NavBar = () => {
    return ( 
      <NavB >         

       <Logo1 to="/"><img class="discrption3" alt="mobile"src= "https://www.logomoose.com/wp-content/uploads/2017/04/volt.png"/></Logo1>
       <Logo to="/products">Volt Mobile List</Logo > 
      </NavB>
    );
  };
  
  export default NavBar;
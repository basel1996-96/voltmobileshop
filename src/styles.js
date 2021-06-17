import { NavLink, Link } from "react-router-dom";
import styled ,{createGlobalStyle} from "styled-components"
export const GlobalStyle = createGlobalStyle `
body {
  
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
      }
`
export const Title = styled.div `
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
`
export const Title1 = styled.div `
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
`
export const Delilas = styled.img `
  display: block;
  margin-left:auto;
  margin-right: auto;
  width: 400px;
  display: flex;
  justify-content: center;
  border: solid 2px white;
border-radius: 20px;
box-shadow: 2px 2px 30px white;
`
export const Basel = styled.p `
background-color :cadetblue;
width: 800px;
font-style: italic;
font-size: 100px;
text-align: center;
border: solid 2px white;
border-radius: 20px;
box-shadow: 2px 2px 30px white
`
export const Discription = styled.p `
background-color: cadetblue;
  width: 500px;
  font-style: oblique;
  font-size:  60px; 
  text-align: center;
  margin-left:auto;
  margin-right: auto;
  border: solid 2px white;
border-radius: 20px;
box-shadow: 2px 2px 30px white;
  `
export const Photo = styled.img `
  display: block;
  margin-left:auto;
  margin-right: auto;
  width: 650px;
  display: flex;
  justify-content: center;
  border: solid 2px white;
border-radius: 20px;
box-shadow: 2px 2px 30px white;
`
export const Photo1 = styled.img `
  display: block;
  margin-left:auto;
  margin-right: auto;
  width: 650px;
  display: flex;
  justify-content: center;
  border: solid 2px white;
border-radius: 20px;
box-shadow: 2px 2px 30px white;
`
export const SearchBarStyled = styled.input `
padding : 0.5rem;
margin : 1px auto;
display : block;
width: 60% ;
text-align:center ;
border: solid 2px white;
border-radius: 20px;
box-shadow: 2px 2px 30px rebeccapurple;
margin-bottom: 60px;
font-size: 15px;
`
export const DeleteButtonStyled = styled.p`
padding : 0.5rem;
margin : 1rem auto;
display : block;
width: 25% ;
text-align:center ;
border: solid 2px black;
border-radius: 20px;
box-shadow: 3px 3px 30px rgb(173, 97, 97);
margin-bottom: 30px;

:hover {
    background: linear-gradient(to bottom, wheat 5%, #E94E2C 100%);
    background-color: wheat;
  }
  :active {
    position: relative;
    top: 1px;
  }

`
export const NavB = styled.nav`
background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
    


`
export const NavB1 = styled.nav`
background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
    text-align: center;
    


`

export const Logo = styled (NavLink)`
background-color :  cadetblue ;
padding : 15px;
color : white;
border:1px ;
border-radius: 20px;

&.active {
    background-color : green;
  }
`;
export const Logo1 = styled (NavLink)`

    
  }
`;
export const FlexStyle = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;
export const FlexStyleVer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const AddButtonSt = styled.button`
  display: inline-block;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  color: #fff;
  background-color: #00af91;
  text-decoration: none;
  font-size: 15px;
  font-family: "Roboto", sans-serif;
  
`;

export const ButtonLink = styled(Link)`
  padding: 5px;
  width: 25%;
`;
export const StyledButton = styled.button`

margin-left:auto;
margin-right:auto;

width: 60% ;

  box-shadow: inset 0px 1px 3px 0px #91b8b3;
  background: linear-gradient(to bottom, #768d87 5%, #6c7c7c 100%);
  background-color: #768d87;
  border-radius: 12px;
  border: 2px solid #566963;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 28px;
  font-weight: bold;
  padding: 0px;
  text-decoration: none;
  text-shadow: 0px -1px 0px #2b665e;
  margin-bottom: 20px;
  font-size: 25px;
  font-family: sans-serif;
  letter-spacing: 2px;


  :hover {
    background: linear-gradient(to bottom, #6c7c7c 5%,#6c7c7c 100%);
    background-color: #6c7c7c;
  }
  :active {
    position: relative;
    top: 1px;
  }
`;


export const AppWrapper = styled.div`
  max-width: 800px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
`;

export const WatchListWrapper = styled.div`
  display: flex;

  flex-wrap: wrap;
  max-width: 300px;
  margin: 30px auto;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
  float: left;
`;

export const UnwatchListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin: 30px auto;

  max-width: 300px;
  margin-right: 50px;
  // min-height: 150px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
  float: right;
`;
export const SearchBarStyled1 = styled.input`
  /* padding: 0.5rem; */
  margin: 1rem auto;
  display: inline;
  width: 100%;
`;

export const InputFormStyled = styled.input`
  text-align: center;
`;


export const WatchedButtonStyled = styled.button`
  display: inline-block;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  color: #fff;
  background-color: #00d0e2;
  text-decoration: none;
  font-size: 15px;
  font-family: "Roboto", sans-serif;
  // float: left;
`;

export const UnwatchedButtonStyled = styled.button`
  display: inline-block;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  color: #fff;
  background-color: #7f78d0;
  text-decoration: none;
  font-size: 15px;
  font-family: "Roboto", sans-serif;
  // float: right;
`;

export const DeleteButtonStyled1 = styled.button`
  display: inline-block;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  color: #fff;
  background-color: #af001e;
  text-decoration: none;
  font-size: 15px;
  font-family: "Roboto", sans-serif;
  // float: right;
`;

export const InlineButtons = styled.div`
 
  flex-direction: row;
`;
export const StyledImage = styled.img`

width:150px;
height : 150px;

`
export const Button = styled.button`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 100%;
  text-align: center;
  border: solid 2px black;
  border-radius: 20px;
  box-shadow: 3px 3px 30px rgb(173, 97, 97);
  margin-bottom: 30px;

  :hover {
    background: linear-gradient(to bottom, wheat 5%, #e94e2c 100%);
    background-color: wheat;
  }
  :active {
    position: relative;
    top: 1px;
  }
`;
export const CardStyle = styled.div`
  width: 100%;
  border: 2px solid;`
;

export const DeleteButton = styled.button`
  background-color: #e99497;
  color: black;
  border: 2px solid #e99497;
  border-radius: 5px;
  margin: 10px;

  :hover {
    background-color: #810000;
  }
`;
export const ListStyle = styled.div`
  width: 100%;
  /* border: 2px solid; */
`;
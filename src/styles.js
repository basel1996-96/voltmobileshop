import {  NavLink } from "react-router-dom"
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

`
export const NavB = styled.nav`
background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
    


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


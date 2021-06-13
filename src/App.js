import React, { useState} from "react";
import {ThemeProvider} from "styled-components";
import { lightTheme, darkTheme } from "./components/Themes"
import {Title, GlobalStyle} from "./styles";
 import DetailedIteam from "./components/DetailedIteam"
import Home from "./components/Home"
import './App.css';
import ProductlList from "./components/ProductlList";
import {Route,Switch} from "react-router"
import NavBar from "./components/NavBar"



function App() {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>   
      <GlobalStyle/>

      <div className="App">
          <img  alt="power"onClick={themeToggler}src ={`https://i2.wp.com/css-tricks.com/wp-content/uploads/2021/02/dry-css-dark-mode.jpg?fit=1200%2C600&ssl=1`} className = "dark" />
          </div>
          <NavBar/>
  <Title>
 
    <Switch>
    <Route exact path = "/">
    < Home />
    </Route>

  
    <Route path="/products/:productID">
   <DetailedIteam 
   
   
    />
     </Route>
   <Route path = "/products">
      <ProductlList  
      
      />
  
   </Route>
    </Switch>
    </Title>      

</ThemeProvider>
    )
  }
export default App;

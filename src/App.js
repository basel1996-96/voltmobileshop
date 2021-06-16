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
import NewProduct from "./components/NewProduct";
import BookList from "./components/BookList";
import DetailedBook from "./components/DetailedBook" 
import NewBook from "./components/NewBook";


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

    <Route path="/products/:productSlug/edit">
          <NewProduct />
        </Route>
        <Route path="/books/:bookSlug/edit">
          <NewBook />
        </Route>
        <Route exact path = "/new-book">
    < NewBook />
    </Route>

        <Route exact path = "/new-product">
    < NewProduct />
    </Route>
  
    <Route path="/products/:productSlug">
   <DetailedIteam />

   </Route>
   <Route path="/books/:bookSlug">
   <DetailedBook />

   </Route>
   <Route path = "/books">
      <BookList/>
  
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

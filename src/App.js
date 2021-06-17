import React, { useState} from "react";
import {ThemeProvider} from "styled-components";
import { lightTheme, darkTheme } from "./components/Themes"
import {Title, GlobalStyle} from "./styles";
 import DetailedIteam from "./components/DetailedIteam"
import Home from "./components/Home"
import './App.css';
import ProductlList from "./components/ProductlList";
import {Route,Switch} from "react-router"

import NewProduct from "./components/NewProduct";
import BookList from "./components/BookList";
import DetailedBook from "./components/DetailedBook" 
import NewBook from "./components/NewBook";
import Apps from "./components/Apps"
import App1 from "./App1"
import NavBar from "./components/NavBar";



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

    <Route path="/Members/:productSlug/edit">
          <NewProduct />
        </Route>
        <Route path="/books/:bookSlug/edit">
          <NewBook />
        </Route>
        <Route exact path = "/new-book">
    < NewBook />
    </Route>

        <Route exact path = "/new-member">
    < NewProduct />
    </Route>
  
    <Route path="/members/:productSlug">
   <DetailedIteam />

   </Route>
   <Route path="/books/:bookSlug">
   <DetailedBook />

   </Route>
   <Route path = "/books">
      <BookList/>
      </Route>
     
   <Route path = "/books-Reader">
   <Apps/>
      </Route>

      <Route path = "/books-Employee">
      <App1 />
      </Route>
    
   <Route path = "/members">
      <ProductlList  
      
      />
  
   </Route>
    </Switch>
    </Title>      

</ThemeProvider>
    )
  }
export default App;

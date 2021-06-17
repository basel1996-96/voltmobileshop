import WatchList from "./Watchlist";
import Watched from "./Watched";
import InputForm from "./InputForm";
import {
  GlobalStyle,
  AppWrapper,
  WatchListWrapper,
  UnwatchListWrapper,Title1,
} from "../styles";

import movies from "../movies";



function Apps() {
  
      

 return (
  

   <Title1>
  
    <AppWrapper>
      
      <GlobalStyle />
      <InputForm />
      <WatchListWrapper>
        {movies.length > 0 ? <WatchList /> : "No Movies To Show"}
      </WatchListWrapper>
      <UnwatchListWrapper>
        <Watched />
      </UnwatchListWrapper>
    </AppWrapper>
    </Title1>
   
  );
 }
  export default Apps;
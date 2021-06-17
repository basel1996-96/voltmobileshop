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
  

   <Title1><br></br>
   <img className="pi" src="https://www.jing.fm/clipimg/detail/54-547669_we-can-do-it-motivation-logo-clipart.png"/><br></br>
   <h1 className="ya">Today's Motivational Quote</h1><br></br>
  <h1 className="da">** Work Unitil You No Longer Need To Inroduce Your Self ** </h1>
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
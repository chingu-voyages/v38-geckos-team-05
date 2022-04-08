import {Main, Div, Container, H1} from "./style.js";
import SingleQuestion from "../../components/question/SingleQuestion";
import AllUserQuestions from "../../components/question/AllUserQuestions";
import RecentUserQuestions from "../../components/question/RecentUserQuestions";
import Pagination from "../../components/pagination/Pagination";
import HomeButton from "../../components/homebutton/HomeButton"

const User = ()=>{

    return(
     <Main>
      <HomeButton/>
      <H1>Simple AMA</H1>
      <Container>      
        <Div>
          <AllUserQuestions/>
          <Pagination/>
        </Div>
        <RecentUserQuestions/>
      </Container>  
     </Main>
    );
}
export default User;
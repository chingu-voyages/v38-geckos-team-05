import {Container,H1} from "./style.js";
import SingleQuestion from "../../components/question/SingleQuestion";
import AllUserQuestions from "../../components/question/AllUserQuestions";
import RecentUserQuestions from "../../components/question/RecentUserQuestions";
import Pagination from "../../components/pagination/Pagination";

const User = ()=>{

    return(
     <>
      <Container>
        <H1>Simple AMA</H1>
        <SingleQuestion/>
        <AllUserQuestions/>
        <Pagination/>
        <RecentUserQuestions/>
      </Container>  
     </>
    );
}
export default User;
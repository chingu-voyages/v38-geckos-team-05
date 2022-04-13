import {Main, Div, Container, H1, Img, Textarea, Input, Button, SolidButton} from "./style.js";
import RecentUserQuestions from "../../components/question/RecentUserQuestions";
import HomeButton from "../../components/homebutton/HomeButton";
import {Link} from "react-router-dom";
import UserProfilePic from "../../profile-images/user-milad-farhani.jpg";
const Ask = ()=>{

    return(
     <Main>
      <HomeButton/>
      <H1>Ask Farhani</H1>
      <Img src={UserProfilePic} alt="Farhani's Profile Picture"/>
      <Container>      
        <Div>
          <form>
            <Textarea rows="20" cols="50" placeholder="Type your question here"></Textarea>
            <Input placeholder="Topic or Category"/>
            <SolidButton type="submit">Submit Question</SolidButton>
          </form>
          <Link to="/user">
            <Button>View All Farhani's Question</Button>
          </Link>
        </Div>
        <RecentUserQuestions/>
      </Container>  
     </Main>
    );
}
export default Ask;
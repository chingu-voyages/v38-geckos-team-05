import {A, Container, ButtonSolid} from "./style/question";
import {Link} from "react-router-dom";

const RecentUserQuestions = ()=>{
    return (
      <Container>
        <h2>Recent User's Questions</h2>
        <div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <A href="../Singlequestion">View Answer</A>
          <hr/>
        </div>
        <div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <A href="../Singlequestion">View Answer</A>
          <hr/>
        </div>
        <div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <A href="../Singlequestion">View Answer</A>
          <hr/>
        </div>
        <div>
          <Link to="../ask">
            <ButtonSolid>
              Ask a Question
            </ButtonSolid>
          </Link>
        </div>
      </Container>
    );
}
export default RecentUserQuestions;
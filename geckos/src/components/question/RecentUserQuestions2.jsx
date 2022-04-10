import {A, Container, Button, Div} from "./style/question";
const RecentUserQuestions2 = ()=>{
    return (
      <Container>
        <Div>
        <h2>Ricardo's Recent Questions</h2>
        </Div>
        <div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <A href="#">View Answer</A>
          <hr/>
        </div>
        <div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <A href="#">View Answer</A>
        </div>
        <Button>
            View All Ricardo's Questions
        </Button>
      </Container>
    );
}
export default RecentUserQuestions2;
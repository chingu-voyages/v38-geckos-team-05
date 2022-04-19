import {Container, Button} from "./style/question";
import {Link} from "react-router-dom";
const AllUserQuestions = ()=>{
    return (
      <Container>
      <h1>All User's Questions</h1>
      <div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <Link to="../Singlequestion">
          <Button>
            View Answer
          </Button>
        </Link>
        <hr/>
      </div>
      <div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <Link to="../Singlequestion">
          <Button>
            View Answer
          </Button>
        </Link>
        <hr/>
      </div>
      <div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <Link to="../Singlequestion">
          <Button>
            View Answer
          </Button>
        </Link>
        <hr/>
      </div>
      <div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <Link to="../Singlequestion">
          <Button>
            View Answer
          </Button>
        </Link>
        <hr/>
      </div>
      <div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <Link to="../Singlequestion">
          <Button>
            View Answer
          </Button>
        </Link>
        <hr/>
      </div>
      </Container>
    );
}
export default AllUserQuestions;
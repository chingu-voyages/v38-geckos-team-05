import {Container, Button} from "./style/question";
import {Link} from "react-router-dom";
const AllUserQuestions = (data)=>{
    return (
      <Container>
          {data.data.map((item) => (
          <>
            <p>{item.title}</p>
            <p>{item.body}</p>
            <Link to="../Singlequestion">
              <Button>
                View Answer
              </Button>
            </Link>
            <hr/>
          </>
        ))}        
      </Container>
    );
}
export default AllUserQuestions;
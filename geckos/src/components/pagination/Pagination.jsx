import {Container, Button} from "./style/pagination";
import {Link} from "react-router-dom";

const Pagination = ()=>{
  
    return (
      <Container>
        <Link to="2">
          <Button>
            Previous
          </Button>
        </Link>
        <Link to="../">
          <Button disabled>
            Next
          </Button>
        </Link>
      </Container>
    );
}
export default Pagination;
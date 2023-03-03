import {Container, Button} from "./style/homebutton";
import {Link} from "react-router-dom";

const HomeButton = ()=>{
    return (
      <Container>
        <Link to="/">
          <Button>
	        Home
          </Button>
        </Link>
      </Container>
    );
}

export default HomeButton;
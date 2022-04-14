import {Ul,List,H2,Contianer} from "./style/amaStyle";
import {Link} from "react-router-dom";
const TrendingAma = ()=>{
  
    return (
      <Contianer>
              <H2>Trending  AMA'S</H2>
        <Ul>
          <List>
           <Link to="/Singlequestion">1. Mohamed Ahmed</Link>
          </List>  
          <List>
           <Link to="/Singlequestion">1. Mohamed Ahmed</Link>
          </List>   
          <List>
           <Link to="/Singlequestion">1. Mohamed Ahmed</Link>
          </List>   
          <List>
           <Link to="/Singlequestion">1. Mohamed Ahmed</Link>
          </List>    
        </Ul>
        </Contianer>
    );
}
export default TrendingAma;
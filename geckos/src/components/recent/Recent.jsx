import {Ul,List,H2,Contianer} from "./style/recent";
import {Link} from "react-router-dom";
const Recent = ()=>{
  
    return (
      <Contianer>
       <H2>Recent AMA'S</H2>
        <Ul>
          <List>
           <Link to="">1. Mohamed Ahmed</Link>
          </List>  
          <List>
           <Link to="">1. Mohamed Ahmed</Link>
          </List>   
          <List>
           <Link to="">1. Mohamed Ahmed</Link>
          </List>   
          <List>
           <Link to="">1. Mohamed Ahmed</Link>
          </List>    
        </Ul>
      </Contianer>
    );
}
export default Recent;
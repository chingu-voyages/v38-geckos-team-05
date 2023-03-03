import {Ul,List,H2,Contianer} from "./style/recent";
import {Link} from "react-router-dom";



const Recent = ( data )=>{
  return (
    <Contianer>
     <H2>Recent AMA'S</H2>
      <Ul>
        {data.topUsers.map(item => (
          <List>
            <Link to={`/${item.id}`}>{item.id}. <span>{item.name}</span></Link>
          </List>
        ))}   
      </Ul>
    </Contianer>
  );
}
export default Recent;
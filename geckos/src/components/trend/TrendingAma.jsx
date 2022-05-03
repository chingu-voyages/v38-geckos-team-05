import {Ul,List,H2,Contianer} from "./style/amaStyle";
import {Link} from "react-router-dom";
const TrendingAma = ( data )=>{
  
    return (
      <Contianer>
              <H2>Trending  AMA'S</H2>
        <Ul>
          {data.topUsers.map(item => (
            <List>
              <Link to={item.username}>{item.id}. <span>{item.name}</span></Link>
            </List>
          ))}    
        </Ul>
        </Contianer>
    );
}
export default TrendingAma;
import {useState, useEffect } from 'react';
import {Ul,List,H2,Contianer} from "./style/recent";
import {Link} from "react-router-dom";

function RoutedUsers( data ) {
  const [usersdata, setData] = useState([]); 

  useEffect(() => { 
    const fetchData = () => {
      fetch('http://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((usersdata) => { setData(usersdata) })
      };
      fetchData();
  },[]);
  console.log(usersdata);
}

const Recent = ( data )=>{
  let usersdata = RoutedUsers();

    return (
      <Contianer>
       <H2>Recent AMA'S</H2>
        <Ul>
          {data.topUsers.map(item => (
            <List>
              <Link to="/user">{item.id}. <span>{item.name}</span></Link>
              {/*<Link to={`/${item.id}`}>{item.id}. <span>{item.name}</span></Link>*/}
            </List>
          ))}   
        </Ul>
      </Contianer>
    );
}
export default Recent;
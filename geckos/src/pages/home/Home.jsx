import {Container,H1,ContainerForm,GridContainer,Input,Form,SearchResult} from "./style.js";
import TrendingAma from "../../components/trend/TrendingAma";
import TrendingTopics from "../../components/trend/TrendingTopics";
import Recent from "../../components/recent/Recent";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]); 
  const [searchInput, setSearchInput] = useState("");
  const filteredNames = [];

  useEffect(() => { 
    const fetchData = () => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((data) => { setData(data) })
      };
      fetchData();
  },[]);

// Search Feature
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  if (searchInput.length > 0) {
    console.log(searchInput)
    data.filter((user) => {
      if (user.name.toUpperCase().indexOf(searchInput.toUpperCase())> -1){
        filteredNames.push(user);
        console.log(user.id)
      }
      return filteredNames
    })
  }  


  return(
    <>
      <Container>
         <H1>Simple AMA</H1>       
         <Form>
           <ContainerForm>
            <Input 
              type="search" 
              placeholder="search your AMA"
              onChange={handleChange}
              value={searchInput} 
            />     
           </ContainerForm>
         </Form>
         <SearchResult>
          {
            filteredNames.map((user) => {
              return(
                <div>
                    <Link to={`/${user.id}`}>{user.name}</Link>
                </div>
              )
            })
          }
          </SearchResult>
        <GridContainer>
          
        <TrendingAma topUsers = { data } />
        <TrendingTopics topUsers ={ data } />
        <Recent topUsers = { data } />
        </GridContainer>  
      </Container>  
     </>
  );
}

export default Home;
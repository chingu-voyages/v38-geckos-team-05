import {Container,H1,ContainerForm,GridConatiner,Input,Form} from "./style.js";
import TrendingAma from "../../components/trend/TrendingAma";
import TrendingTopics from "../../components/trend/TrendingTopics";
import Recent from "../../components/recent/Recent";
import React, { useState, useEffect } from 'react';

function Home() {
  const [data, setData] = useState([]); 

  useEffect(() => { 
    const fetchData = () => {
      fetch('http://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((data) => { setData(data) })
      };
      fetchData();
  },[]);

  return(
    <>
      <Container>
         <H1>Simple AMA</H1>       
         <Form>
           <ContainerForm>
            <Input type="search" placeholder="search your AMA"/>     
           </ContainerForm>
         </Form>
        <GridConatiner>
        <TrendingAma topUsers = { data } />
        <TrendingTopics topUsers ={ data } />
        <Recent topUsers = { data } />
        </GridConatiner>  
      </Container>  
     </>
  );
}

export default Home;
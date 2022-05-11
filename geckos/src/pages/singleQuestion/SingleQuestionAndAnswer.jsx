import React from "react";
import { Main, Container, Div, A, Button, H4 } from "./style.js";
import HomeButton from "../../components/homebutton/HomeButton";
import RecentUserQuestions2 from "../../components/question/RecentUserQuestions2.jsx";
import SingleQuestion2 from "../../components/question/SingleQuestion2.jsx";
import SingleAnswer from "../../components/question/SingleAnswer.jsx";


import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

function useFetch(url) {
  const [loadingData, setLoadingData] = useState(false);
  const [data, setData] = useState(null);
  useEffect(() => { 
    const fetchData = async() => {
      try{
        setLoadingData(true);
        fetch(url)
          .then(response => response.json())
          .then((data) => { setData(data) })
        setLoadingData(false);
      } catch(error) {
        console.log("error", error);
      }
    };
    fetchData();
  },[]);
  return[loadingData, data];
}

function SingleQuestionAndAnswer() {
  const [isDataLoading, data] = useFetch('http://jsonplaceholder.typicode.com/posts');
  let params = useParams();
  console.log(data);
  console.log(typeof(data))

if (isDataLoading || !data){
    return (
      <Main>
        <HomeButton/>
        <p>Data is loading...</p>
      </Main>
    )
  }
  else {
    return (
      <Main>
        <HomeButton />
        
        <H4>Dummy question { params.postID } Heading</H4>
        <Container>
          <Div>
            <SingleQuestion2 data = { (data.filter((post) => post.id === parseInt(params.postID, 10) )) } />
            <SingleAnswer data = { (data.filter((post) => post.id === parseInt(params.postID, 10) )) } />
            <Div>
            <span>
              <Button>Category 1</Button>
              <Button>Topic 2</Button>
              <Button>Topic 1</Button>
            </span>
          </Div>
          </Div>
          <RecentUserQuestions2 />
        </Container>
        <Div>
          <A>Go Home</A>
        </Div>
      </Main>
    );
  }
};

export default SingleQuestionAndAnswer;

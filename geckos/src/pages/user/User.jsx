import {Main, Div, Container, H1} from "./style.js";
import AllUserQuestions from "../../components/question/AllUserQuestions";
import RecentUserQuestions from "../../components/question/RecentUserQuestions";
import Pagination from "../../components/pagination/Pagination";
import HomeButton from "../../components/homebutton/HomeButton";


import {Link, useParams} from "react-router-dom";
import {useState, useEffect} from "react";

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

function User() {
  const [isDataLoading, data] = useFetch('http://jsonplaceholder.typicode.com/posts');

  let params = useParams();

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
        <HomeButton/>
        <H1>Simple AMA: Influencer { params.userID }</H1>
        <Container>      
          <Div>
            <AllUserQuestions data= { (data.filter((post) => post.userId === parseInt(params.userID, 10) )) }/>
            <Pagination/>
          </Div>
          <RecentUserQuestions/>
        </Container>  
      </Main>
    )
  }
}

export default User;
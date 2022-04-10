import React from "react";
import { Main, Container, Div, A, Button, H4 } from "./style.js";
import HomeButton from "../../components/homebutton/HomeButton";
import RecentUserQuestions2 from "../../components/question/RecentUserQuestions2.jsx";
import SingleQuestion2 from "../../components/question/SingleQuestion2.jsx";
import SingleAnswer from "../../components/question/SingleAnswer.jsx";

const SingleQuestionAndAnswer = () => {
  return (
    <Main>
      <HomeButton />
      <H4>Dummy question 1 Heading</H4>
      <Container>
        <Div>
          <SingleQuestion2 />
          <SingleAnswer />
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
};

export default SingleQuestionAndAnswer;

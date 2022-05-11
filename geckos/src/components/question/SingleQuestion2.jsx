import { Container } from "./style/question";

const SingleQuestion2 = (data) => {
  return (
    <Container>
      {data.data.map((item) => (
        <>
          <p>{item.title}</p>
          <p>{item.body}</p>
        </>
      ))}
    </Container>
  );
};
export default SingleQuestion2;

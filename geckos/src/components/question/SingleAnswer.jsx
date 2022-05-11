import {  H1, Container2 } from "./style/question";

const SingleQuestion2 = (data) => {
  return (
    <Container2 >
      <H1>Answer</H1>
      {data.data.map((item) => (
        <>
          <p>{item.body}</p>
        </>
      ))}
      <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam omnis veniam quod cumque pariatur fugit quo non. Est quibusdam velit mollitia eaque rem. Fugiat odio deserunt sit obcaecati veritatis non.
      </p>
      <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam    quisquam, quisquam. Lorem ipsum dolor sit amet, consectetur adipisicing. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam    quisquam, quisquam. Lorem ipsum dolor sit amet, consectetur adipisicing, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam    quisquam, quisquam. Lorem ipsum dolor sit amet, consectetur adipisicing, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam    quisquam, quisquam. Lorem ipsum dolor sit amet, consectetur adipisicing, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam    quisquam, quisquam. Lorem ipsum dolor sit amet, consectetur adipisicing 
      </p>
      <p> 
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam    quisquam, quisquam. Lorem ipsum dolor sit amet, consectetur adipisicing       
      </p>
    </Container2>
  );
};
export default SingleQuestion2;
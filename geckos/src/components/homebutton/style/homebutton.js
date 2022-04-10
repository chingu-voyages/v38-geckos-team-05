import styled from "styled-components";

export const Container = styled.section`
  padding: 2em;
`;
export const Button = styled.button`
  padding: 15px 40px;
  color: #1864ab;
  border: 2px #1864ab solid;
  border-radius: 30px;
  background-color: #fff;
  @media screen and (max-width:650px){
    padding: 15px 20px;
  }
  &:hover {
  	background-color: #1864ab;
  	color: #fff;
  }
`;


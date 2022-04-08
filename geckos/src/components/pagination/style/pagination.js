import styled from "styled-components";

export const Container = styled.section`
  display flex;
  justify-content: space-between;
  padding: 2em;
`;
export const Button = styled.button`
  padding: 15px 50px;
  color: #1864ab;
  border: 2px #1864ab solid;
  background-color: #fff;
  @media screen and (max-width:650px){
    padding: 15px 20px;
  }
  &:hover {
  	background-color: #1864ab;
  	color: #fff;
  }
  &:disabled {
    opacity: 0.5;
  }
`;

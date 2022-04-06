import styled from "styled-components";

export const Container = styled.section`
  padding: 2em;
   > * {
    margin-bottom: 2em;
  }
  > div > * {
    margin-bottom: 2em;
  }
`;

export const A = styled.a`
  display: inline-block;
  padding: 15px 50px;
  color: #1864ab;
  border: 2px #1864ab solid;
  background-color: #fff;
  @media screen and (max-width:650px){
    padding: 15px 20px;
  }
`;

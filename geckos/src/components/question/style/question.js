import styled from "styled-components";

export const Container = styled.section`
  padding: 0.3em;
   > * {
    margin-bottom: 2em;
  }
  > div > * {
    margin-bottom: 2em;
  }
`;
export const Div = styled.div`
  padding-top: 1em;
  `;

export const Container2 = styled.section`
  padding: 2em;
   > * {
    margin-bottom: 2em;
  }
  > div > * {
    margin-bottom: 2em;
  }
  background-color: #ccd2df;
`;

export const H1 = styled.h1`
  width:100%;
  text-align:left;
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
  @media screen and (max-width:425px){
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Button = styled.button`
  padding: 15px 40px;
  color: #1864ab;
  border: 2px #1864ab solid;
  background-color: #fff;
  margin-bottom: 30px;
  @media screen and (max-width:768px){
    padding: 13px 10px;
  }
  @media screen and (max-width:425px){
    width: 100%;
  }
  &:hover {
  	background-color: #1864ab;
  	color: #fff;
  }
`;

export const ButtonSolid = styled.button`
  padding: 15px 40px;
  color: #fff;
  border: 2px #1864ab solid;
  background-color: #1864ab;
  @media screen and (max-width:650px){
    padding: 15px 20px;
  }
  &:hover {
    background-color: #fff;
    color: #1864ab;
  }
`;

import styled from "styled-components";

export const Main = styled.main`
  width:100%;
  height:100%;
  padding:1em 4em;
@media screen and (max-width:650px){
  padding: 2em 2.5em;
`
export const Container = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
@media screen and (max-width:650px){
  display: block;
}
`; 

export const H4 = styled.h4`
  width:100%;
  padding:0.5em 0;
  font-Weight: bold;
  text-align:center;
`;

export const Div = styled.div`
  padding: 1em 1em;
  @media screen and (max-width:650px){
    padding: 0px 0px;
  }
`
export const A = styled.a`
  display: flex;
    justify-content: center;
    align-items: center;
  width: 64%;
  margin-bottom: 20px;
  padding: 15px 50px;
  color: #1864ab;
  border: 2px #1864ab solid;
  background-color: #ccd2df;
  @media screen and (max-width:650px){
    padding: 15px 20px;
  }
  @media screen and (max-width:425px){
    padding: 15px 20px;
    width: 100%;
  }
  &:hover {
  	background-color: #1864ab;
  	color: #fff;
  }
`;

export const Button = styled.button`
  padding: 15px 40px;
  color: #1864ab;
  margin-right: 10px;
  border: 2px #1864ab solid;
  border-radius: 30px;
  background-color: #fff;
  @media screen and (max-width:768px){
    padding: 10px 15px;  
  }
  @media screen and (max-width:425px){
    margin-top: 10px;
  }
  @media screen and (max-width:375px){
    padding: 5px 5px;
    margin-right: 5px;
  }
  &:hover {
  	background-color: #1864ab;
  	color: #fff;
  }
`;
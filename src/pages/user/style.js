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

export const H1 = styled.h1`
  width:100%;
  text-align:center;
`;

export const Div = styled.div`
  padding: 1em 3em;
`
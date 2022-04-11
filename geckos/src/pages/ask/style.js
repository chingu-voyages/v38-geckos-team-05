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

export const Img = styled.img`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
`

export const Div = styled.div`
  padding: 1em 3em;
`

export const Textarea = styled.textarea`
  display : block;
  padding : 10px;
  margin-bottom: 20px;
  width   : 100%;
  border: 2px solid #ECF4FE;
  overflow: auto;
`

export const  Input = styled.input`
  width:100%;
  border:2px solid #ECF4FE;
  font-size:1.2em;
  padding:0.3em 0.2em;
  margin-bottom: 20px;
  &:focus {
    border:2px solid #4285F4;
  }
`;

export const Button = styled.button`
  padding: 15px 40px;
  color: #1864ab;
  border: 2px #1864ab solid;
  background-color: #fff;
  width: 100%;
  margin-bottom: 20px;
  @media screen and (max-width:650px){
    padding: 15px 20px;
  }
  &:hover {
    background-color: #1864ab;
    color: #fff;
  }
`;
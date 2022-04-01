import styled from "styled-components";
 export const Ul = styled.ul`
  width:70%;
  display:block;
  margin:auto;
  margin-top:1em;
  margin-bottom:1em;

  & li:nth-child(2n){
       background-color:#DAE7FD;
  }
  @media screen and (max-width:650px){
    width:90%;
  }
`;
export const List = styled.li`
width:100%;
display:block;
background-color:#F0F5FE;
padding:1em;
border:1px solid #fff;

`; 
export const H2  = styled.h2`

text-align:center;
`;
export const Contianer = styled.section`
   width:100%;
`;
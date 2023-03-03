import styled from "styled-components";

export const Container = styled.section`
 width:100%;
 height:100%; 
 padding:1em;
`; 
export const Form = styled.form`
 width:40%;
 display:flex;
 align-items:center;
 justify-content:center;
 background-color:#f00;
 margin:auto;
 margin-top:1em;
@media screen and (max-width:650px){
     width:70%;
}
 `;
export const Label = styled.label`
text-align:center;
width:100%;
`;
export const  Input = styled.input`
width:100%;
border:2px solid #ECF4FE;
font-size:1.2em;
padding:0.3em 0.2em;
&:focus {
    border:2px solid #4285F4;

}
`;
export const  SearchResult = styled.div`
text-align: center;
padding-top: 30px;
padding-bottom: 30px;
& div {
  padding-bottom: 20px;
}
`;

export const ContainerForm = styled.div`
width:100%;
`;
export const H1 = styled.h1`
  width:100%;
  text-align:center;
`;
export const GridContainer = styled.div`
    width:90%;
    height:100%;
    display:grid;
    grid-template-columns:repeat(2,1fr);
    justify-conent:space-around;
    margin:auto;
    margin-top:1.5em;
    @media screen and (max-width:650px){
        display:block;

    }
`;
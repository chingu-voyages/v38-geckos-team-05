import {Container,H1,ContainerForm,GridConatiner,Input,Form} from "./style.js";
import TrendingAma from "../../components/trend/TrendingAma";
import TrendingTopics from "../../components/trend/TrendingTopics";
import Recent from "../../components/recent/Recent"
const Home = ()=>{

    return(
     <>
      <Container>
         <H1>Simple AMA</H1>       
         <Form>
           <ContainerForm>
            <Input type="search" placeholder="search your AMA"/>     
           </ContainerForm>
         </Form>
        <GridConatiner>
        <TrendingAma/>
        <TrendingTopics/>
        <Recent/>
        </GridConatiner>  
      </Container>  
     </>
    );
}
export default Home;
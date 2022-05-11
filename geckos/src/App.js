import { ThemeProvider } from "styled-components";
import Global from "./style/Global";
import {Routes,Route} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import User from "./pages/user/User.jsx"
import SingleQuestionAndAnswer from "./pages/singleQuestion/SingleQuestionAndAnswer.jsx";
import Ask from "./pages/ask/Ask.jsx";

function App() {
  const theme = {
    color:{
      bg:"#252525",
    },
  };

  return (
    <>
    <ThemeProvider  theme={theme}>
    <Global/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Singlequestion" element={<SingleQuestionAndAnswer />} />
        <Route path="/ask" element={<Ask />} />
        <Route path=":userID" element={<User />} />
        <Route path=":userID/:postID" element={<SingleQuestionAndAnswer />} />
        <Route path="*" element={ <p>Nothing here!</p> } />
    </Routes>
    </ThemeProvider>
    </>
  );
}

export default App;

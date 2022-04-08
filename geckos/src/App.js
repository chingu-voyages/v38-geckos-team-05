import { ThemeProvider } from "styled-components";
import Global from "./style/Global";
import {Routes,Route} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import User from "./pages/user/User.jsx"

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
        <Route path="/user" element={<User />} />
    </Routes>
    </ThemeProvider>
    </>
  );
}

export default App;

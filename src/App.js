import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Template from "./pages/Template";
import 'bootstrap-icons/font/bootstrap-icons.css';
import About from "./pages/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Template/>}>
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Route>
      </Routes>
        
    </>
  );
}

export default App;

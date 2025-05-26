import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Template from "./pages/Template";
import 'bootstrap-icons/font/bootstrap-icons.css';
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Template/>}>
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Route>
      </Routes>
        
    </>
  );
}

export default App;

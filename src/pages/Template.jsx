import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import "../template.css"

const Template=()=>{
    return(
        <>
        <header><Navbar/></header>
        <Outlet/>
        <footer><Footer/></footer>
        </>
    )
    
}

export default Template;
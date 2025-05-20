import { useLocation } from "react-router-dom";


const Navbar=()=>{
let location=useLocation();
let currentPath=location.pathname;

    return(
    <>
    <nav className="navbar navbar-expand-md fixed-top" style={{"background-color":"var(--color-light)", zIndex: 1030 }}>
    <div className="container-fluid">
    <a className="navbar-brand" href="#">Portfolio</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <div className=" w-100 d-flex align-items-center justify-content-center">
      <ul className=" w-50 navbar-nav mb-2 mb-lg-0 mx-md-5 align-items-center justify-content-evenly">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/" 
          style={currentPath === '/' ? { fontWeight: 'bold', color: 'var(--color-back)' } : {}}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about"
          style={currentPath === '/about' ? { fontWeight: 'bold', color: 'var(--color-back)' } : {}}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/skills"
          style={currentPath === '/skills' ? { fontWeight: 'bold', color: 'var(--color-back)' } : {}}
          >
            Skills
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/projects">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">Contact</a>
        </li>
      </ul>
      </div>
    </div>
  </div>
</nav>
</>
)}

export default Navbar;
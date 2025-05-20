import Social from "./Social";


const Footer=()=>{
    return(
       <div className="vw-100 py-4 text-center text-light d-flex justify-content-center row m-0" style={{"backgroundColor":"var(--color-dark)"}}>
            <Social />
            <p className="mt-3">© 2025 Aksayaa. All rights reserved.</p>
        </div>
    )
}

export default Footer;
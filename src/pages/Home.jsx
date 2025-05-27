

const Home=()=>{
   return(
    <>
    <div className="container vh-100 mt-5">
        <div className="row h-100 align-items-center">
          <div className="col-12 col-md-6 py-4 ps-5">
            <h4 >Hi I'm</h4>
            <h1 className="head" >Aksayaa M</h1>
            <h3 className="mb-4 type">Web Developer..</h3>
            <a href="/about" className="btn btn-outline-custom me-4" role="button">About Me</a>
            <a href="/contact" className="btn btn-outline-custom" role="button">Contact</a>
          </div>

          <div className="col-12 col-md-6 d-flex justify-content-start align-items-center p-md-0 p-3 ">
            <img
              src="/girl_laptop.png"
              className="img-fluid"
              alt="A girl with a laptop"
              style={{ width: "75%", maxWidth: "100%" }}
            />
          </div>
        </div>
      </div>
    </>
   )
}

export default Home;
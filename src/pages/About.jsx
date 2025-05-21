import "../about.css"

const About=()=>{
    return(
        <>
        <div className="m-3 min-vh-100 mt-5">
            <div className="row min-vh-100 align-items-center">
            <div className="col-12 col-md-5 d-flex justify-content-center">
                <img src="./home_photo_small.png" className="image-fluid pt-3" style={{ width: "210px", maxWidth: "55%" , "z-index":"2"}} alt="profile photo"/>
                <div className="photo_back1"></div>
                <div className="photo_back2"></div>
            </div>
            <div className="col-12 col-md-7 align-items-center p-5">
                <h1 className="head">About Me</h1>
                <p>I'm Aksayaa, a developer who enjoys turning ideas into practical web solutions.
                     I approach every project with a focus on clarity and usability — planning the flow, building with intent, and refining along the way.
                     I like seeing how each line of code comes together to create something useful, and I'm always exploring better ways to build and improve.
                     My work reflects not just what I know today, but how willing I am to grow tomorrow.
                </p>
                <h6 className="fw-normal"><span>Gender: </span>Female</h6>
                <h6 className="fw-normal"><span>DOB: </span>16/09/2003</h6>
                <h6 className="fw-normal"><span>Address: </span>Ondipudur, Jallimedu, Coimbatore</h6>
                <h6 className="fw-normal"><span>Phone: </span>9384596296</h6>
                <h6 className="fw-normal"><span>Gmail: </span>aksayaam2003@gmail.com</h6>
            </div>
            </div>
        </div>
        </>
    )
}

export default About;
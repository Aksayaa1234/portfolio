import "../skills.css"

const Skills = () => {
    const skills = {
        "Programming Languages": [
            { name: "Java", img: "./java_img.png", level: 90 ,width: 70},
            { name: "JavaScript", img: "./javascript_img.png", level: 75 ,width: 60},
            { name: "C", img: "./c_img.png", level: 90 ,width: 70},
        ],
        "Front-end Tech": [
            { name: "HTML", img: "./html_img.png", level: 95 ,width: 45},
            { name: "CSS", img: "./css_img.png", level: 85 ,width: 45},
            { name: "React.js", img: "./react_img.png", level: 80 ,width: 65},
            { name: "Bootstrap", img: "./bootstrap_img.svg", level: 80 ,width: 55},
        ],
        "Back-end Tech": [
            { name: "Node.js", img: "./node_img.png", level: 80 ,width: 70},
            { name: "Express.js", img: "./express_img.png", level: 90 ,width: 80},
            { name: "MongoDB", img: "./mongo_img.png", level: 75 ,width: 60},
            { name: "MySQL", img: "./mysql_img.png", level: 90 ,width: 50},
        ],
    };

    return (
        <div className="m-4 mt-5 min-vh-100 pt-3">
            <h1 className="head ms-3 mb-4">Skills</h1>
            <div className="row h-100">
                {Object.entries(skills).map(([category, items], index) => (
                    <div key={index} className="col-12 col-lg-4 col-md-6 position-relative">
                        <h4 className="text-center mb-3">{category}</h4>
                        {items.map((item, idx) => (
                            
                            <div key={idx} className="mb-4 row align-items-center d-flex justify-content-center">
                                <div className="d-flex justify-content-center me-2" style={{ width: "90px"}}>
                                    <img src={item.img} alt={item.name} style={{ width: item.width }} />
                                </div>
                                <div className="progress p-0" role="progressbar" style={{ height: "8px", width:"160px"}} aria-valuenow={item.level} aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar" style={{"--level": `${item.level}%`}}>
                                        <div className="progress-label">{item.level}%</div>
                                    </div>
                                </div>
                            </div>                            
                        ))}
                    {/* <span className="line"></span> */}
                    </div> 
                ))}
            </div>
        </div>
    );
};


export default Skills;
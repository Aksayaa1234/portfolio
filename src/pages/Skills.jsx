import { useEffect, useState } from "react";
import "../skills.css"

const Skills = () => {
    const [skills,setSkills]= useState(null);

    useEffect(()=>{
        fetch("/data/skill_data.json")
        .then((response)=>response.json())
        .then((data)=>(setSkills(data)))
        .catch((error)=>(console.log("error in fetching "+error)));
    },[]);

    return (
        <div className="m-4 mt-5 min-vh-100 pt-3">
            <h1 className="head ms-3 mb-4 text-center">Skills</h1>
            <div className="row h-100">
                {skills && Object.entries(skills).map(([category, items], index) => (
                    <div key={index} className="col-12 col-lg-4 col-md-6 position-relative p-0 mb-3">
                        <h4 className="text-center mb-3">{category}</h4>
                        {items.map((item, idx) => (
                            
                            <div key={idx} className="mb-4 row align-items-center d-flex justify-content-center">
                                <div className="d-flex justify-content-center me-2" style={{ width: "80px"}}>
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
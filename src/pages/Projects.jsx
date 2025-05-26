import { useEffect, useState } from "react";
import "../project.css"
import Project from "../components/Project";

const Projects=()=>{
    const [projects,setProjects]=useState(null);

    useEffect(()=>{
        fetch("/data/project_data.json")
        .then((response) => response.json())
        .then((data)=>(setProjects(data)))
        .catch((error)=>(console.log("error in fetching " + error)));
    },[])

    return(
        <>
        <div className="m-4 mt-5 min-vh-100 px-3 pt-2">
            <h1 className="head pb-3 text-center">Projects</h1>
            <div className="row min-vh-100 ">
            {Array.isArray(projects) && projects.map((project) => 
                <Project key={project.id} {...project} />
            )}
            </div>
        </div>
        </>
    )
}

export default Projects;
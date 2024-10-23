import { Box } from "@mui/material";
import Addcomponent from "../component/Addcomponent";
import ProjectCard from "../component/ProjectCard";

const Projects=()=>{
    return(
        <>
        <Box sx={{minHeight:'calc(100vh - 80px)',MaxHeight:"100%",width:'100%', backgroundColor: '#c3ebe1', display: 'flex',flexDirection:"column"}}>
            <Box sx={{width:"100%",display:"flex",justifyContent:"center",mt:"1rem"}}>
                <Addcomponent/>
            </Box>
            <Box sx={{width:"100%",height:"100%",p:"2rem"}}>
                <h2 style={{margin:0,marginBottom:"1rem"}}>Projects</h2>
                <ProjectCard/>
            </Box>
        </Box>
        </>
    )
}

export default Projects;
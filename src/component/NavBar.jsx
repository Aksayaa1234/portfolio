import {AppBar, Toolbar}  from "@mui/material";
import { User2 } from "lucide-react";
import { NavLink } from "react-router-dom";

const NavBar=()=>{
    return(
        <>
            <AppBar position="sticky">
                <Toolbar sx={{display:"flex",bgcolor:"#135D66"}}>
                    <div style={{display:"flex",width:"100%",justifyContent:"flex-start"}}>
                        <h2 style={{color:"#E3FEF7"}}>Aksayaa M</h2>
                    </div>
                    <div style={{display:"flex",width:"100%",alignItems:"center",justifyContent:"flex-end"}}>
                        <ul style={{display:"flex",width:"90%",listStyleType:"none",justifyContent:"space-evenly"}}>
                            <NavLink style={{textDecoration:"none",borderBottom:"1rem",color:"#E3FEF7",borderBlockColor:"#77B0AA"}}><li>profile</li></NavLink>
                            <NavLink style={{textDecoration:"none",borderBottom:"1rem",color:"#E3FEF7"}}><li>projects</li></NavLink>
                            <NavLink style={{textDecoration:"none",borderBottom:"1rem",color:"#E3FEF7"}}><li>contact</li></NavLink>
                        </ul>
                    </div>
                        <User2 style={{width:"5rem"}}/>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar;
import {AppBar, Button, Divider, TextField, Toolbar}  from "@mui/material";
import { User2 } from "lucide-react";
import { useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { CircleX } from 'lucide-react';

const NavBar=()=>{
    const nav=useNavigate();
    const location=useLocation();
    const email=useRef();
    const password=useRef();
    const [visiable,setVisible]=useState(false);

    const link=[
        {title:"Profile",path:"/"},
        {title:"Projects",path:"/projects"},
        {title:"Contact",path:"/contact"}
    ];

    const handleLogin = (e) => {
        e.preventDefault()
        setVisible(false)
        nav('/contact')
        console.log(email.current.value, password.current.value)
    }

    return(
        <>
            <AppBar position="sticky">
                <Toolbar sx={{display:"flex",bgcolor:"#135D66"}}>
                    <div style={{display:"flex",width:"100%",justifyContent:"flex-start"}}>
                        <h2 style={{color:"#E3FEF7"}}>Aksayaa M</h2>
                    </div>
                    <div style={{display:"flex",width:"100%",alignItems:"center",justifyContent:"flex-end"}}>
                        <ul style={{display:"flex",width:"90%",listStyleType:"none",justifyContent:"space-evenly"}}>
                            {link && link.map((ele,index)=>(
                                <NavLink key={index}  to={ele.path} style={{textDecoration:"none",color:"#E3FEF7",width:"100%"}}><div style={{borderBottom:"3px solid #77B0AA",transition:"2s",width:location.pathname==ele.path?"55px":"0px"}}><li>{ele.title}</li></div></NavLink>                              
                            ))}
                        </ul>
                    </div>
                        <User2 style={{width:"5rem"}} onClick={() => setVisible(true)}/>
                </Toolbar>
            </AppBar>
            {
                visiable &&
                <>
                    <div style={{height: '100vh',width: '100vw',position: 'absolute',top: 0,left: 0, backgroundColor: '#becfcb', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 50}}>
                        <div style={{height: '55%',width:350,backgroundColor:"#E9EFEC",borderRadius:"15px",padding:"1rem",display:"flex",flexDirection:"column",alignItems:"center",position:"relative",gap:"1rem",boxShadow: '0 4px 6px rgba(0, 0, 0.1, 0.1)'}}>
                            <CircleX style={{position:"absolute",top:10,right:10}} size={28} onClick={() => setVisible(!visiable)}/>
                            <h2 style={{margin:0,color:"#003C43"}}>Login</h2>
                            <form onSubmit={handleLogin} style={{display:"flex",flexDirection:"column",alignItems:"center",position:"relative",gap:"0.8rem",width:"100%"}}>
                            {/* <Divider sx={{mt:1,mb:1,backgroundColor:"#becfcb",width:"100%"}}/> */}
                            <TextField inputRef={email} type="email" variant="outlined" label="email" sx={{mb:3,width:"90%"}} fullWidth={true}></TextField>
                            <TextField inputRef={password} type="password" variant="outlined" label="password" sx={{mb:3,width:"90%"}} fullWidth={true}></TextField>
                            <Button type="submit" variant="contained" sx={{backgroundColor:"#135D66"}} >Login</Button>
                            </form>
                        </div>
                    </div>
                </>
            }
            
        </>
    )
}

export default NavBar;
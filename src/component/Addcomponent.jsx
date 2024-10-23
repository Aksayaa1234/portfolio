import { Box, Button } from "@mui/material";
import { Plus } from "lucide-react";


const Addcomponent=()=>{
    return(
        <>
            <Button sx={{borderColor:"#135D66"}} variant="outlined">
                <Plus style={{color:"#135D66"}}>Add</Plus>
            </Button>
        </>
    )
}

export default Addcomponent;
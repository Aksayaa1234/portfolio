import { CssBaseline } from "@mui/material"
import WebLayout from "./layout/WebLayout"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from "./pages/Profile"
import Projects from "./pages/Projects"

const App = () => {
    return (
        <>
        <CssBaseline/>
            <BrowserRouter> 
                <Routes>
                    <Route element={<WebLayout/>}>
                        <Route path="/" element={<Profile/>} />
                        <Route path="/projects" element={<Projects/>} />
                        <Route path="/contact" element={<></>} />
                    </Route>
                </Routes>

            </BrowserRouter>
        </>
    )
}

export default App
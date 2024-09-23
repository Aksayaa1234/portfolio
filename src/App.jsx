import { CssBaseline } from "@mui/material"
import WebLayout from "./layout/WebLayout"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
    return (
        <>
        <CssBaseline/>
            <BrowserRouter>
                <Routes>
                    <Route element={<WebLayout/>}>
                        <Route path="/" element={<></>} />
                        {/* <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} /> */}
                    </Route>
                </Routes>

            </BrowserRouter>
        </>
    )
}

export default App
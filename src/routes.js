import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import PagesNotFound from "./pages/PagesNotFound"
import Watch from "./pages/Watch"

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route  path="/" element={ <Home /> }></Route>
                <Route  path="/watch" element={ <Watch /> }></Route>
                <Route  path="*" element={ <PagesNotFound /> }></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
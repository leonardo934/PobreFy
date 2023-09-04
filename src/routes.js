import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import PagesNotFound from "./pages/PagesNotFound"
import Search from "./pages/Search"
import Watch from "./pages/Watch"

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route  path="/" element={ <Home /> }></Route>
                <Route  path="/watch/:id" element={ <Watch /> }></Route>
                <Route  path="/search" element={ <Search /> }></Route>
                <Route  path="*" element={ <PagesNotFound /> }></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
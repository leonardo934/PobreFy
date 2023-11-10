import { BrowserRouter, Route, Routes } from "react-router-dom"
import FavoritesProvider from "./contexts/Favorites"
import Favorites from "./pages/Favorites"
import Home from "./pages/Home"
import MusicaCadastre from "./pages/MusicaCadastre"
import PagesNotFound from "./pages/PagesNotFound"
import Search from "./pages/Search"
import Watch from "./pages/Watch"

function AppRoutes() {
    return (
        <BrowserRouter>
            <FavoritesProvider>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/watch/:id" element={<Watch />}></Route>
                    <Route path="/search" element={<Search />}></Route>
                    <Route path="/favorites" element={<Favorites />}></Route>
                    <Route path="/cadastre" element={<MusicaCadastre />}></Route>
                    <Route path="*" element={<PagesNotFound />}></Route>
                </Routes>
            </FavoritesProvider>
        </BrowserRouter>
    )
}

export default AppRoutes
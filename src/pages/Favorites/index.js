import style from "./Favorites.module.css"
import Header from "../../components/Header"
import Container from "../../components/Container"
import VideosList from "../../components/VideosList"
import Footer from "../../components/Footer"
import { useFavoriteContext } from "../../contexts/Favorites"
import ScrollToTopButtom from "../../components/ScrollToTopButtom"

function Favorites() {

const { favorite } = useFavoriteContext()

    return (
        <>
        <ScrollToTopButtom />
            <Header />

            <Container>
                <section className={style.favorites}>
                    <h2>Meus Favoritos</h2>
                    { <VideosList videos={favorite} emptyHeading="🤔Ops! Sem musicas!🤔"  /> }
                </section>
            </Container>

            <Footer />
        </>
    )
}

export default Favorites

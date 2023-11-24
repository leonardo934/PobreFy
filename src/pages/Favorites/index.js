import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import VideosList from "../../components/VideosList";
import styles from "./Favorites.module.css";
import { useFavoriteContext } from "../../contexts/Favorites";
import ScrollToTopButtom from "../../components/ScrollToTopButtom";

function Favorites() {

    const { favorite } = useFavoriteContext()

    return (
        <>
            <ScrollToTopButtom />
            <Header />
            <Container>
                <section className={styles.favorites}>
                    <h2>Meus Favoritos</h2>
                    { <VideosList videos={favorite} emptyHeading="🤔 Sem favoritos 🤔" /> }
                </section>
            </Container>
            <Footer />
        </>
    );
}

export default Favorites;
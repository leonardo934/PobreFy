import Container from "../../components/Container"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import VideosList from "../../components/videosList"
import styles from "./Search.module.css"
import videos from "../../json/videos.json"


function Search() {
    return (
        <>
            <Header />
            <Container>
                <section className={styles.search}>
                    <h2>Pesquisar</h2>
          
                    <VideosList videos={videos} />

                </section>
            </Container>
            <Footer />
        </>
    )
}
export default Search
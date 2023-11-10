import Container from "../../components/Container"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import styles from "./Search.module.css"
import videos from "../../json/videos.json"
import SearchVideoList from "../../components/SearchVideoList"
import ScrollToTopButtom from "../../components/ScrollToTopButtom"


function Search() {
    return (
        <>
        <ScrollToTopButtom />
            <Header />
            <Container>
                <section className={styles.search}>
                    
                    <SearchVideoList videos={videos} />

                </section>
            </Container>
            <Footer />
        </>
    )
}
export default Search
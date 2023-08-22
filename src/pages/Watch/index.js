import Footer from "../../components/Footer"
import Container from "../../components/Container"
import styles from "./Watch.module.css"
import Header from "../../components/Header"

function Watch() {
    return (
        <>
            <Header />
            <Container>
                <section className={styles.watch}>
                    <h1>Escutar <br />👇</h1>
                    <iframe width="800" height="400" src="https://www.youtube.com/embed/-PDkhH5pwaI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </section>
            </Container>
            <Footer />
        </>
    )
}

export default Watch
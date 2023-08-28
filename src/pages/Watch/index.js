import Footer from "../../components/Footer"
import Container from "../../components/Container"
import styles from "./Watch.module.css"
import Header from "../../components/Header"
import { useParams } from "react-router-dom"
import videos from "../../json/videos.json"
import PagesNotFound from "../PagesNotFound/index"

function Watch() {
    const params = useParams()
    const video = videos.find((video) => { return video.id === params.id })
    if(!video) {return <PagesNotFound />}

    return (
        <>
            <Header />
            <Container>
                <section className={styles.watch}>
                    <h1>Escutar <br />👇</h1>
                    <iframe
                        width="800" height="400"
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                </section>
            </Container>
            <Footer />
        </>
    )
}

export default Watch
import erroShrek from "./shrek.gif"
import styles from "./PagesNotFound.module.css"
import Header from "../../components/Header/index"
import Footer from "../../components/Footer/index"


function PagesNotFound() {
    return (
        <>
            <Header />
            <section className={styles.container}>
                <h2>Ops! Conteúdo não localizado!!! Se liga no Shrek dançando</h2>
                <img src={erroShrek} alt="Pagina de erro do Shrek" />
                <h3>Erro 404 do Shrek</h3>
            </section>
            <Footer />
        </>
    )
}

export default PagesNotFound;
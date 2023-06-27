import style from "./Container.module.css"

function Container({ children }) {
return (
    <section className={style.container}>
       {children}
    </section>
)
}

export default Container;      
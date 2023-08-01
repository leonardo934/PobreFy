import videos from "../../json/videos.json"
import style from "./Category.module.css"

export const categories = [
    "Nikk",
    "Lil fuub",
    "VMZ",
    "Outros do Lil fuub",
    "Outros"
]

export function filterCategory(id) {
    return videos.filter(video => video.category === categories[id])
}

function Category({ category, children }) {
    return (
        <>
            <section className={style.category}>
                <h2>{category}</h2>
                <div>

                    {children}
                </div>
            </section>
        </>
    )
}

export default Category;
import videos from "../../json/videos.json"
import style from "./Category.module.css"

export const categories = [
"Alternativo",
"Axé",
"Blues",
"Bolero",
"Bossa Nova",
"Brega",
"Clássico",
"Corridos",
"Country",
"Cuarteto",
"Cumbia",
"Dance",
"Dancehall",
"Disco",
"Eletrônica",
"Emocore",
"Fado",
"Folk",
"Forró",
"Funk",
"Funk Internacional",
"Religioso",
"Grunge",
"Guarânia",
"Gótico",
"Hard Rock",
"Hardcore",
"Heavy Metal",
"Hip Hop/Rap",
"Rap",
"House",
"Indie",
"Industrial",
"Infantil",
"Instrumental",
"J-Pop/J-Rock",
"Jazz",
"Jovem Guarda",
"K-Pop",
"MPB",
"Mambo",
"Marchas/Hinos",
"Mariachi",
"Merengue",
"Música andina",
"New Age",
"Ne Wave",
"Pagode",
"Piseiro",
"Pop",
"Pop Rock",
"Post-Rock",
"Power-Pop",
"Psicodelia",
"Punk Rock",
"R&B",
"Ranchera",
"Reggae",
"Reggaeton",
"Regional",
"Rock",
"Rock Progressivo",
"Rock and Roll",
"Rockabilly",
"Romântico",
"Salsa",
"Samba",
"Samba Enredo",
"Sertanejo",
"Ska",
"Soft Rock",
"Soul",
"Surf Music",
"Tango",
"Tecnopop",
"Trap",
"Trova",
"Velha Guarda",
"World Music",
"Zamba",
"Zouk"


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
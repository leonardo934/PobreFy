import { Link } from "react-router-dom";
import { useFavoriteContext } from "../../contexts/Favorites";
import style from "./Card.module.css";
import iconFavorite from "./favorite.png";  // brando
import iconUnfavorite from "./unfavorite.png"; //vermelho

function Card({ id }) {

  const { favorite, addFavorite } = useFavoriteContext()
  const isFavorite = favorite.some((fav) => fav.id === id)
  const icone = isFavorite ? iconUnfavorite : iconFavorite

  return (
    <section className={style.card}>
      <Link to={`/watch/${id}`}>
        <img
          src={`https://i.ytimg.com/vi/${id}/mqdefault.jpg?s…QCAokN4AQ==&rs=AOn4CLBEBEfkL8wFBGX6qK4whJmbWlkEHw`}
          alt="Capa" className={style.capa}
        />
      </Link>
      <figure className={style.icon}>
        <img src={icone} alt="icone" onClick={() => addFavorite({id})} />
      </figure>
    </section>
  );
}
export default Card;
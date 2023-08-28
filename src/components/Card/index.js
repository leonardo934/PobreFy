import { Link } from "react-router-dom";
import style from "./Card.module.css";

  function Card({ id }) {
  return (
    <section className={style.card}>
      <Link to={`/watch/${id}`}>
        <img
          src={`https://i.ytimg.com/vi/${id}/mqdefault.jpg?s…QCAokN4AQ==&rs=AOn4CLBEBEfkL8wFBGX6qK4whJmbWlkEHw`}
          alt="Capa"
        />
      </Link>
    </section>
  );
}
export default Card;
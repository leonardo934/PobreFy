import style from "./Card.module.css";

  function Card({ id }) {
  return (
    <section className={style.card}>
      <a href={`https://www.youtube.com/watch?v=${id}`} rel="noreferrer noopener"
        target="_blank"
      >
        <img
          src={`https://i.ytimg.com/vi/${id}/mqdefault.jpg?s…QCAokN4AQ==&rs=AOn4CLBEBEfkL8wFBGX6qK4whJmbWlkEHw`}
          alt="Capa"
        />
      </a>
    </section>
  );
}
export default Card;
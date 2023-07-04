import style from "./Card.module.css";

function Card() {
  return (
    <section className={style.card}>
      <a href="https://www.youtube.com/watch?v=Dw8UDoLGjO8" rel="noreferrer noopener"
      target="_blank"
      >
        
        <img
          src="https://i.ytimg.com/vi/Dw8UDoLGjO8/mqdefault.jpg?s…QCAokN4AQ==&rs=AOn4CLBEBEfkL8wFBGX6qK4whJmbWlkEHw"
          alt="Capa"
        />
      </a>
    </section>
  );
}
export default Card;
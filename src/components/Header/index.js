import style from "./Header.module.css";

function Header() {
  return (
    <header className={style.header}>
      <span>PobreFlix</span>
      <nav>
        <a href="#">Home</a>
        <a href="#">Assistir</a>
      </nav>
    </header>
  );
}

export default Header;

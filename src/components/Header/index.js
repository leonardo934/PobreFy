import { Link } from "react-router-dom";
import style from "./Header.module.css";

function Header() {
  return (
    <header className={style.header}>
      <Link to="/">
        <span>Pobrefy</span>
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/watch">Escutar</Link>
      </nav>
    </header>
  );
}

export default Header;

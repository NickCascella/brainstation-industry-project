import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__links-list">
        <li>
          <Link className="nav__link" to={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link className="nav__link" to={"/helloTwo"}>
            Link 2
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

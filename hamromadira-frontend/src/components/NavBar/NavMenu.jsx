import login from "../../assets/Icons/login.png";
import home from "../../assets/Icons/home.png";
import cart from "../../assets/Icons/cart.svg";
import "./Navbar.css";
import Hamburger from "./Hamburger";
import { Link } from "react-router-dom";

export default function NavMenu() {
  return (
    <>
      <ul className="nav-menu">
        <li>
          <Link to="/home">
            <div className="nav-link">
              Home <img src={home} alt="" />
            </div>
          </Link>
        </li>
        <li>
          <Link to="/login">
            <div className="nav-link">
              Login <img src={login} alt="" />
            </div>
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <div className="nav-link">
              Cart <img src={cart} alt="" />
            </div>
          </Link>
        </li>
      </ul>
      <Hamburger />
    </>
  );
}

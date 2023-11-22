import login from "../../assets/Icons/login.png";
import home from "../../assets/Icons/home.png";
import cart from "../../assets/Icons/cart.svg";
import "./Navbar.css";
import Hamburger from "./Hamburger";

export default function NavMenu() {
  return (
    <>
      <ul className="nav-menu">
        <li>
          <a href="/">
            <div className="nav-link">
              Home <img src={home} alt="" />
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <div className="nav-link">
              Login <img src={login} alt="" />
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <div className="nav-link">
              Cart <img src={cart} alt="" />
            </div>
          </a>
        </li>
      </ul>
      <Hamburger />
    </>
  );
}

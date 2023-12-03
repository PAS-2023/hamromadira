import login from "../../assets/Icons/login.png";
import logout from "../../assets/Icons/logout.png";
import home from "../../assets/Icons/home.png";
import cart from "../../assets/Icons/cart.svg";
import "./Navbar.css";
import Hamburger from "./Hamburger";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavMenu() {
  const loggedUser = useSelector((state) => state.loggedUser);
  return (
    <>
      <ul className="nav-menu">
        <li>
          <Link to="/">
            <div className="nav-link">
              Home <img src={home} alt="" />
            </div>
          </Link>
        </li>
        <li>
          <Link to="/login">
            {loggedUser.length ? (
              <div className="nav-link">
                Login <img src={logout} alt="" />
              </div>
            ) : (
              <div className="nav-link">
                Login <img src={login} alt="" />
              </div>
            )}
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

import NavSearchBar from "./NavSearchBar";
import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";
import "./Navbar.css";

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="nav-container">
        <NavLogo />
        <NavSearchBar />
        <NavMenu />
      </div>
    </div>
  );
}

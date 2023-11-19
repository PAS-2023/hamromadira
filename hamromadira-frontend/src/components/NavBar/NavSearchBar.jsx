import searchIcon from "../../assets/Icons/search.png";
import "./Navbar.css";
export default function NavSearchBar() {
  return (
    <div className="nav-searchbar">
      <img src={searchIcon} alt="searchicon" />
      <input type="text" />
    </div>
  );
}

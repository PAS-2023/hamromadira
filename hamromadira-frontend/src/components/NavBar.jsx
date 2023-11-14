import Logo from "./navComponents/Logo";
import Menu from "./navComponents/Menu";
import Search from "./navComponents/SearchBar";
const NavBar = () => {
  return (
    <div id="nav-container">
      <Logo />
      <Menu />
      <Search />
    </div>
  );
};
export default NavBar;

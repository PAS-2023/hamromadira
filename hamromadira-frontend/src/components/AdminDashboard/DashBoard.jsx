import Menu from "./Menu";
import AddProduct from "./product/AddProduct";
import "./dashboard.css";

const DashBoard = () => {
  return (
    <div className="check">
      <Menu />
      <AddProduct />
    </div>
  );
};

export default DashBoard;

import Menu from "./Menu";
import AddProduct from "./product/AddProduct";
import "./dashboard.css";
// import OrderTable from "./Order/Order";
import OrderDisplay from "./Order/OrderDisplay";

const DashBoard = () => {
  return (
    <div className="check">
      <Menu />
      <OrderDisplay />
      {/* <Order /> */}
      {/* <AddProduct /> */}
    </div>
  );
};

export default DashBoard;

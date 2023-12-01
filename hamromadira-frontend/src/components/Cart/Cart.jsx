import NavBar from "../NavBar/NavBar";
import Footer from "../FooterComponents/Footer";
import CartItem from "./CartItem";
import CartSetting from "./CartSetting";
import TopProduct from "../TopProducts/TopProduct";

const Cart = () => {
  return (
    <div>
      <NavBar />
      <CartItem />
      <CartSetting />
      <TopProduct />
      <Footer />
    </div>
  );
};

export default Cart;

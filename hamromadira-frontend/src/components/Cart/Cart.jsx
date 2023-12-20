import CartItem from "./CartItem";
import CartSetting from "./CartSetting";
import Slider from "./CartSlider/Slider";
import "./cart.css";
const Cart = () => {
  return (
    <div className="cart-page-wrapper">
      <div className="cart-page-container">
        <CartItem />
        <CartSetting />
        <Slider />
      </div>
    </div>
  );
};

export default Cart;

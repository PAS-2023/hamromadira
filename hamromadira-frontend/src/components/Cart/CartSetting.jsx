import "./cart.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const CartSetting = () => {
  let [subtotal, setSubTotal] = useState(0);
  let cartDetails = useSelector((state) => state.cart);
  useEffect(() => {
    const val = cartDetails.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    setSubTotal(val);
  }, [cartDetails]);
  const handleCartClear = () => {
    alert("cartclear");
    // dispatch(removeAllCartItems());
  };
  return (
    <div>
      <div className="cart_setting_wrapper">
        <div className="cart_settings">
          <div className="cart-btn1 bluebtn">
            <button>Continue with Payment</button>
          </div>
          <div className="grand-total">
            <div className="total_order">
              <p>sub-total: Rs. {subtotal}</p>
              <p>Delivery Cost: Rs.87 </p>
              <p>Order total: Rs. {subtotal + 87}</p>
            </div>
          </div>
          <div className="cart-btn1 redbtn">
            <button onClick={handleCartClear}>Clear Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSetting;

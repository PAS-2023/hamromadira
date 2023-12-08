import "./cart.css";

const CartSetting = () => {
  return (
    <div>
      <div className="cart_setting_wrapper">
        <div className="cart_settings">
          <div className="cart-btn1 bluebtn">
            <button>Continue with Payment</button>
          </div>
          <div className="grand-total">
            <div className="total_order">
              <p>sub-total: Rs.3780</p>
              <p>Delivery Cost: Rs.87 </p>
              <p>Order total: Rs. 4590</p>
            </div>
          </div>
          <div className="cart-btn1 redbtn">
            <button>Clear Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSetting;

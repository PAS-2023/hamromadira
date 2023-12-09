import React from "react";
import "./paymentMenu.css";

const PaymentMenu = () => {
  return (
    <>
      <div className="payment-menu">
        <img
          className="back-button"
          src="images/back-to-cart.png"
          alt="buttton "
        />
        <div className="total">
          <span>Total:RS1200</span>
        </div>
      </div>
    </>
  );
};

export default PaymentMenu;

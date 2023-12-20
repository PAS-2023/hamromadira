import React from "react";
import "./order.css";

const OrderDisplay = () => {
  return (
    <div className="order">
      <div className="order-wrapper">
        <div className="order-details">
          <p>
            <span>Order ID : </span>222
          </p>
          <p>
            <span>Name : </span>Akash Sunar
          </p>
          <p>
            <span>Address : </span>Satdobato,lalitpur,Near LA
                  </p>
                  <p><span>Quantity : </span>3</p>
        </div>
        <div className="total-amount">
          <p>
            <span>Amount : </span>RS 750
          </p>
          <div className="expand">Expand</div>
        </div>
      </div>
    </div>
  );
};

export default OrderDisplay;

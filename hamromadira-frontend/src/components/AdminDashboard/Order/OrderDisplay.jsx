import ExpandContent from "./ExpandContent";
import "./order.css";
import { useState } from "react";
const OrderDisplay = () => {
  const [expand, setExpand] = useState(false);

  const handleExpand = () => {
    console.log("you click expand");
    setExpand(!expand);
  };
  return (
    <div className="order">
      <div className="order-wrapper">
        <div className="order-container">
          <div className="order-details-1">
            <p>
              <span>Order ID : </span>222
            </p>
            <p>
              <span>Name : </span>Akash Sunar
            </p>
            <p>
              <span>Address : </span>Satdobato,lalitpur,Near LA
            </p>
            <p>
              <span>Quantity : </span>3
            </p>
          </div>
          <div className="order-details-2">
            <p>
              <span>Amount : </span>RS 750
            </p>
            <div onClick={handleExpand} className="expand-btn">
              <p>Expand</p>
            </div>
          </div>
        </div>
        {expand ? <ExpandContent /> : null}
      </div>
    </div>
  );
};

export default OrderDisplay;

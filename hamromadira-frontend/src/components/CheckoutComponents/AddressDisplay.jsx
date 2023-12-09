import React from "react";
import "./paymentMenu.css";

const AddressDisplay = () => {
  return (
    <>
      <div className="address-box">
        <div className="district">
          <span>District : Nawalpur</span>
        </div>
        <div className="city">
          <span>City : Bharatpur</span>
        </div>
        <div className="landmark">
          <span>LandMark : Near Bhatbhateni</span>
        </div>
        <div className="addform-btn">
          <button>Edit</button>
        </div>
      </div>
    </>
  );
};

export default AddressDisplay;

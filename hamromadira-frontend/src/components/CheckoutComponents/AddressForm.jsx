import React from "react";
import "./paymentMenu.css";
const AddressForm = () => {
  return (
    <div className="addressForm-wrapper">
      <form className="address-form" action="">
        <div className="input1">
          <label>District:</label>
          <input type="text" />
        </div>
        <div className="input1">
          <label>City:</label>
          <input type="text" />
        </div>
        <div className="input1">
          <label>Landmark:</label>
          <input type="text" />
        </div>
        <div className="addform-btn">
          <button>Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;

//import "../paymentMenu.css";
import { useState } from "react";
import "../Payment/paymentMenu.css";
const AddressForm = () => {
  const [addressInfo, setAddressInfo] = useState({
    district: "",
    city: "",
    landmark: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(addressInfo);
    setAddressInfo({
      district: "",
      city: "",
      landmark: "",
    });
  };
  return (
    <div className="addressForm-wrapper">
      <form className="address-form">
        <div className="input1">
          <label>District:</label>
          <input
            type="text"
            value={addressInfo.district}
            onChange={(e) =>
              setAddressInfo({ ...addressInfo, district: e.target.value })
            }
          />
        </div>
        <div className="input1">
          <label>City:</label>
          <input
            type="text"
            value={addressInfo.city}
            onChange={(e) =>
              setAddressInfo({ ...addressInfo, city: e.target.value })
            }
          />
        </div>
        <div className="input1">
          <label>Landmark:</label>
          <input
            type="text"
            value={addressInfo.landmark}
            onChange={(e) =>
              setAddressInfo({ ...addressInfo, landmark: e.target.value })
            }
          />
        </div>
        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
};

export default AddressForm;

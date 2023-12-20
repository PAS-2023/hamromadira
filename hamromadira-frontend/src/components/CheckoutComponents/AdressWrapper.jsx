import AddressDisplay from "./AddressDisplay";
import AddAddress from "./AddAddress";
import "./paymentMenu.css";

const AdressWrapper = () => {
  const addressList = [
    { district: "Chitwan", city: "Bharatpur", Landmark: "near Campus" },
  ];
  return (
    <div className="address-wrapper">
      {addressList.map((value) => (
        <AddressDisplay key={value.Landmark} value={value} />
      ))}
      <AddAddress />
    </div>
  );
};

export default AdressWrapper;

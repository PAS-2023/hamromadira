import AddressDisplay from "./AddressDisplay";
import AddAddress from "./AddAddress";
import "../Payment/paymentMenu.css";

const AdressWrapper = () => {
  const addressList = [
    { district: "Chitwan", city: "Bharatpur", Landmark: "near Campus" },
    { district: "Kathmandu", city: "Kathmandu", Landmark: "pulchowk" },
  ];
  return (
    <div className="address-wrapper">
      {addressList.map((value) => (
        <AddressDisplay key={value.Landmark} value={value} />
      ))}
      {addressList.length < 3 ? <AddAddress /> : null}
    </div>
  );
};

export default AdressWrapper;

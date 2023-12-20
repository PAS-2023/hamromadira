/* eslint-disable react/prop-types */
import AdressWrapper from "./AdressWrapper";

export default function AddressPanel({ handleOrderDetail }) {
  return (
    <div>
      <AdressWrapper handleOrderDetail={handleOrderDetail} />
    </div>
  );
}

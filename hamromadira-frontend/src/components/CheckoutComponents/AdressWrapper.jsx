import React from 'react'
import AddressDisplay from './AddressDisplay'
import AddressForm from './AddressForm'
import AddAddress from './AddAddress'
import "./paymentMenu.css";

const AdressWrapper = () => {
  return (
  
      <div className="address-wrapper">
        <AddressDisplay />
        <AddressForm />
        <AddAddress />
      </div>
    
  );
}

export default AdressWrapper

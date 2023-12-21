/* eslint-disable react/prop-types */
import AddressDisplay from "./AddressDisplay";
import AddAddress from "./AddAddress";
import "../Payment/paymentMenu.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { userInfo } from "../../../reducers/userInfoReducer";

const AdressWrapper = () => {
  const addressList = useSelector((state) => state.userInfo.address);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userInfo());
  }, [addressList]);

  return (
    <div className="address-wrapper">
      {addressList ? (
        addressList.map((value) => (
          <AddressDisplay key={value._id} value={value} />
        ))
      ) : (
        <p>Loading....</p>
      )}
      {addressList && addressList.length < 3 ? <AddAddress /> : null}
    </div>
  );
};

export default AdressWrapper;

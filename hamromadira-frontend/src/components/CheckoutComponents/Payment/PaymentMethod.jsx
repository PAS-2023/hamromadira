import { useState } from "react";
import "./paymentMenu.css";
import Esewa from "./Esewa";
import Khalti from "./Khalti";
import Cod from "./Cod";
import { useSelector, useDispatch } from "react-redux";
import { createOrder } from "../../../reducers/orderReducer";
import { useNavigate } from "react-router-dom";

const PaymentMethod = () => {
  const userInfo = useSelector((state) => state.userInfo);
  const cartInfo = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [payment, setPayment] = useState("esewa");
  const goEsewa = (e) => {
    setPayment(e.target.value);
  };
  const goKhalti = (e) => {
    setPayment(e.target.value);
  };
  const goCod = (e) => {
    setPayment(e.target.value);
  };
  const handleOrder = () => {
    const orderDetails = {
      orderUser: userInfo.fullname,
      orderDate: new Date().toISOString().split("T")[0],
      paymentMode: payment === "cod" ? "COD" : "OP",
      paymentStatus: payment === "cod" ? "pending" : "processed",
      amount: window.sessionStorage.getItem("cartTotal"),
      items: cartInfo,
      shippingAddress: {
        district: "Chitwan",
        city: "Bharatpur",
        landmark: "Near Birendra Campus",
      },
    };

    dispatch(createOrder(orderDetails));

    navigate("/");
  };
  return (
    <>
      <div className="radio">
        <div className="radio-1">
          <input
            type="radio"
            name="filter"
            value="esewa"
            defaultChecked={true}
            onChange={() => goEsewa(event)}
          />
          <div className="e-sewa">
            <img src="images/e-sewa.png" alt="" height={40} width={80} />
          </div>
        </div>

        <div className="radio-2">
          <input
            type="radio"
            value="khalti"
            name="filter"
            onChange={() => goKhalti(event)}
          />
          <div className="e-sewa">
            <img src="images/khalti.png" alt="" height={40} width={80} />
          </div>
        </div>
        <div className="radio-3">
          <input
            type="radio"
            name="filter"
            value="cod"
            onChange={() => goCod(event)}
          />
          <div className="e-sewa">
            <img src="images/cod.png" alt="" height={40} width={80} />
          </div>
        </div>
      </div>
      <hr className=" underline"></hr>
      {payment === "esewa" ? (
        <Esewa />
      ) : payment === "khalti" ? (
        <Khalti />
      ) : payment === "cod" ? (
        <Cod />
      ) : (
        []
      )}
      <div className="payment-btn">
        <button onClick={handleOrder}>Proceed Payment</button>
      </div>
    </>
  );
};

export default PaymentMethod;

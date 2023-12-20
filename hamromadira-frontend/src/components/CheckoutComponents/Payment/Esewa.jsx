import "./paymentMenu.css";

const Esewa = () => {
  return (
    <>
      <div className="wrapper">
        <h2 className="payment-title-esewa">Esewa Payment</h2>
        <div className="form-container-esewa">
          <form className="form1">
            <label>Esewa ID:</label>
            <input className="ph-box" type="text" placeholder="9854736327" />
            <label>Remarks:</label>
            <input className="ph-box" type="text" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Esewa;

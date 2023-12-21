import "../Payment/paymentMenu.css";
import { Modal } from "@mui/material";
import { useState } from "react";
const AddressDisplay = (value) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    height: "38%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,

    p: 4,
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className="address-box">
        <div className="district">
          <span>District : {value.value.district}</span>
        </div>
        <div className="city">
          <span>City : {value.value.city}</span>
        </div>
        <div className="landmark">
          <span>LandMark : {value.value.landmark}</span>
        </div>
        <div className="addform-btn">
          <button onClick={handleOpen}>Edit</button>
          <button onClick={handleOpen}>Select</button>
        </div>
      </div>
      <>
        <Modal open={open} onClose={handleClose} style={style}>
          <div className="addressForm-wrapper">
            <form className="address-form">
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

              <>
                <button onClick={handleClose}>Save</button>
                <button onClick={handleClose}>Cancel</button>
              </>
            </form>
          </div>
        </Modal>
      </>
    </>
  );
};

export default AddressDisplay;

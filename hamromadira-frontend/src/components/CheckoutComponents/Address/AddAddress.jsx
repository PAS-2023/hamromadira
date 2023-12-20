import { Modal } from "@mui/material";
import { useState } from "react";
// import AddressForm from "./AddressForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: "30%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,

  p: 4,
};
const AddAddress = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className="add-address-wrapper" onClick={handleOpen}>
        <div className="add-address">
          <h2>+</h2>
        </div>
      </div>
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
              <button onClick={handleClose}>Add</button>
              <button onClick={handleClose}>Cancel</button>
            </>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default AddAddress;

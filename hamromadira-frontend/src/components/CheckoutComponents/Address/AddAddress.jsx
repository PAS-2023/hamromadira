import { Modal } from "@mui/material";
import { useState } from "react";
import { addAddress } from "../../../reducers/userInfoReducer";
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch();

  const [addressInfo, setAddressInfo] = useState({
    district: "",
    city: "",
    landmark: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addAddress(addressInfo));
    setOpen(false);
    setAddressInfo({
      district: "",
      city: "",
      landmark: "",
    });
  };
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
            <button onClick={handleClose}>Cancel</button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default AddAddress;

import { Modal, Box } from "@mui/material";
import { useState } from "react";
import AddressForm from "./AddressForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
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
      <div
        className="add-address-wrapper"
        onClick={() => {
          handleOpen();
        }}
      >
        <div className="add-address">
          <h2>+</h2>
        </div>
      </div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <AddressForm />
        </Box>
      </Modal>
    </>
  );
};

export default AddAddress;

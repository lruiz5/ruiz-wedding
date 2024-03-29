import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  p: 3,
};

export default function LocationMap() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Show On Map</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Location Map
          </Typography>
          <button className="event-modal-close" onClick={handleClose}>
            <i className="fa fa-close"></i>
          </button>
          <div className="modalBody modal-body">
            <div className="modalBody modal-body">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.052785623464!2d-120.6178853243846!3d35.74950732622067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80eccc0ece0ce11b%3A0x7c0070b123536f30!2sVilla%20San-Juliette%20Vineyard%20%26%20Winery!5e0!3m2!1sen!2sus!4v1685662023982!5m2!1sen!2sus"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

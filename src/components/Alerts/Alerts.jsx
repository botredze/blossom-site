import React from "react";
import "./Alerts.scss";
import { Box, Modal, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { changeAlertText } from "../../store/reducers/stateSlice";

const Alerts = () => {
  const dispatch = useDispatch();
  const { alertText } = useSelector((state) => state.stateSlice);
  const handleClose = () =>
      dispatch(changeAlertText({ ...alertText, state: false }));

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    maxWidth: "500px",
    zIndex: 999,
    height: 230,
    bgcolor: alertText.backColor,
    boxShadow: 24,
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    p: 4,
  };

  const styleText = {
    color: "#fff",
    fontFamily: "EB Garamond, serif",
    fontSize: window.innerWidth <= 530 ? "20px" : "30px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
    textAlign: "center",
    "@media (max-width: 500px)": {
      fontSize: "16px",
    },
  };

  const buttonStyle = {
    marginTop: "20px",
    color: "#fff",
    backgroundColor: "#000",
    "&:hover": {
      backgroundColor: "#333",
    },
  };

  return (
      <Modal
          open={alertText.state}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <p style={styleText}>{alertText.text}</p>
          <Button onClick={handleClose} sx={buttonStyle}>
            Ок
          </Button>
        </Box>
      </Modal>
  );
};

export default Alerts;

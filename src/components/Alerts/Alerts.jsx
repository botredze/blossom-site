import React from "react";
import "./Alerts.scss";
import { Box, Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { changeAlertText } from "../../store/reducers/stateSlice";

const Alerts = () => {
  const dispatch = useDispatch();
  const { alertText } = useSelector((state) => state.stateSlice);
  const handleClose = () =>
    dispatch(changeAlertText({ ...alertText, state: false }));
  const [timerId, setTimerId] = React.useState(null);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%", // Изменено на проценты для адаптивности
    maxWidth: "500px", // Добавлено максимальное значение ширины
    zIndex: 999,
    height: 230, // Изменено на авто для адаптивной высоты
    bgcolor: alertText.backColor,
    boxShadow: 24,
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    p: 4,
  };

  React.useEffect(() => {
    if (alertText.state) {
      const timer = setTimeout(() => {
        dispatch(
          changeAlertText({
            text: "",
            backColor: "#fff",
            state: false,
          })
        );
      }, 2000);

      // Сохраняем идентификатор таймера в состоянии
      setTimerId(timer);
    }

    // Очищаем таймер при размонтировании компонента или при изменении alertText.state
    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [alertText?.state]);

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

  return (
    <Modal
      open={alertText.state}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <p style={styleText}>{alertText.text}</p>
      </Box>
    </Modal>
  );
};

export default Alerts;

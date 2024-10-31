import React from "react";
import "./Modal.scss";

const Modal = ({
  isVisible,
  onClose,
  text,
  backColor,
  textColor,
  children,
}) => {
  if (!isVisible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal" style={{ backgroundColor: backColor }}>
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        <p style={{ color: textColor, textAlign: "center", fontSize: "20px" }}>
          {text}
        </p>
        {children}
      </div>
    </div>
  );
};

export default Modal;

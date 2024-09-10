import React from 'react';
import './Modal.scss';

const Modal = ({ isVisible, onClose, text, backColor, textColor }) => {
  if (!isVisible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal" style={{ backgroundColor: backColor, textColor: textColor }}>
        <button className="modal-close" onClick={onClose}>X</button>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Modal;

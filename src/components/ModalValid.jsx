import React from 'react';

const ModalValid = ({title, active, onClose}) => {
  if (!active) {
    return null
  }
  return (
    <div className="modal_reg" onClick={onClose}>
      <div className="modal__content" onClick={(event) => event.stopPropagation()}>
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default ModalValid;

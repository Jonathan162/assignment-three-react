
import React from "react";

const Modal = (props) => {
  const { closeModal } = props;

  return (
    <div className="overlay">
      <div className="content">
        <div className="modal-close" onClick={closeModal}>&times;</div>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;

import React from 'react';
import ReactDOM from 'react-dom';

const Modal = () => {
  return ReactDOM.createPortal(
      <div>
        Mycha
      </div>,
      document.querySelector('#modal')
  )
};

export default Modal;
//Modal.js
import React, { useRef } from "react";
import ReactDom from "react-dom";
import ContactUsForm from "../ContactUsForm/ContactUsForm";

import "./ContactUsModal.css";

const ContactUsModal = ({ setContactUsShowModal }) => {
  // close the modal when clicking outside the modal.
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setContactUsShowModal(false);
    }
  };
  //render the modal JSX in the portal div.
  return ReactDom.createPortal(
    <div className='container' ref={modalRef} onClick={closeModal}>
      <div className='modal'>
        {/* <h2>This is a Modal</h2> */}
        <ContactUsForm />
        <button
          onClick={() => setContactUsShowModal(false)}
          className='exitButton'
        >
          X
        </button>
      </div>
    </div>,
    document.getElementById("contact-us-portal")
  );
};

export default ContactUsModal;

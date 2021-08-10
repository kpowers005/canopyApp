import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from './SignupForm';

function SignupFormModal() {
  const [showModal, setShowModal] = useState(false);
  const buttonStyles = {
    background: 'none',
    border: 'none',
    color: 'darkslategray',
    fontSize: '1.1em'
  }

  return (
    <>
      <button style={buttonStyles} onClick={() => setShowModal(!showModal)}>Sign Up</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignupForm />
        </Modal>
      )}
    </>
  );
}

export default SignupFormModal;

import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);
  const buttonStyles = {
    background: 'none',
    border: 'none',
    color: 'darkslategray',
    fontSize: '1.1em'
  }

  return (
    <>
      <button style={buttonStyles} onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;

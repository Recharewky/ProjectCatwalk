import React, { useState } from 'react';
import Modal from 'react-modal';
import AddReview from './AddReview.jsx';
import styled from 'styled-components';

const Button = styled.button`
  border-radius: 8px;
  border: 0px solid #05386b;
  color: #f7f9fb;
  background-color: #8fc1e3;
  &:hover {
    cursor: pointer;
    background-color: #f7f9fb;
    color: #8fc1e3;
  }
  object-fit: contain;
  margin: 0 2em;
  padding: 0.25em 1em;
  border-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;
`;

Modal.setAppElement('#app');
function AddReviewModal () {

  const [modalIsOpen, setmodalIsOpen] = useState(false);
  return(
    <div >
      <Button onClick={() => setmodalIsOpen(true)}> Add A Review +</Button>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => setModalIsOpen(true)}
        style={{
          overlay: {
            backgroundColor: '#31708e'
          },
          content: {
            color: '#31708e'
          }}
        }>
      <AddReview />

        <Button className="display: flex;"onClick={() => setmodalIsOpen(false)}> Close </Button>

      </Modal>
    </div>
  );

}

  export default AddReviewModal;
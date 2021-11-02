import React, { useState } from 'react';
import Modal from 'react-modal';
import AddReview from './AddReview.jsx';
import styled from 'styled-components';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`

Modal.setAppElement('#app');
function AddReviewModal () {

  const [modalIsOpen, setmodalIsOpen] = useState(false);
  return(
    <div>
      <Button onClick={() => setmodalIsOpen(true)}> Add A Review +</Button>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: 'grey'
          },
          content: {
            color: 'orange'
          }}
        }>
      <AddReview />
      <div>
        <Button onClick={() => setmodalIsOpen(false)}> Close </Button>
      </div>
      </Modal>
    </div>
  );

}

  export default AddReviewModal;
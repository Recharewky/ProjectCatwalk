import React, { useState } from 'react';
import Modal from 'react-modal';
import AddReview from './AddReview.jsx';

Modal.setAppElement('#app');
function AddReviewModal () {

  const [modalIsOpen, setmodalIsOpen] = useState(false);
  return(
    <div>
      <button onClick={() => setmodalIsOpen(true)}> Add A Review +</button>
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
        <button onClick={() => setmodalIsOpen(false)}> Close </button>
      </div>
      </Modal>
    </div>
  );

}

  export default AddReviewModal;
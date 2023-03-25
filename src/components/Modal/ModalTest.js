import { useState } from "react";
import ReactModal from "react-modal";

function ModalTest() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setModalIsOpen(true)}>Modal Open</button>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        This is Modal content
        <button onClick={() => setModalIsOpen(false)}>Modal Close</button>
      </ReactModal>
    </>
  );
}

export default ModalTest;

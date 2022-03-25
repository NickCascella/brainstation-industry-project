import "./FirstModal.scss";

const FirstModal = ({ closeModal }) => {
  return (
    <div className="modal-wrapper">
      <div className="modal-first">
        <h1>I'm the first modal</h1>
        <button
          onClick={() => {
            closeModal();
          }}
        >
          Next Modal
        </button>
      </div>
    </div>
  );
};

export default FirstModal;

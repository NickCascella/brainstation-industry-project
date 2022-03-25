import "./SecondModal.scss";

const SecondModal = ({ closeModal }) => {
  return (
    <div className="modal-wrapper">
      <div className="modal-second">
        <h1>I'm the second modal</h1>
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

export default SecondModal;

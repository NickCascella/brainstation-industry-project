import "./FourthModal.scss";

const FourthModal = ({ closeModal }) => {
  return (
    <div className="modal-wrapper">
      <div className="modal-fourth">
        <h1>I'm the fourth modal</h1>
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

export default FourthModal;

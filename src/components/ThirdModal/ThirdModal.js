import "./ThirdModal.scss";

const ThirdModal = ({ closeModal }) => {
  return (
    <div className="modal-wrapper">
      <div className="modal-third">
        <h1>I'm the third modal</h1>
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

export default ThirdModal;

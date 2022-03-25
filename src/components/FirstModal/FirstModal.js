import "./FirstModal.scss";
import shopifyLogo from "../../assets/Icons/shopify_logo.svg";

const FirstModal = ({ closeModal }) => {
  return (
    <div className="modal-wrapper">
      <div className="modal-first">
        <button className="modal-first__close-btn">+</button>
        <img
          className="modal-first__img"
          src={shopifyLogo}
          alt="shopify logo"
        />
        <h1 className="modal-first__title"> Welcome to Shopify</h1>
        <h2 className="modal-first__sub-title">Are You a New Seller?</h2>
        <div>
          <button
            className="modal-first__btn"
            onClick={() => {
              closeModal();
            }}
          >
            Yes, This is my first store
          </button>
          <button className="modal-first__btn">
            No, I've done this before
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstModal;

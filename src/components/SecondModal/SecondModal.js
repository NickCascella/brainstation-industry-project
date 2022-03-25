import "./SecondModal.scss";

const SecondModal = ({ closeModal }) => {
  return (
    <div className="modal-wrapper">
      <div className="modal-second">
        <button className="modal-second__close-btn">+</button>
        <h1 className="modal-second__title">
          Let's help you get your business idea off the ground!
        </h1>
        <form className="form">
          <label className="form__label">What are you selling?</label>
          <input
            className="form__input"
            placeholder="e.g Shoes, Makeup, Activewear"
          ></input>
          <label className="form__label">
            What is your business expereince?
          </label>
          <select
            className="form__input form__input--dropdown"
            placeholder="e.g Shoes, Makeup, Activewear"
          >
            <option value="" disabled selected>
              Select level of expereince
            </option>
            <option value="I'm new to entrepreneurship">
              1- I'm new to entrepreneurship
            </option>
            <option value="I have some knowledge of selling">
              2- I have some knowledge of selling
            </option>
            <option value="I feel somewhat confident in selling">
              3- I feel somewhat confident in selling
            </option>
            <option value="I'm an expereinced seller">
              4- I'm an expereinced seller
            </option>
          </select>
          <label className="form__label">What are your business goals?</label>
          <select
            className="form__input form__input--dropdown"
            placeholder="e.g Shoes, Makeup, Activewear"
          >
            <option value="" disabled selected>
              Select overall business goals
            </option>
            <option value="This is a part-time passion/side project">
              1- This is a part-time passion/side project
            </option>
            <option value="I want to build a new, sustainable business">
              2- I want to build a new, sustainable business
            </option>
            <option value="I want to grow the business that I have">
              3- I want to grow the business that I have
            </option>
            <option value="I want to become a mogul in my industry">
              4- I want to become a mogul in my industry
            </option>
          </select>
          <button
            className="form__btn"
            onClick={(e) => {
              e.preventDefault();
              closeModal();
            }}
          >
            Get Started
          </button>
        </form>
      </div>
    </div>
  );
};

export default SecondModal;

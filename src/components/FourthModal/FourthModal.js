import "./FourthModal.scss";
import checkmark from "../../assets/Icons/circle-tick_majoricons.svg";
import google from "../../assets/Icons/google.jpg";
import star from "../../assets/Icons/star.jpg";
import profile from "../../assets/Icons/jenny-pic.svg";
import chevron from "../../assets/Icons/mobile-chevron_major.svg";

const FourthModal = ({ closeModal,back }) => {
  return (
    <div className="modal-wrapper">
      <div className="modal-fourth">
        <button className="modal-fourth__close-btn">+</button>
        <button className="modal-fourth__close-btn modal-fourth__close-btn--back">
          <img src={chevron} onClick={() => {
            back()
          }}/>
        </button>
        <div className="modal-fourth__header"></div>
        <div className="content">
          <h1 className="content__title">
            What makes shozilla.com so successful?
          </h1>
          <div className="content__block">
            <img className="content__profile-img" alt="profile" src={profile} />
            <div className="content__details">
              <p className="content__text content__text--name">Jenny Gilmore</p>
              <p className="content__text content__text--position">
                SEO Mentor
              </p>
              <p className="content__text content__text--quote">
                “Knowing your niche is so important. I have a system and a plan.
                I will help you along your journey to understanding the market,
                building and maintaining relationships with existing customers
                and finding new ones.”
              </p>
            </div>
          </div>
          <div className="app-recommentations">
            <p className="app-recommentations__title">
              Jenny recommends these Apps to get started:
            </p>
            <div className="app-recommentations__apps">
              <div className="app-recommentations__app">
                <img
                  className="app-recommentations__checkmark"
                  src={checkmark}
                  alt="checkmark"
                />
                <div className="app">
                  <img className="app__logo" src={google} alt="google" />
                  <span className="app__name">Google Channel</span>
                </div>
              </div>
              <div className="app-recommentations__app">
                <img
                  className="app-recommentations__checkmark"
                  src={checkmark}
                  alt="checkmark"
                />
                <div className="app">
                  <img className="app__logo" src={star} alt="star" />
                  <span className="app__name">Product Reviews</span>
                </div>
              </div>
            </div>
          </div>
          <div className="btns">
            <button className="btns__btn">Open Shop without Mentorship</button>
            <button
              className="btns__btn btns__btn--start"
              onClick={() => {
                closeModal();
              }}
            >
              Get Started with Jenny's Success Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthModal;

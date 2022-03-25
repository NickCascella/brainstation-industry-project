import "./SuccessGuide.scss";
import checkmark from "../../assets/Icons/circle-tick_majoricons.svg";
import dots from "../../assets/Icons/horizontal-dots_minor.svg";

const SuccessGuide = () => {
  return (
    <div className="success-guide-wrapper">
      <section className="success-guide">
        <div className="header">
          <h1 className="header__title">Jenny's Success Guide</h1>
          <img className="header__menu" src={dots} alt="menu" />
        </div>
        <div className="guide">
          <ul className="guide__tabs">
            <li className="guide__tab guide__tab--completed">
              <img
                className="guide__progress"
                src={checkmark}
                alt="checkmark"
              />
              <span className="guide__tab-name">Add Domain</span>
            </li>
            <li className="guide__tab">
              <div
                className="guide__progress guide__progress--na"
                alt="unfilled progress"
              ></div>
              <span className="guide__tab-name">Select a Theme</span>
            </li>
            <li className="guide__tab">
              <div
                className="guide__progress guide__progress--na"
                alt="unfilled progress"
              ></div>
              <span className="guide__tab-name">Finding your niche market</span>
            </li>
            <li className="guide__tab">
              <div
                className="guide__progress guide__progress--na"
                alt="unfilled progress"
              ></div>
              <span className="guide__tab-name">
                Creating a Business Strategy
              </span>
            </li>
            <li className="guide__tab">
              <div
                className="guide__progress guide__progress--na"
                alt="unfilled progress"
              ></div>
              <span className="guide__tab-name">Best Practices</span>
            </li>
            <li className="guide__tab">
              <div
                className="guide__progress guide__progress--na"
                alt="unfilled progress"
              ></div>
              <span className="guide__tab-name">Tips for shoe businesses</span>
            </li>
            <li className="guide__tab">
              <div
                className="guide__progress guide__progress--na"
                alt="unfilled progress"
              ></div>
              <span className="guide__tab-name">Analytic overview</span>
            </li>
          </ul>
          <div></div>
        </div>
      </section>
    </div>
  );
};

export default SuccessGuide;

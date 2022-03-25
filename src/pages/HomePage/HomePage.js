import "./HomePage.scss";
import FirstModal from "../../components/FirstModal/FirstModal";
import SecondModal from "../../components/SecondModal/SecondModal";
import ThirdModal from "../../components/ThirdModal/ThirdModal";
import FourthModal from "../../components/FourthModal/FourthModal";
import SuccessGuide from "../../components/SuccessGuide/SuccessGuide";
import React from "react";

class HomePage extends React.Component {
  state = {
    firstModal: true,
    secondModal: false,
    thirdModal: false,
    fourthModal: false,
    successGuide: false,
  };

  closeFirstmodal = () => {
    this.setState({ firstModal: false, secondModal: true });
  };

  closeSecondmodal = () => {
    this.setState({ secondModal: false, thirdModal: true });
  };

  closeThirdmodal = () => {
    this.setState({ thirdModal: false, fourthModal: true });
  };

  closeFourthmodal = () => {
    this.setState({ fourthModal: false, successGuide: true });
  };

  back = () => {
    this.setState({ fourthModal: false, thirdModal: true });
  }

  render() {
    const { firstModal, secondModal, thirdModal, fourthModal, successGuide } =
      this.state;

    return (
      <div className="home-page">
        {firstModal && <FirstModal closeModal={this.closeFirstmodal} />}
        {secondModal && <SecondModal closeModal={this.closeSecondmodal} />}
        {thirdModal && <ThirdModal closeModal={this.closeThirdmodal} />}
        {fourthModal && <FourthModal closeModal={this.closeFourthmodal} back={this.back} />}
        {successGuide && <SuccessGuide />}
      </div>
    );
  }
}

export default HomePage;

import "./ThirdModal.scss";
import Shoe from '../../assets/images/unsplash_164_6wVEHfIShoeimages.svg';
import Avatar1 from '../../assets/images/unsplash_ILip77SbmOE_Avatar.svg';
import Avatar2 from '../../assets/images/unsplash_mEZ3PoFGs_k_Avatar.svg';
import Avatar3 from '../../assets/images/unsplash_WNoLnJo7tS8_Avatar.svg';
import Shoe2 from '../../assets/images/unsplash_dwKiHoqqxk8Shoeimages.svg';
import Shoe3 from '../../assets/images/unsplash_NOpsC3nWTzYShoeimages.svg';
import CancelIcon from '../../assets/images/circle-cancel_major.svg';


const ThirdModal = ({ closeModal }) => {
  return (
    <div className="modal-wrapper">
      <div className="modal-third">
        
        <div className="modal3__container">
          
          <div className="modal3__wrapper">
            <div className="modal3__header">
              <h1 className="modal3__title">
                You're Insterested in Selling
              </h1>
              <form className="modal3__form">
              <img className="modal3__form-cancelicon" src={CancelIcon} alt='cancel icon'></img>
                <input className="modal3__input" type='text' placeholder='Shoes'></input>
              </form>
            </div>
            <h2 className="modal3__subtitle">Suggested shpos and mentors to get you started</h2>
            <div className='modal3__cards'>
              <div  className="modal3__card">
                <div className="modal3__card-img">
                  <img className="modal3__card-product" src={Shoe}></img>
                </div>
                <div className="card-info__wrapper">
                <div className="modal3__card-info">
                  <p className="modal3__card-infotitle">SHOES.COM</p>
                  <div className="modal3__card-infosubtitle">
                    <p className="modal3__card-infosubtitletext text-left">Top seller</p>
                    <p className="modal3__card-infosubtitletext">1M Sales</p>
                  </div>
                </div>
                <div className="modal3__card-infobottom">
                  <img className="modal3__card-avatar" src={Avatar1} alt='avatar icon'/>
                  <button className="modal3__card-button">Learn Adrians Guide</button>
                </div>
              </div>
              </div>

              <div  className="modal3__card">
                <div className="modal3__card-img">
                  <img className="modal3__card-product" src={Shoe2}></img>
                </div>
                <div className="card-info__wrapper">
                <div className="modal3__card-info">
                  <p className="modal3__card-infotitle">SHOZELLA.COM</p>
                  <div className="modal3__card-infosubtitle">
                    <p className="modal3__card-infosubtitletext text-left">Marketing Genius</p>
                    <p className="modal3__card-infosubtitletext">5 yrs Exp</p>
                  </div>
                </div>
                <div className="modal3__card-infobottom">
                  <img className="modal3__card-avatar" src={Avatar2} alt='avatar icon'/>
                  <button
                  onClick={() => {
                    closeModal();
                  }} className="modal3__card-button">Learn Jennys Guide</button>
                </div>
              </div>
              </div>

              <div  className="modal3__card">
                <div className="modal3__card-img">
                  <img className="modal3__card-product" src={Shoe3}></img>
                </div>
                <div className="card-info__wrapper">
                <div className="modal3__card-info">
                  <p className="modal3__card-infotitle">SOLES.COM</p>
                  <div className="modal3__card-infosubtitle">
                    <p className="modal3__card-infosubtitletext text-left">Top seller</p>
                    <p className="modal3__card-infosubtitletext">1M Sales</p>
                  </div>
                </div>
                <div className="modal3__card-infobottom">
                  <img className="modal3__card-avatar" src={Avatar3} alt='avatar icon'/>
                  <button className="modal3__card-button">Learn Jonys Guide</button>
                </div>
              </div>
              </div>

            </div>


          </div>

        </div>

      </div>
    </div>
  );
};

export default ThirdModal;

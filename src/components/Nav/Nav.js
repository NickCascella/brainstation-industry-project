import "./Nav.scss";
import homeIcon from "../../assets/Icons/home_majoricons.svg";
import customersIcon from "../../assets/Icons/customers_majoricons.svg";
import productsIcon from "../../assets/Icons/products_majoricons.svg";
import discountIcon from "../../assets/Icons/discounts_majoricons.svg";
import appsIcon from "../../assets/Icons/apps_majoricons.svg";
import analyticsIcon from "../../assets/Icons/Solid/analyticsicons.svg";
import circlePlus from "../../assets/Icons/circle-plus_majoricons.svg";
import storeIcon from "../../assets/Icons/store_majoricons.svg";
import viewIcon from "../../assets/Icons/view_majoricons.svg";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__links-list">
        <li className="nav__list-item">
          <img className="nav__item-img" src={homeIcon} alt={"home"} />
          <span className="nav__item-text">Home</span>
        </li>
        <li className="nav__list-item">
          <img className="nav__item-img" src={"/"} alt={"orders"} />
          <span className="nav__item-text">Orders</span>
        </li>
        <li className="nav__list-item">
          <img className="nav__item-img" src={productsIcon} alt={"home"} />
          <span className="nav__item-text">Products</span>
        </li>
        <li className="nav__list-item">
          <img
            className="nav__item-img"
            src={customersIcon}
            alt={"customers"}
          />
          <span className="nav__item-text">Customers</span>
        </li>
        <li className="nav__list-item">
          <img
            className="nav__item-img"
            src={analyticsIcon}
            alt={"analytics"}
          />
          <span className="nav__item-text">Analytics</span>
        </li>
        <li className="nav__list-item">
          <img className="nav__item-img" src={"/"} alt={"marketing"} />
          <span className="nav__item-text">Marketing</span>
        </li>
        <li className="nav__list-item">
          <img className="nav__item-img" src={discountIcon} alt={"home"} />
          <span className="nav__item-text">Discounts</span>
        </li>
        <li className="nav__list-item">
          <img className="nav__item-img" src={appsIcon} alt={"home"} />
          <span className="nav__item-text">App</span>
        </li>
      </ul>
      <div className="additional-list">
        <div className="additional-list__item">
          <span className="additional-list__title">Sales Channels</span>
          <img className="nav__item-img" src={circlePlus} />
        </div>
        <div className="additional-list__item">
          <div className="additional-list__title-wrapper">
            <img className="nav__item-img" src={storeIcon} />
            <span className="additional-list__title">Sales Channels</span>
          </div>
          <img className="nav__item-img" src={viewIcon} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;

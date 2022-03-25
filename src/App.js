import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import HomePage from "./pages/HomePage/HomePage";
import dropdownIcon from "./assets/Icons/dropdown_minoricons.svg";
import shopifyLogo from "./assets/Icons/shopify_logo.svg";
import falseAvatarLogo from "./assets/Icons/falseAvatar.svg";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="app__search">
          <div className="app__shopify-logo-wrapper">
            <img
              className="app__shopify-logo"
              src={shopifyLogo}
              alt="shopify logo"
            />
            <span className="app__shopify-username-menu">michelleserdan.u</span>
            <img
              className="app__dropdown-logo"
              src={dropdownIcon}
              alt="drop down logo"
            />
          </div>
          <input className="app__search-bar" type="text" placeholder="Search" />
          <div className="app__shopify-user-icon-wrapper">
            <img
              className="app__shopify-logo"
              src={falseAvatarLogo}
              alt="user logo"
            />
            <span className="app__shopify-username">Michelle Serdan</span>
          </div>
        </div>
        <div className="app__nav-content-wrapper">
          <Nav />
          <HomePage />
          {/* <Switch>
            <Route path={"/"} exact component={HomePage} />
          </Switch> */}
        </div>
      </div>
    </Router>
  );
}

export default App;

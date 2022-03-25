import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="app__search">
          <div className="app__shopify-logo-wrapper">
            <img src={""} alt="shopify logo" />
            <span className="app__shopify-username-menu">michelleserdan.u</span>
          </div>
          <input className="app__search-bar" type="text" placeholder="Search" />
          <div className="app__shopify-user-icon-wrapper">
            <img src={"/"} alt="user logo" />
            <span className="app__shopify-username">Michelle Serdan</span>
          </div>
        </div>
        <div>
          <Nav />
          <Switch>
            <Route path={"/"} exact component={HomePage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

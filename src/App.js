import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path={"/"} exact component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;

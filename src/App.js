import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";

import Home from "./sites/Home/Home";
import About from "./sites/About/About";
import Programm from "./sites/Programm/Programm";
import Animals from "./sites/Animals/Animals";
import Contact from "./sites/Contact/Contact";
import Footer from "./components/Footer/Footer";

import "./styles/App.scss";

function App() {
  return (
    <Router>
      <div className="seite">
        <Navigation />

        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/Überuns" component={About}></Route>
          <Route path="/Programm" component={Programm}></Route>
          <Route path="/Tiere" component={Animals}></Route>
          <Route path="/Kontakt" component={Contact}></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

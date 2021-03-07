import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Nav from './components/Nav';
import Home from './sites/Home';
import About from './sites/About';
import Programm from './sites/Programm';
import Animals from './sites/Animals';
import Contact from './sites/Contact';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/Überuns" component={About}></Route>
          <Route path="/Programm" component={Programm}></Route>
          <Route path="/Tiere" component={Animals}></Route>
          <Route path="/Kontakt" component={Contact}></Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

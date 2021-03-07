import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Nav from './components/Nav';
import Home from './sites/Home';
import About from './sites/About';
import Programm from './sites/Programm';
import Animals from './sites/Animals';
import Contact from './sites/Contact';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/programm" component={Programm}></Route>
          <Route path="/animals" component={Animals}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

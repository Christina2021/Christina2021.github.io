import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Splash from './pages/Splash.js';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import ContactMe from './pages/ContactMe';
import NoMatch from './pages/NoMatch';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Splash} />
          <Route exact path="/about" component={AboutMe} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={ContactMe} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

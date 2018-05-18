import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home'
import Addcontact from './Addcontact'
import './App.css';
import Panel from './Panel'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">ADOPTE UN WOOKIE</h1>
        </header>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/add" component={Addcontact} />
            <Route path="/panel" component={Panel} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

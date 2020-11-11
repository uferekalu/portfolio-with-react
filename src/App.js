import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarComponent from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

class App extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <>
        <Router>
          <NavbarComponent />

          <Route
          path="/"
          exact
          render={() => <HomePage/>}
          />
          
          <Route
          path="/about"
          exact
          render={() => <About/>}
          />
          
          <Route
          path="/projects"
          exact
          render={() => <Projects/>}
          />
          
          <Route
          path="/contact"
          exact
          render={() => <Contact/>}
          />

        </Router>
      </>
    )
  }
}

export default App;


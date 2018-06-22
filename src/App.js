import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import MeetTheStaff from './components/MeetTheStaff';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Links from './components/Links';
import Navbar from './components/CustomNavbar';
import Footer from './components/Footer';
import SMTMap from './components/Map';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Navbar />
          <Route exact path="/" component={Welcome} />
          <Route exact path="/meetthestaff" component={MeetTheStaff} />
          <Route exact path="/testimonials" component={Testimonials} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/links" component={Links} />
          <Footer />
        </div>
      </Router>

    );
  }
}

export default App;

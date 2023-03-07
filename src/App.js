import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutUs from './components/pages/AboutUs';
import Enlist from './components/pages/Enlist';
import UpdateVehicles from './components/UpdateVehicles';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/AboutUs' component={AboutUs} />
          <Route path='/Enlist' component={Enlist} />
          <Route path='/update/:vehicleId' component={UpdateVehicles} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

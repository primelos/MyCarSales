import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { connect } from 'react-redux'
import { buyItem, removeFeature} from './actions'
import { Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute'
import Login from './components/Login'
import SignUp from './components/SignUp'
import CarHome from './components/CarHome'

const App = (props) => {

  
  return (
    <div className="main-page">
      <Route exact path="/" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <PrivateRoute path="/protected" component={CarHome} />
    </div>
  );
};


export default App;

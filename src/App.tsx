import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { LandingPage } from './pages/landing';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route component={LandingPage} />
    </Switch>
  </div>
)

export default App;

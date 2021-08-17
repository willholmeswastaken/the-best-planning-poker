import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { LandingPage } from './pages/landing';
import { CreateRoomPage } from './pages/create-room';
import { ViewRoomPage } from './pages/view-room';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/create-room" component={CreateRoomPage} />
      <Route exact path="/view-room" component={ViewRoomPage} />
      <Route component={LandingPage} />
    </Switch>
  </div>
)

export default App;

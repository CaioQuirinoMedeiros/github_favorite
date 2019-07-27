import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';

import Main from '../pages/Main';
import Favorites from '../pages/Favorites';
import Header from '../components/Header';

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/favorites" component={Favorites} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);

export default Routes;

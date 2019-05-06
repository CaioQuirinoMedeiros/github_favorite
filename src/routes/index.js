import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "../pages/main";
import Footer from "../components/Footer";
import Header from '../components/Header';

const Routes = () => (
  <BrowserRouter>
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/favorites" component={Footer} />
      </Switch>
    </>
  </BrowserRouter>
);

export default Routes;

import React from "react";
import PropTypes from "prop-types";

import { BrowserRouter } from "react-router-dom";

import { connect } from "react-redux";

import Main from "../pages/main";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Routes = props => (
  <BrowserRouter>
    <>
      <Header />
      {props.route === "main" ? <Main /> : <Footer />}
    </>
  </BrowserRouter>
);

Header.propTypes = {
  route: PropTypes.string
};

const mapStateToProps = state => ({
  route: state.favorites.route
});

export default connect(mapStateToProps)(Routes);

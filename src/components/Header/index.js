import React from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";

import { connect } from "react-redux";

const Header = props => {
  return (
    <Container>
      <div className="wrapper-column">
        <h1>GituHub Favorites</h1>
        <div className="wrapper-row">
          <a href="/">Search</a>
          <a href="/favorites">Favorites ({props.count})</a>
        </div>
      </div>
    </Container>
  );
};

Header.propTypes = {
  count: PropTypes.number
};

const mapStateToProps = state => ({
  count: state.favorites.favorites.length
});

export default connect(mapStateToProps)(Header);

import React from "react";
import PropTypes from "prop-types";

import { bindActionCreators } from "redux";

import { Creators as FavoriteActions } from "../../store/ducks/favorites";

import { Container } from "./styles";

import { connect } from "react-redux";

const Header = props => {
  return (
    <Container>
      <div className="wrapper-column">
        <h1>GituHub Favorites</h1>
        <div className="wrapper-row">
          <button onClick={() => props.routeChange("main")}>Search</button>
          <button onClick={() => props.routeChange("footer")}>
            Favorites ({props.count})
          </button>
        </div>
      </div>
    </Container>
  );
};

Header.propTypes = {
  count: PropTypes.number,
  route: PropTypes.string
};

const mapStateToProps = state => ({
  count: state.favorites.favorites.length,
  route: state.favorites.route
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(FavoriteActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

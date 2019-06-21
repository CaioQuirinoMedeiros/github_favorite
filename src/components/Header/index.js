import React from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { Creators as FavoriteActions } from "../../store/ducks/favorites";

import { Container } from "./styles";

const Header = props => {
  return (
    <Container>
      <div />
      <h1>GitHub Favorite</h1>
      <div>
        <Link to="/">Search</Link>
        <Link to="/favorites">Favorites ({props.count})</Link>
      </div>
    </Container>
  );
};

Header.propTypes = {
  count: PropTypes.number
};

const mapStateToProps = state => ({
  count: state.favorites.data.length
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(FavoriteActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

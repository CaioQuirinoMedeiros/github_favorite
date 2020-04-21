import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Creators as FavoriteActions } from '../../store/ducks/favorites';

import { Container, Link } from './styles';

const Header = ({ count }) => (
  <Container>
    <Link to="/">Search</Link>
    <h1>GitHub Favorite</h1>
    <Link to="/favorites">{`Favorites (${count})`}</Link>
  </Container>
);

Header.propTypes = {
  count: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  count: state.favorites.data.length,
});

const mapDispatchToProps = dispatch => bindActionCreators(FavoriteActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

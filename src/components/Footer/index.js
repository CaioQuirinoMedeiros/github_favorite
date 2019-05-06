import React from "react";
import PropTypes from "prop-types";

import { Container, Repository } from "./styles";

import { bindActionCreators } from "redux";

import { Creators as FavoriteActions } from "../../store/ducks/favorites";

import { connect } from "react-redux";

const Footer = props => {
  return (
    <>
      <Container>
        {props.favorites.map(favorite => (
          <Repository key={favorite.id} id={favorite.id}>
            <header>
              <img src={favorite.img} alt={favorite.owner} />
              <strong>{favorite.name}</strong>
              <small>{favorite.owner}</small>
              <i
                className="fa fa-close"
                onClick={() => props.removeFavorite(favorite.id)}
              />
            </header>
            <ul>
              <li>
                {favorite.stars} <small>stars</small>
              </li>
              <li>
                {favorite.forks} <small>forks</small>
              </li>
              <li>
                {favorite.issues} <small>issues</small>
              </li>
              <li>
                {favorite.lastCommit} <small>last commit</small>
              </li>
            </ul>
          </Repository>
        ))}
      </Container>
    </>
  );
};

Footer.propTypes = {
  favorites: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      img: PropTypes.string,
      name: PropTypes.string,
      owner: PropTypes.string,
      description: PropTypes.string,
      stars: PropTypes.number,
      forks: PropTypes.forks,
      issues: PropTypes.issues,
      lastCommit: PropTypes.string
    })
  ).isRequired
};

const mapStateToProps = state => ({
  favorites: state.favorites.favorites
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(FavoriteActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);

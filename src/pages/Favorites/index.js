import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  Container, Repository, ButtonsWrapper, Button, Header, Infos, Info,
} from './styles';

import { Creators as favoriteActions } from '../../store/ducks/favorites';

const Favorites = ({ favorites, removeFavorite, addFavoriteRequest }) => (
  <Container>
    {favorites.map(repo => (
      <Repository key={repo.id}>
        <ButtonsWrapper>
          <Button onClick={() => addFavoriteRequest(repo.full_name, true)}>
            <i className="fa fa-undo" />
          </Button>
          <Button onClick={() => removeFavorite(repo.id)}>
            <i className="fa fa-close" />
          </Button>
        </ButtonsWrapper>
        <Header href={repo.url} target="_blank">
          <img src={repo.img} alt={repo.owner} />
          <strong>{repo.name}</strong>
          <small>{repo.owner}</small>
        </Header>
        <Infos>
          <Info>
            <span>{repo.stars}</span>
            <small>stars</small>
          </Info>
          <Info>
            <span>{repo.forks}</span>
            <small>forks</small>
          </Info>
          <Info>
            <span>{repo.issues}</span>
            <small>issues</small>
          </Info>
          <Info>
            <span>{repo.lastCommit}</span>
            <small>last commit</small>
          </Info>
        </Infos>
      </Repository>
    ))}
  </Container>
);

Favorites.propTypes = {
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
      lastCommit: PropTypes.string,
    }),
  ).isRequired,
  removeFavorite: PropTypes.func.isRequired,
  addFavoriteRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  favorites: state.favorites.data,
});

const mapDispatchToProps = dispatch => bindActionCreators(favoriteActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Favorites);

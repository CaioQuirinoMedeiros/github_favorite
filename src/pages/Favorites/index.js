import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import {
  Container,
  Repository,
  RepositoriesContainer,
  LinkRepository
} from "./styles";

import { Creators as favoriteActions } from "../../store/ducks/favorites";

class Favorites extends Component {
  state = {
    data: [],
    loading: false,
    error: false
  };

  render() {
    const { favorites, removeFavorite, addFavoriteRequest } = this.props;

    return (
      <Container>
        <RepositoriesContainer>
          {favorites.map(repo => (
            <LinkRepository key={repo.id} href={repo.url} target="_blank">
              <Repository id={repo.id}>
                <header>
                  <img src={repo.img} alt={repo.owner} />
                  <strong>{repo.name}</strong>
                  <small>{repo.owner}</small>
                  <i
                    className="fa fa-close"
                    onClick={e => {
                      e.preventDefault();
                      removeFavorite(repo.id);
                    }}
                  />
                  <i
                    className="fa fa-undo"
                    onClick={e => {
                      e.preventDefault();
                      addFavoriteRequest(repo.full_name, true);
                    }}
                  />
                </header>
                <ul>
                  <li>
                    {repo.stars} <small>stars</small>
                  </li>
                  <li>
                    {repo.forks} <small>forks</small>
                  </li>
                  <li>
                    {repo.issues} <small>issues</small>
                  </li>
                  <li>
                    {repo.lastCommit} <small>last commit</small>
                  </li>
                </ul>
              </Repository>
            </LinkRepository>
          ))}
        </RepositoriesContainer>
      </Container>
    );
  }
}

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
      lastCommit: PropTypes.string
    })
  ).isRequired
};

const mapStateToProps = state => ({
  favorites: state.favorites.data
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(favoriteActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);

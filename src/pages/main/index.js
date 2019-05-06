import React, { Component } from "react";
import PropTypes from "prop-types";

import { Form, Pagination, Lista } from "./styles";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as FavoriteActions } from "../../store/ducks/favorites";

class Main extends Component {
  static propTypes = {
    pages: PropTypes.arrayOf(PropTypes.number),
    page: PropTypes.number,
    addFavoriteRequest: PropTypes.func,
    searchRequest: PropTypes.func.isRequired,
    data: PropTypes.shape({
      loading: PropTypes.bool,
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          description: PropTypes.string,
          url: PropTypes.string
        })
      ).isRequired,
      error: PropTypes.string
    })
  };

  state = {
    repositoryInput: "",
    repository: "",
    page: 1
  };

  handleSearchRepository = event => {
    event.preventDefault();
    this.props.searchRequest(this.state.repositoryInput, 1);
    this.setState({ repository: this.state.repositoryInput });
    this.setState({ repositoryInput: "" });
  };

  handleAddRepository = nameRepo => {
    this.props.addFavoriteRequest(nameRepo);
  };

  render() {
    return (
      <>
        <Form
          onSubmit={this.handleSearchRepository}
          withError={this.props.favorites.error}
        >
          <div className="wrapper-row">
            <input
              placeholder="user"
              value={this.state.repositoryInput}
              onChange={e => this.setState({ repositoryInput: e.target.value })}
            />
            <button type="submit">
              {this.props.favorites.loading ? (
                <i className="fa fa-spinner fa-pulse" />
              ) : (
                "Search"
              )}
            </button>
          </div>

          {!!this.props.favorites.error && (
            <span>{this.props.favorites.error}</span>
          )}
        </Form>
        <Pagination>
          {this.props.favorites.pages &&
            this.props.favorites.pages.map(page => (
              <li key={page}>
                <button
                  className={
                    page === this.props.favorites.page ? "active" : undefined
                  }
                  onClick={() => {
                    this.setState({ page });
                    this.props.searchRequest(this.state.repository, page);
                  }}
                >
                  {page}
                </button>
              </li>
            ))}
        </Pagination>
        <Lista>
          {this.props.favorites.data.map(fav => (
            <li key={fav.id}>
              <div className="wrapper-column">
                <strong>{fav.name}</strong>
                <p>{fav.description}</p>
              </div>
              <div className="wrapper-row">
                <a href={fav.url} target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-external-link" />
                </a>
                {this.props.favorites.favorites.find(
                  favorite => favorite.id === fav.id
                ) ? (
                  <></>
                ) : (
                  <button onClick={() => this.handleAddRepository(fav.name)}>
                    <i className="fa fa-star" />
                  </button>
                )}
              </div>
            </li>
          ))}
        </Lista>
      </>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(FavoriteActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

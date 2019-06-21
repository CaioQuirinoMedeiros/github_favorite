import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import api from "../../services/api";

import { Form, Container, Lista, Pagination } from "./styles";

import { Creators as FavoriteActions } from "../../store/ducks/favorites";

class Main extends Component {
  static propTypes = {
    addFavoriteRequest: PropTypes.func.isRequired,
    removeFavorite: PropTypes.func.isRequired,
    favorites: PropTypes.arrayOf(PropTypes.number).isRequired
  };

  state = {
    user: "",
    data: [],
    loading: false,
    error: "",
    pages: {}
  };

  componentDidMount = async () => {
    const user = JSON.parse(localStorage.getItem("@github_favorite:user"));

    if (user) {
      this.setState({ user }, () => this.handleSearchRepository());
    }
  };

  handleInputChange = e => {
    this.setState({ user: e.target.value, error: "" });
  };

  getPages = response => {
    if (!response.headers.link) {
      this.setState({ pages: {} });
      return;
    }

    let pagesArr = response.headers.link.split(", ").map(page => ({
      [page.split("; ")[1].split('"')[1]]: page.split("; ")[0].slice(-2, -1)
    }));

    let pages = {};

    pagesArr.forEach(page => {
      pages = { ...pages, ...page };
    });

    this.setState({ pages });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.handleSearchRepository();
  };

  handleSearchRepository = async (page = 1) => {
    const { user } = this.state;

    try {
      this.setState({ loading: true });

      const response = await api.get(`users/${user}/repos?page=${page}`);

      this.getPages(response);

      const data = response.data.map(repo => ({
        full_name: repo.full_name,
        id: repo.id,
        name: repo.name,
        url: repo.html_url
      }));

      this.setState({
        data: [...data],
        error: ""
      });

      localStorage.setItem("@github_favorite:user", JSON.stringify(user));
    } catch (err) {
      console.log(err);

      localStorage.removeItem("@github_favorite:user");

      this.setState({
        data: [],
        pages: {},
        error: "Ops! Não foi possível buscar os repositórios deste usuário"
      });
    } finally {
      this.setState({ loading: false });
    }
  };

  handleStarClick = repo => {
    const { favorites, removeFavorite, addFavoriteRequest } = this.props;

    favorites.includes(repo.id)
      ? removeFavorite(repo.id)
      : addFavoriteRequest(repo.full_name, false);
  };

  render() {
    const { data, loading, error, pages } = this.state;
    const { favorites } = this.props;

    return (
      <Container>
        <Form onSubmit={this.handleSubmit} error={!!error}>
          <div className="wrapper-row">
            <input
              placeholder="user"
              value={this.state.user}
              onChange={this.handleInputChange}
            />
            <button type="submit">
              {loading ? <i className="fa fa-spinner fa-pulse" /> : "Search"}
            </button>
          </div>

          {!!error && <span>{error}</span>}
        </Form>

        <Pagination>
          <div>
            {pages.first && (
              <button onClick={() => this.handleSearchRepository(pages.first)}>
                <i className="fa fa-angle-double-left" />
              </button>
            )}
            {pages.prev && (
              <button onClick={() => this.handleSearchRepository(pages.prev)}>
                <i className="fa fa-angle-left" />
              </button>
            )}
          </div>
          <div>
            {pages.next && (
              <button onClick={() => this.handleSearchRepository(pages.next)}>
                <i className="fa fa-angle-right" />
              </button>
            )}
            {pages.last && (
              <button onClick={() => this.handleSearchRepository(pages.last)}>
                <i className="fa fa-angle-double-right" />
              </button>
            )}
          </div>
        </Pagination>

        <Lista>
          {data.map(repo => (
            <li key={repo.id}>
              <strong>{repo.name}</strong>

              <div className="wrapper-row">
                <a href={repo.url} target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-external-link" />
                </a>

                <button onClick={() => this.handleStarClick(repo)}>
                  <i
                    className="fa fa-star"
                    style={favorites.includes(repo.id) ? { color: "gold" } : {}}
                  />
                </button>
              </div>
            </li>
          ))}
        </Lista>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites.data.map(favorite => favorite.id)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(FavoriteActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

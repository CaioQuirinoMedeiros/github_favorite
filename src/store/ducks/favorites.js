/**
 * Types
 */
export const Types = {
  SEARCH_REQUEST: "favorites/SEARCH_REQUEST",
  PAGE_SUCCESS: "favorites/PAGE_SUCCESS",
  SEARCH_SUCCESS: "favorites/SEARCH_SUCCESS",
  SEARCH_FAILURE: "favorites/SEARCH_FAILURE",
  ADD_REQUEST: "favorites/ADD_REQUEST",
  ADD_SUCCESS: "favorites/ADD_SUCCESS",
  ADD_FAILURE: "favorites/ADD_FAILURE",
  REMOVE: "favorites/REMOVE"
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  loading: false,
  data: [],
  page: 1,
  pages: [],
  favorites: JSON.parse(localStorage.getItem("favoritesRepos")) || [],
  error: null
};

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SEARCH_REQUEST:
      return { ...state, loading: true, data: [] };
    case Types.PAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        page: action.payload.page,
        data: [...action.payload.repos],
        error: null
      };
    case Types.SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        page: 1,
        pages: [...action.payload.pages],
        data: [...action.payload.repos],
        error: null
      };
    case Types.SEARCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case Types.ADD_SUCCESS:
      localStorage.setItem(
        "favoritesRepos",
        JSON.stringify([...state.favorites, action.payload.repo])
      );
      return {
        ...state,
        loading: false,
        favorites: [...state.favorites, action.payload.repo],
        error: null
      };
    case Types.ADD_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    case Types.REMOVE:
      const newFavorites = state.favorites;
      newFavorites.splice(
        state.favorites.findIndex(fav => fav.id === action.payload.id),
        1
      );
      localStorage.setItem("favoritesRepos", JSON.stringify([...newFavorites]));
      return { ...state, favorites: [...newFavorites] };
    default:
      return state;
  }
}

/**
 * Actions
 */

export const Creators = {
  searchRequest: (user, page) => ({
    type: Types.SEARCH_REQUEST,
    payload: { user, page }
  }),

  pageSuccess: (repos, page) => ({
    type: Types.PAGE_SUCCESS,
    payload: { repos, page }
  }),

  searchSuccess: (repos, pages) => ({
    type: Types.SEARCH_SUCCESS,
    payload: { repos, pages }
  }),

  searchFailure: error => ({
    type: Types.SEARCH_FAILURE,
    payload: { error }
  }),

  addFavoriteRequest: repository => ({
    type: Types.ADD_REQUEST,
    payload: { repository }
  }),

  addFavoriteSuccess: repo => ({
    type: Types.ADD_SUCCESS,
    payload: { repo }
  }),

  addFavoriteFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error }
  }),

  removeFavorite: id => ({
    type: Types.REMOVE,
    payload: { id }
  })
};

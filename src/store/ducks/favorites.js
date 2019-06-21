/**
 * Types
 */
export const Types = {
  ADD_REQUEST: "favorites/ADD_REQUEST",
  ADD_SUCCESS: "favorites/ADD_SUCCESS",
  ATT_SUCCESS: "favorites/ATT_SUCCESS",
  REMOVE: "favorites/REMOVE"
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  data: JSON.parse(localStorage.getItem("@github_favorite:favorites")) || []
};

export default function favorites(state = INITIAL_STATE, action) {
  let newFavorites;
  const saveToStorage = data =>
    localStorage.setItem(
      "@github_favorite:favorites",
      JSON.stringify([...data])
    );

  switch (action.type) {
    case Types.ADD_SUCCESS:
      newFavorites = [...state.data, action.payload.repository];

      saveToStorage(newFavorites);

      return {
        ...state,
        data: [...newFavorites]
      };

    case Types.REMOVE:
      newFavorites = state.data.filter(repo => repo.id !== action.payload.id);

      saveToStorage(newFavorites);

      return { ...state, data: [...newFavorites] };
    case Types.ATT_SUCCESS:
      const newRepo = action.payload.repository;

      newFavorites = state.data.map(repo =>
        repo.id === newRepo.id ? newRepo : repo
      );

      saveToStorage(newFavorites);

      return { ...state, data: [...newFavorites] };
    default:
      return state;
  }
}

/**
 * Actions
 */

export const Creators = {
  addFavoriteRequest: (repository, refreshing) => ({
    type: Types.ADD_REQUEST,
    payload: { repository, refreshing }
  }),

  addFavoriteSuccess: repository => ({
    type: Types.ADD_SUCCESS,
    payload: { repository }
  }),

  attFavoriteSuccess: repository => ({
    type: Types.ATT_SUCCESS,
    payload: { repository }
  }),

  removeFavorite: id => ({
    type: Types.REMOVE,
    payload: { id }
  })
};

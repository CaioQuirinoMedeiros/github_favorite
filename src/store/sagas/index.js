import { all, takeLatest } from "redux-saga/effects";

import { Types as FavoriteTypes } from "../ducks/favorites";

import { search, addFavorite } from "./favorites";

export default function* rootSaga() {
  yield all([takeLatest(FavoriteTypes.SEARCH_REQUEST, search), takeLatest(FavoriteTypes.ADD_REQUEST, addFavorite)]);
}

import { call, put /* , select */ } from "redux-saga/effects";
import api from "../../services/api";
import moment from "moment";

import { Creators as FavoriteActions } from "../ducks/favorites";

export function* addFavorite({ payload }) {
  try {
    const { data } = yield call(api.get, `repos/${payload.repository}`);

    const repoData = {
      img: data.owner.avatar_url,
      id: data.id,
      owner: data.owner.login,
      name: data.name,
      description: data.description,
      stars: data.stargazers_count,
      forks: data.forks_count,
      issues: data.open_issues,
      url: data.html_url,
      full_name: data.full_name,
      lastCommit: moment(data.pushed_at).fromNow()
    };

    payload.refreshing
      ? yield put(FavoriteActions.attFavoriteSuccess(repoData))
      : yield put(FavoriteActions.addFavoriteSuccess(repoData));
  } catch (err) {
    console.log(err);
  }
}

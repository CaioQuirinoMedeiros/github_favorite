import { call, put /* , select */ } from "redux-saga/effects";
import api from "../../services/api";
import moment from "moment";

import { Creators as FavoriteActions } from "../ducks/favorites";

export function* search(action) {
  try {
    const response = yield call(
      api.get,
      `users/${action.payload.user}/repos?page=${action.payload.page}`
    );

    const reposData = response.data.map(repo => ({
      id: repo.id,
      name: repo.full_name,
      description: repo.description,
      url: repo.html_url
    }));

    if (action.payload.page !== 1)
      return yield put(FavoriteActions.pageSuccess(reposData, action.payload.page));

    let pages = [];

    if (response.headers.link) {
      for (let i = 0; i < response.headers.link.slice(-14, -13); i++) {
        pages.push(i + 1);
      }
    }

    yield put(FavoriteActions.searchSuccess(reposData, pages));
  } catch (err) {
    yield put(FavoriteActions.searchFailure("Erro ao buscar repositórios"));
  }
}

export function* addFavorite(action) {
  try {
    const { data } = yield call(api.get, `repos/${action.payload.repository}`);

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
      lastCommit: moment(data.pushed_at).fromNow()
    };

    yield put(FavoriteActions.addFavoriteSuccess(repoData));
  } catch (err) {
    yield put(
      FavoriteActions.addFavoriteFailure("Erro ao buscar esse repositório")
    );
  }
}

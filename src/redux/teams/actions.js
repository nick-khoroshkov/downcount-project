import { call, put, takeLatest } from "redux-saga/effects";
import api from "api/api";
import types from "../types";

function* getTeams({ payload }) {
  try {
    const { status, data } = yield call(api.teams.getTeams, payload);
    if (status < 200 || status >= 300) throw new Error("Something went wrong");
    if (data.length === 0) {
      yield put({
        type: types.GET_TEAMS_ERROR,
        payload:
          "Ooops! It's seems there is no teems available now. Please try another league",
      });
    } else {
      yield put({ type: types.GET_TEAMS_SUCCESS, payload: data });
    }
  } catch (error) {
    yield put({
      type: types.GET_TEAMS_ERROR,
      payload:
        "Something went wrong. There's an issue on our end and we can't show teams list. Please try again later",
    });
    if (error?.response?.status === 401) return;
    console.log("error", "Something went wrong");
  }
}

export function* teamsWatcher() {
  yield takeLatest(types.GET_TEAMS_START, getTeams);
}
